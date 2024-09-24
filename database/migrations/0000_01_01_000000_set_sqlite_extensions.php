<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    public function up(): void
    {
        $default = config('database.default');

        if ($default === 'sqlite') {
            $db = DB::connection(config('database.default'))
                ->getPdo();
//            // Use the Write-Ahead Logging (WAL) journal mode for better performance and concurrency.
//            $db->exec('PRAGMA journal_mode = wal;');
            // Synchronize less often to the filesystem for better performance, while still maintaining database consistency.
            $db->exec('PRAGMA synchronous = normal;');
            // Enable foreign key constraints for data integrity, though this may have a slight performance impact.
            $db->exec('PRAGMA foreign_keys = on;');
            // Store temporary files in memory for better performance.
            $db->exec('PRAGMA temp_store = memory;');
            // Enable memory mapping for faster access to the database, if your system has enough memory.
            $db->exec('PRAGMA mmap_size = 30000000000;');
            // Increase the page size, which can improve performance for databases with large BLOBs.
            $db->exec('PRAGMA page_size = 32768;');
            // Regularly vacuum the database to reclaim space from deleted data.
            $db->exec('PRAGMA auto_vacuum = incremental;');
            $db->exec('PRAGMA incremental_vacuum;');
        }
    }
};