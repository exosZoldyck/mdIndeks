<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mdIndeks</title>
    <link rel="stylesheet" href="fonts.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="markdown.css">
    <link rel="stylesheet" href="contents.css">
    <link rel="stylesheet" href="copy.css">
    <link rel="preload" as="style" href="fonts.css" fetchpriority="high">
    <link rel="preload" as="style" href="style.css" fetchpriority="high">
    <link rel="preload" as="style" href="markdown.css" fetchpriority="high">
    <link rel="preload" as="style" href="contents.css" fetchpriority="high">
    <link rel="preload" as="style" href="copy.css" fetchpriority="high">
    <link rel="preload" as="script" href="modules/marked.min.js" fetchpriority="high">
    <link rel="preload" as="script" href="read.js" fetchpriority="high">
    <link rel="preload" as="script" href="contents.js" fetchpriority="high">
    <link rel="preload" as="script" href="copy.js" fetchpriority="high">
    <link rel="shortcut icon" href="assets/icons/favicon.ico" type="image/x-icon">
</head>
<body>
    <div id="contents-table-container">
        <span id="contents-table"></span>
    </div>
    
    <main>
        <div id="page-container">
            <span id="text-container"></span>
        </div>
    </main>
    
    <div id="buttons-container">
        <a href="./edit/"><img class="button-img no-outline" src="assets/icons/edit.svg"></a>
    </div>
    
    <script src="modules/marked.min.js"></script>
    <script src="copy.js"></script>
    <script src="read.js"></script>
    <script src="contents.js"></script>
</body>
</html>