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

function artCreator(info) {
  const article = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const imgConta = document.createElement("div");
  const img = document.createElement("img");
  const aName = document.createElement("span");

  article.appendChild(title);
  article.appendChild(author);

  author.appendChild(imgConta);
  author.appendChild(aName);

  imgConta.appendChild(img);

  article.classList.add("card");
  title.classList.add("headline");
  author.classList.add("author");
  imgConta.classList.add("img-container");

  img.src = info.authorPhoto;

  aName.textContent = `By: ${info.authorName}`;
  title.textContent = `${info.headline}`;

  return article;
}

// HANDSHAKE
const articleCompon = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    res.data.articles.javascript.forEach((element) => {
      articleCompon.appendChild(artCreator(element));
    });
  })
  .catch((err) => {
    console.log("THere WAS an ERRor!!!");
  });

// // CALL TO AXIOS TO GET INFO
// axios
//   .get("https:lambda-times-backend.herokuapp.com/articles")
//   .then((response) => {
//     console.log(response);
//     // reach in the data with dot notation each level
//     response.data.articles.javascript.forEach((element) => {
//       //     console.log(response.javascript)

//       articleCompon.appendChild(artCreator(element));
//     });
//   })
//   .catch((error) => {
//     console.log(`There is an error`);
//   });
