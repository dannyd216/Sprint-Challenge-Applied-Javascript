// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles


// Study the response data you get back, closely.


// You will be creating a card for each 'article' in the response.


// This won't be as easy as just iterating over an array though.


//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


// CREATE THE ARTICLE FUNCTION USING THE DOM 
function articleCreator(article) {


    //CREATE COMPO
    const articleCard = document.createElement('div')

    // headline div
    const articLine = document.createElement('div')

    const artAuthDiv = document.createElement('div')

    const imgContDiv = document.createElement('div')

    const image = document.createElement('img')

    const nameSpan = document.createElement('span')


    // APPEND TO PARENT

    articleCard.appendChild(articLine)
    articleCard.appendChild(artAuthDiv)

    artAuthDiv.appendChild(imgContDiv)
    artAuthDiv.appendChild(nameSpan)

    imgContDiv.appendChild(image)


    // PROPERTIES

    articleCard.classList.add('card')

    articLine.classList.add('headline')

    articLine.textContent = `${article.headline}`

    artAuthDiv.classList.add('author')

    imgContDiv.classList.add('img-container')

    image.src = article.authorPhoto

    nameSpan.textContent = `By ${article.authorName}`


// RETURN THE FULL CARD OR DIV OR CONTAINER
return articleCard

}

// build handshake bet card-container and articleCont
const articleCont = document.querySelector('.cards-container')



// CALL TO AXIOS TO GET INFO
axios.get("https:lambda-times-backend.herokuapp.com/articles")
.then((response) => {

    // reach in the data with dot notation each level
    response.data.articles.javascript.forEach((article) => {

    //     console.log(response.javascript)

     articleCont.appendChild(articleCreator(article))
    })

})
    .catch((error) => {
    
        console.log(`There is an error  `)
})


