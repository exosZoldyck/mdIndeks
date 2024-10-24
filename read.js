function readFile(filename){
    const textContainer = document.getElementById('text-container');
    let textContent = "";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            textContent = this.responseText;
            textContainer.innerHTML = marked.parse(textContent);
    
            // Make first header not add to much margin on top
            firstElem = textContainer.firstChild;
            firstElem.style.marginTop = "0px";
    
            // Create the table of contents and the codeblock copy buttons
            createContentsTable(); 
            addCopyButtons(); 
        }
    };
    xmlhttp.open("GET", `./read.php?filename=${filename}`, true);
    xmlhttp.send();
}

document.onload = readFile("index.md");

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        console.log('Caught Ctrl + E event!');

        window.location.replace("./edit");
    }
});