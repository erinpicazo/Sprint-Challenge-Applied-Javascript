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


const Card = (article, topic) => {
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardAuthorImg = document.createElement('div');
    const cardAuthorImgContent = document.createElement('img');
    const cardAuthorName = document.createElement('span');
  
    card.className = 'card';
    cardHeadline.className = 'headline';
    cardAuthor.className = 'author';
    cardAuthorImg.className = 'img-container';
    card.setAttribute('data-topic', topic);
  
    cardHeadline.textContent = article.headline;
    cardAuthorImgContent.src = article.authorPhoto;
    cardAuthorName.textContent = article.authorName;
  
    card.append(cardHeadline);
    card.append(cardAuthor);
    cardAuthor.append(cardAuthorImg);
    cardAuthorImg.append(cardAuthorImgContent);
    cardAuthor.append(cardAuthorName);
  
    return card;
  };
  
  const cards = document.querySelector('.cards-container');
  
  axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      const articles = {};
      for (const topic in response.data.articles) {
        articles[topic] = response.data.articles[topic].map(article => Card(article, topic));
      }
  
      return articles;
    })
    .then(articles => {
      for (const topic in articles) {
        articles[topic].forEach(card => cards.append(card));
      }
    });