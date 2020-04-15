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

const root = document.querySelector('.header-container')

root.appendChild(Header())

function Header(data) {

    const header = document.createElement('div')
    const span = document.createElement('span')
    const h1 = document.createElement('h1')
    const span2 = document.createElement('span')


    header.appendChild(span)
    header.appendChild(h1)
    header.appendChild(span2)


    header.classList.add('header')
    span.classList.add('date')
    span2.classList.add('temp')

    span.textContent = 'SMARCH 28, 2019'
    h1.textContent = 'Lambda Times'
    span2.textContent = '98\xB0'




    return header
}
