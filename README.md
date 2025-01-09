<p align="center"><a href="https://fmd.ag/?utm_source=github" target="_blank"><img src="https://raw.githubusercontent.com/agenciafmd/starter/v11/public/vendor/admix-ui/images/fmd.svg" width="250" alt="Agência F&MD Logo"></a></p>

<p align="center">
<a href="https://packagist.org/packages/agenciafmd/starter"><img src="https://img.shields.io/packagist/dt/agenciafmd/starter" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/agenciafmd/starter"><img src="https://img.shields.io/packagist/l/agenciafmd/starter" alt="License"></a>
</p>

## O que é?

Este é o esqueleto de desenvolvimento dos nossos sites e apps.

## Como começar?

Para começar, crie o projeto com o comando:

```bash
composer create-project agenciafmd/starter:v11.x-dev nome-do-projeto
```

> O `v11.x-dev` no comando, irá garantir que a versão 11 do Laravel será usada.

## Do que preciso?

TODO: Adicionar os requisitos do projeto / Docker / Podman

## Como alimento o projeto?

Uma vez que o projeto foi criado, você pode alimentá-lo com dados fictícios
usando o comando:

```bash
php artisan migrate:fresh --seed
```

Caso sinta lentidão, você pode alterar a configuração do processamento de fila
no arquivo `.env`,
alterando o valor do `QUEUE_CONNECTION` de `sync` para `redis`.

Refaça o processo de alimentação e execute o horizon após o término.

```bash
php artisan migrate:fresh --seed && php artisan horizon
```

Para ter melhor visão sobre o processo do horizon, abra o dashboard dele no seu
projeto.

```
http://nome-do-projeto.local/horizon
```

## Vixi, deu erro de banco

Provavelmente, não temos o banco criado.
Por padrão, agora usamos o SQLite, então você pode criar o banco com o comando:

```bash
touch database/database.sqlite
```

## Não consigo ver as imagens, e agora?

Vamos deixar o storage publico. Assim, todas as imagens que salvarmos no
storage, poderão ser acessadas diretamente.

```bash
php artisan storage:link
```

## Vai codar front-end?

Acesse a [documentação específica](./resources/README.md).

## Conheça nossa família

- [Área Administrativa](https://github.com/agenciafmd/admix)
- [Banners](https://github.com/agenciafmd/admix-banners)
- [Email](https://github.com/agenciafmd/admix-postal)
- [e mais](https://github.com/agenciafmd?utf8=%E2%9C%93&q=admix-&type=&language=)

## Requisitos do projeto

- Versão do PHP: **^8.2**
- Versão do Node: **20+**

## Licença

Nossos pacotes são abertos, [MIT](https://opensource.org/licenses/MIT) para os
mais chegados.
