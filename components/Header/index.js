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

    // COMPONENT CREATION

    // create the header class div
    const headerDiv = document.createElement('div')

    // create the date class span
    const dateSpan = document.createElement('span')

    // create the h1
    const headH1 = document.createElement('h1')

    // create the temp class span
    const tempSpan = document.createElement('span')

    // ASSIGN CLASS PROPERTIES

    // header class div
    headerDiv.classList.add('header')

    // date class span
    dateSpan.classList.add('date')

    // temp class span
    tempSpan.classList.add('temp')


    // ASSIGN THE TEXT 

    // date span
    dateSpan.textContent = 'SMARCH 28, 2019'

    // header text
    headH1.textContent = 'Lambda Times'

    // temp span text
    tempSpan.textContent = '98\xB0'

    // APPEND THE ITEMS TO THEIR PARENT COMPONS

    // append date span to its parent
    headerDiv.appendChild(dateSpan)

    // append header to headerclas div
    headerDiv.appendChild(headH1)

    // append tempSpan to headerclass div
    headerDiv.appendChild(tempSpan)

    // RETURN THE ENTIRE COMPONENT
    return headerDiv



}

// const hedder = Header();

// console.log(Header());



// CREATED A VAR TO HOLD THE HTML COMPO
const headCompon = document.querySelector('.header-container')

// APPEND THE HEADER COMPO TO THE HTML PAGE
headCompon.appendChild(Header()) // MUST INCLUDE ()
//THIS APPENDED THE HEADER CORRECTLY