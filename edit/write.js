function writeToFile(callback){
    const editText = document.getElementById("editText-container");
    editText.innerHTML = editText.innerHTML.trimEnd();
    const url = 'write.php';
    const data = {text: editText.value};

    fetch(url, { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(data) 
    }) 
    .then(response => { 
        if (!response.ok) { 
            throw new Error('Network response was not ok ' + response.statusText); 
        } 
        return callback();//console.log("Network response was ok!");
    }) 
    .then(data => { 
        //console.log('Success:', data); 
    }) 
    .catch(error => { 
        //console.error('Error:', error); 
    }); 
}

// Capture Ctrl + S and use it to trigger save
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        console.log('Caught Ctrl + S event!');

        writeToFile(() => {
            alert("File saved!");
        });
    }
    else if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        console.log('Caught Ctrl + E event!');

        window.location.replace("../");
    }
});