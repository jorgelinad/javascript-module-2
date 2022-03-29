
//Task 1
//=======
//Write JavaScript below that logs:
   // 1. all the "p" element nodes of the document,
   //--> should log a list of nodes with a length of 6

   const paragraph = document.querySelectorAll("p")
   console.log(paragraph);

    //2. the first div element node
    //--> should log the ".site-header" node

    const firstDiv = document.querySelector("div")
    console.log(firstDiv);

    //3. the element with id "jumbotron-text"
    //--> should log the "#jumbotron-text" node

    const jumbotronText = document.querySelector("#jumbotron-text")
    console.log(jumbotronText)

    //4. all the "p" elements of contained inside  the .primary-content element node
    //--> should log a list of nodes with a length of 3
    
    const primaryContent = document.querySelector(".primary-content").querySelectorAll("p")
    console.log(primaryContent);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
    const alertButton = document.querySelector("#alertBtn")
    alertButton.addEventListener("click", alertBikes)

    function alertBikes(){
        alert("Thanks for visiting Bikes for Refugees!")
    }

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
    const colors = ["pink", "blue", "purple", "yelow", "green"];
    const index = 0;

    const changeColour = document.querySelector("#bgrChangeBtn");
    changeColour.addEventListener("click", styleBackground);

    function styleBackground(e){
        const bodyColor = document.querySelector("body")
        if(index >= colors.length){
            index = 0;
        }
      
        bodyColor.style.backgroundColor = colors[index]
        index +1  
    }

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

    const buttonAddSomeText = document.querySelector("#addTextBtn")
    buttonAddSomeText.addEventListener("click", addSomeText)

    function addSomeText(text){
        const newParagraph = document.createElement("p")
        mainArticles.appendChild(newParagraph)
        newParagraph.innerText = "La bicicleta, coloquialmente llamada bici(también denominada como cicla o ciclo en Colombia, Cuba y Uruguay, chiva, en México y cleta o chancha en Chile), es un vehículo de transporte personal de propulsión humana. Es impulsada por el propio viajero, que acciona el vehículo con el esfuerzo muscular de las piernas, en particular mediante pedales o manivelas."
    }

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinks = document.querySelector("#largerLinksBtn")
largerLinks.addEventListener("click", textIncrease)

function textIncrease(){
    const linksIncrease = document.querySelectorAll("a")
    linksIncrease.forEach(a => a.style.fontSize = "1.5em")
}

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field


const buttonAddSomeText = document.querySelector("#addTextBtn")
    buttonAddSomeText.addEventListener("click", addSomeText)

    function addSomeText(text){
        const newParagraph = document.createElement("p")
        mainArticles.appendChild(newParagraph)
        newParagraph.innerText = "La bicicleta, coloquialmente llamada bici(también denominada como cicla o ciclo en Colombia, Cuba y Uruguay, chiva, en México y cleta o chancha en Chile), es un vehículo de transporte personal de propulsión humana. Es impulsada por el propio viajero, que acciona el vehículo con el esfuerzo muscular de las piernas, en particular mediante pedales o manivelas."
    }

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.

 const colors = ["pink", "blue", "purple", "yelow", "green"];
    const index = 0;

    const changeColour = document.querySelector("#bgrChangeBtn");
    changeColour.addEventListener("click", styleBackground);

    function styleBackground(e){
        const bodyColor = document.querySelector("body")
        if(index >= colors.length){
            index = 0;
        }
      
        bodyColor.style.backgroundColor = colors[index]
        index +1  
    }


*/

