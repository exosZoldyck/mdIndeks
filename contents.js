function createContentsTable(){
    const textContainer = document.getElementById('text-container');
    if (textContainer === undefined) return Error("Missing text container!");
    
    const textContainerChildren = textContainer.children;
    
    let headerList = [];
    let globalHeaderIdCounter = 0;
    for (let i = 0; i < textContainerChildren.length; i++){
        element = textContainerChildren[i];

        if (element.nodeName === "H1" || 
            element.nodeName === "H2" || 
            element.nodeName === "H3" || 
            element.nodeName === "H4" || 
            element.nodeName === "H5" || 
            element.nodeName === "H6"
        ){
            globalHeaderIdCounter++;
            element.id = `header_${globalHeaderIdCounter}`;

            const header = {id: element.id, type: element.nodeName, text: element.innerHTML}
            headerList.push(header);
        }
    }

    const contentsTable = document.getElementById('contents-table');
    if (contentsTable === undefined) return Error("Missing contents table!");

    headerList.forEach(header => {
        const entryContainer = document.createElement('div');
        entryContainer.classList.add('entry-container');

        if (header.type != "H1"){
            const arrow = document.createElement('span');
            arrow.innerHTML = "↳ ";
            arrow.style.marginLeft = `${((Number.parseInt(header.type[1])) - 2) * 20}px`;
            arrow.classList.add('header-arrow');
            entryContainer.append(arrow);
        }

        const entry = document.createElement('a')
        entry.href = `#${header.id}`;
        entry.innerHTML = header.text;

        entryContainer.append(entry);
        contentsTable.append(entryContainer);
    });
}