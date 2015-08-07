<?php

namespace App\Libraries;

/**
* Class to load files in app
*/
class FileSystem
{

    public function readFile($path)
    {
        if (!file_exists($path)) return false;

        return file_get_contents($path);
    }
}
