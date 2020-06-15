// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //create elements
    let menuDiv = document.createElement('div');
    let date = document.createElement('span');
    let header = document.createElement('h1');
    let temp = document.createElement('span');

    //add text
    date.textContent = "SMARCH 28, 2019";
    header.textContent = "Lambda Times";
    temp.textContent = "98°";

    //add classes
    menuDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //append elements
    menuDiv.appendChild(date);
    menuDiv.appendChild(header);
    menuDiv.appendChild(temp);

    //return
    return menuDiv;

}

let headerContainer = document.querySelector('div.header-container');

let menu = new Header();

headerContainer.appendChild(menu);