@setup
    require __DIR__.'/vendor/autoload.php';

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);

    try {
        $dotenv->load();
        $dotenv->required([
                'SERVER_DEVELOP',
                'SERVER_PRODUCTION',
            ])->notEmpty();
    } catch ( Exception $exception )  {
        echo $exception->getMessage();
        exit;
    }

    $serverDevelopment = env('SERVER_DEVELOP');
    $serverProduction = env('SERVER_PRODUCTION');
    $slackBot = env('LOG_SLACK_WEBHOOK_URL');

    $branch = ($branch) ?? 'develop';

    if ($branch == 'develop') {
        $dir = '/var/www/vhosts/mixd.com.br/xxxxxxxxxxx.mixd.com.br';
        $php = '/opt/plesk/php/7.4/bin/php';
        $composer = '/usr/lib/plesk-9.0/composer.phar';
    }

    if ($branch == 'master') {
        $dir = '/var/www/vhosts/mixdinternet.com.br/xxxxxxxxxxx.com.br';
        $php = '/opt/plesk/php/7.4/bin/php';
        $composer = '/usr/lib/plesk-9.0/composer.phar';
    }
@endsetup

@servers(['develop' => $serverDevelopment, 'master' => $serverProduction])

@story('deploy', ['on' => $branch])
    down
    clear
    pull
    remove
    install
    migrate
    optimize
    up
@endstory

@story('fast-deploy', ['on' => $branch])
    down
    clear
    pull
    optimize
    up
@endstory

@task('install', ['on' => $branch])
    echo 'Executando a instalação das dependências'
    @if ($branch == 'develop')
        cd {{ $dir }} && {{ $php }} {{ $composer }} install --optimize-autoloader
    @else
        cd {{ $dir }} && {{ $php }} {{ $composer }} install --optimize-autoloader --no-dev
    @endif
@endtask

@task('migrate', ['on' => $branch])
    echo 'Executando as migrações'
    cd {{ $dir }} && {{ $php }} artisan migrate --force
@endtask

@task('down', ['on' => $branch])
    echo 'Ativando modo manutenção'
    cd {{ $dir }} && {{ $php }} artisan down
@endtask

@task('up', ['on' => $branch])
    echo 'Desativando modo manutenção'
    cd {{ $dir }} && {{ $php }} artisan up
@endtask

@task('remove', ['on' => $branch])
    echo 'Removendo a pasta vendor'
    if [ -d {{ $dir }}/vendor ]; then
        rm -rf {{ $dir }}/vendor
    fi
@endtask

@task('pull', ['on' => $branch])
    echo 'Atualizando a partir do repositório'
    cd {{ $dir }} && git reset --hard && git pull origin {{ $branch }}
@endtask

@task('optimize', ['on' => $branch])
    echo 'Otimizando'
    cd {{ $dir }} && {{ $php }} artisan page-cache:clear
    cd {{ $dir }} && {{ $php }} artisan admix:optimize
    cd {{ $dir }} && {{ $php }} {{ $composer }} dumpautoload --optimize
@endtask

@task('clear', ['on' => $branch])
    echo 'Apagando os caches'
    cd {{ $dir }} && {{ $php }} artisan admix:clear
    cd {{ $dir }} && {{ $php }} artisan page-cache:clear
    cd {{ $dir }} && {{ $php }} {{ $composer }} clear-cache
@endtask

@task('version', ['on' => $branch])
    {{ $php }} -v
@endtask

@after
    if ($task !== 'deploy') {
        return;
    }

    if (!$slackBot) {
        return;
    }

    @slack($slackBot, '#logs-warnings', "Deploy feito em " . basename($dir))
@endafter