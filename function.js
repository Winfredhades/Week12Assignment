const renderContent = () => {
    const mainDiv = document.querySelector("#app");

    const firstSection = () => {

        const firsSectionDiv = document.createElement("div");

        firsSectionDiv.setAttribute("class", "section")

        const firstImg = document.createElement("img");
    
    firstImg.setAttribute("class", "Images");
    
    firstImg.setAttribute("src", "https://www.ludusglobal.com/hubfs/Apple-Vision-Pro--caracter%C3%ADsticas-y-precio-del-nuevo-visor-de-Apple.jpg");

    firstImg.setAttribute("alt", "Apple Vision Pro");

    const explanation = document.createElement("h3");

    explanation.textContent = "IFruit Vision Pro";

    explanation.setAttribute("class", "main-explanation");

    const informationText = document.createElement("span");

    informationText.textContent = "IFruit Vision Pro, This is Great Product For Your Needs.";

    informationText.setAttribute("class", "infotext");

    const price = document.createElement("div");

    price.textContent = "$9999";

    price.setAttribute("class", "price-tag");

    firsSectionDiv.appendChild(firstImg)

    firsSectionDiv.appendChild(explanation);

    firsSectionDiv.appendChild(informationText);

    firsSectionDiv.appendChild(price)

    mainDiv.appendChild(firsSectionDiv);
    }

    const secondSection = () => {

            
            const secondSectionDiv = document.createElement("div");

            const explanation = document.createElement("h3");

            explanation.setAttribute("class", "main-explanation");

            explanation.textContent = "Very Smartphone Galaxy 39";
        
            secondSectionDiv.setAttribute("class", "section");
        
            const secondImg = document.createElement("img");
        
            secondImg.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlp5VeZMQY7J5jMr3WzCnNzHgtAKhbP2uxNA&usqp=CAU");
        
            secondImg.setAttribute("class", "Images");
        
            secondImg.setAttribute("alt", "Samsung Galaxy 39");

            const informationText = document.createElement("span");

            informationText.textContent = "Description of Product 2. Get the Best Value With This Product."

            informationText.setAttribute("class", "infotext");

            const price = document.createElement("div");

    price.textContent = "$123";

    price.setAttribute("class", "price-tag");
        
            secondSectionDiv.appendChild(secondImg);

            secondSectionDiv.appendChild(explanation);

            secondSectionDiv.appendChild(informationText);

            secondSectionDiv.appendChild(price);
        
            mainDiv.appendChild(secondSectionDiv); 
    }

    const thirdSection =()=>{

        const thirdSectionDiv =document.createElement("div");

        thirdSectionDiv.setAttribute("class", "section");

        const explanation = document.createElement("h3");

        explanation.setAttribute("class", "main-explanation");

        explanation.textContent = "Earphone";

        const thirdImg = document.createElement("img");

    thirdImg.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR4wMKy_COCX7ygU9tLKZt-EMMI_5U1N98Z0VUOiFSZA0yL1FK2HVDydkOyAgQ5p6Gbw&usqp=CAU");

    thirdImg.setAttribute("alt", "EarPhone");

    thirdImg.setAttribute("class", "Images");

    const informationText = document.createElement("span");

        informationText.textContent = "The Perfect Solution For Your requirements.";

        informationText.setAttribute("class", "infotext");

        const price = document.createElement("div");

    price.textContent = "$230";

    price.setAttribute("class", "price-tag");

    thirdSectionDiv.appendChild(thirdImg);

    thirdSectionDiv.appendChild(explanation);

    thirdSectionDiv.appendChild(informationText);

    thirdSectionDiv.appendChild(price)

    mainDiv.appendChild(thirdSectionDiv);
    }
    firstSection();
    secondSection();
    thirdSection();

}

const renderNav = () => {
    const headerSection = document.createElement("nav");
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("id","header")
    headerSection.appendChild(headerDiv);
    document.body.appendChild(headerSection)
}

const renderFooter = () =>{
    const footerSection = document.createElement("footer");
    const footerDiv = document.createElement("div");
    footerDiv.setAttribute("id","footer")
    footerSection.appendChild(footerDiv);
    document.body.appendChild(footerSection)

}

export {renderContent, renderNav , renderFooter};