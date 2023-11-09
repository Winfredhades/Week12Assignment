const firstSection = () => {
    const mainDiv = document.querySelector("#app");

    console.log(mainDiv)

    const firstDiv = document.createElement("img");
    
    firstDiv.setAttribute("class", "Images");
    
    firstDiv.setAttribute("src", "https://www.ludusglobal.com/hubfs/Apple-Vision-Pro--caracter%C3%ADsticas-y-precio-del-nuevo-visor-de-Apple.jpg")

    firstDiv.setAttribute("alt", "Apple Vision Pro");

    mainDiv.appendChild(firstDiv);
}

const renderNav = () => {
    const headerSection = document.createElement("nav");
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("id","header")
    headerSection.appendChild(headerDiv);
    document.body.appendChild(headerSection)
}

const footer = () =>{
    const footerSection = document.createElement("footer");
    const footerDiv = document.createElement("div");
    footerDiv.setAttribute("id","footer")
    footerSection.appendChild(footerDiv);
    document.body.appendChild(footerSection)

}

export {firstSection, renderNav , footer};