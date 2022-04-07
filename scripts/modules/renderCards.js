import preload from "./preload.js";

const renderNewsCards = (err, data, title, numberOfPosts) => {
  if (err) { // if the result did not come - show the stub "nothing found"
    const newsWrapperTitle = document.createElement('h2');
    newsWrapperTitle.classList.add('news_mainwrapper_title');
    newsWrapperTitle.textContent = 'По данному запросу ничего не найдено';
    document.querySelector('.block_news').prepend(newsWrapperTitle);
    console.warn(err, data);
    return;
  }

  const newsMainWrapper = document.createElement('div');
  newsMainWrapper.classList.add('.news_mainwrapper');

  const newsWrapperTitle = document.createElement('h2');
  newsWrapperTitle.classList.add('news_mainwrapper_title');
  newsWrapperTitle.textContent = title;
  newsMainWrapper.append(newsWrapperTitle);

  const newsWrapper = document.createElement('div');
  newsWrapper.classList.add('news_wrapper');
  newsMainWrapper.append(newsWrapper);

  const newsCardsArray = [];
  
  for (let i=0; i < numberOfPosts; i++){ // render only the specified number of posts
    const newsCard = document.createElement('a');
    newsCard.href=`${data[i].url}`;
    newsCard.classList.add('news_card');
    newsCard.innerHTML = `
    <div class="news_img_wrapper">
      <img src="${data[i].urlToImage}" alt="">
    </div>
    <div class="card_text_wrapper">
      <p><a class="news_title" href="${data[i].url}">${data[i].title}</a></p>
      <p class="news_text">${data[i].description}</p>
      <p class="news_date">${data[i].publishedAt}</p>
    </div>
    `;
    newsCardsArray.push(newsCard);
  };
  
  newsWrapper.append(...newsCardsArray);
  preload.remove();

  return newsMainWrapper;
};

export default renderNewsCards;