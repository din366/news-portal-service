import fetchRequest from "./fetchRequest.js";
import renderNewsCards from "./renderCards.js";
import preload from "./preload.js";

export const initNews = async (numberOfPosts) => { // initial download of news
  preload.show();
  const getCards = await fetchRequest('top-headlines?country=ru', {
    callback: renderNewsCards,
    headers: {
      'X-Api-Key': 'a7f0af9f13fc45caae08bce068de5b01',
    },
    title: 'Самые свежие новости',
    numberOfPosts: numberOfPosts,
  });
  
  document.querySelector('.block_news').append(getCards);
}

