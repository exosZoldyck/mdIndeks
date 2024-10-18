<?php 
    $myfile = fopen("index.md", "r") or die("Unable to open file!");
    echo fread($myfile, filesize("index.md"));
    fclose($myfile);
?>