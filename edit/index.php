<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="stylesheet" href="../fonts.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <textarea name="" id="editText-container" autofocus>
<?php 
    $file = fopen("../index.md", "r") or die("Unable to open file!");
    echo fread($file, filesize("../index.md"));
    fclose($file);
?>
    </textarea>

    <div id="buttons-container">
        <img class="button-img no-outline" onclick="writeToFile()" src="../assets/icons/save-floppy.svg">
        <a href="../"><img class="button-img no-outline" src="../assets/icons/return.svg"></a>
    </div>

    <script src="write.js"></script>
</body>
</html>