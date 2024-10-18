function addCopyButtons(){
    const textContainer = document.getElementById('text-container');
    if (textContainer === undefined) return Error("Missing text container!");
    
    const textContainerChildren = textContainer.children;

    let globalCodeblockIdCounter = 0;
    for (let i = 0; i < textContainerChildren.length; i++){
        element = textContainerChildren[i];

        if (element.nodeName === "PRE" && element.childNodes[0].nodeName === "CODE") {
            globalCodeblockIdCounter++;
            const codeblock = element;
            codeblock.id = `codeblock_${globalCodeblockIdCounter}`;

            // Create codeblock container, 
            // replace codeblock with container,
            // then append container with codeblock
            const codeblockContainer = document.createElement('div');
            textContainer.replaceChild(codeblockContainer, codeblock);
            codeblockContainer.appendChild(codeblock);
            
            codeblockContainer.classList.add('pre-container');

            const copyButton = document.createElement('div');;
            copyButton.classList.add('button-copy');
            copyButton.addEventListener("click", () => {
                copyFromCodeElement(event.target);
            });

            const copyButtonImg = document.createElement('img');
            copyButtonImg.classList.add('button-copy-img');
            copyButtonImg.classList.add('no-outline');
            copyButtonImg.src = "assets/icons/copy.svg";
            
            codeblockContainer.append(copyButton);
            copyButton.append(copyButtonImg);
        }
    }
}

function copyFromCodeElement(copyButton){
    if (copyButton == undefined) return console.error("Element not found!");
    
    const codeElement = copyButton.parentElement.parentElement.childNodes[0];
    if (codeElement == undefined) return console.error("PRE element has no child CODE element!");

    copyToClipboard(codeElement.innerText).then(() => {
        // Adding the click animation
        copyButton.classList.remove('button-click-anim-1');
        copyButton.classList.add('button-click-anim-1');
        copyButton.addEventListener("animationend", (event) => {
            copyButton.classList.remove('button-click-anim-1');
        });
    });
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text.trimEnd());
        console.log('Content copied to clipboard');

    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}