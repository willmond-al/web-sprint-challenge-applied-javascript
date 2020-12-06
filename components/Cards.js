// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
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
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardContainer = document.querySelector('.cards-container')

axios 
.get('https://lambda-times-api.herokuapp.com/articles')
.then((res) => {
    const JSArticles = res.data.articles.javascript;
    console.log(res.data.articles)
    const bootArticles = res.data.articles.bootstrap;
    const techArticles = res.data.articles.technology;
    const nodeArticles = res.data.articles.node;
    const jqueryArticles = res.data.articles.jquery;
    JSArticles.forEach(item => {
        const articles = cardMaker(item)
        console.log(cardContainer.appendChild(articles))
    });
    JSArticles.forEach(item => {
        const articles = cardMaker(item)
        console.log(cardContainer.appendChild(articles))
    });
    bootArticles.forEach(item => {
        const articles = cardMaker(item)
        console.log(cardContainer.appendChild(articles))
    });
    techArticles.forEach(item => {
        const articles = cardMaker(item)
        console.log(cardContainer.appendChild(articles))
    });
    nodeArticles.forEach(item => {
        const articles = cardMaker(item)
        console.log(cardContainer.appendChild(articles))
    });
    jqueryArticles.forEach(item => {
        const articles = cardMaker(item)
        console.log(cardContainer.appendChild(articles))
    });

    const newCard = cardMaker(articleObj);
    //    articleObj.forEach(item => {
    //     const newCard = cardMaker(item)
    //     cardContainer.appendChild(newCard)
    //    });
    })
    
    .catch(err =>{
        console.log('error!')
    })


function cardMaker(obj){

    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image2 = document.createElement('img');
    const authorName = document.createElement('span');
    
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    

    headLine.textContent = obj.headline;
    image2.src = obj.authorPhoto;
    authorName.textContent = `By ${obj.authorName}`

    
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image2);
    author.appendChild(authorName);

    card.addEventListener('click', (event)=>{
        console.log(headLine.textContent);
    })

    return card
    
}



