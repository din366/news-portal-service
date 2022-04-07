import fetchRequest from "./fetchRequest.js";
import renderNewsCards from "./renderCards.js";
import { initNews } from "./getCards.js";

const blockNews = document.querySelector('.block_news'); // main block for all news (for search block and headlines)

export const getSearchNews = () => {
  const form = document.querySelector('.search_form');
  const input = form.querySelector('.search_form_input');

  input.addEventListener('change', (e) => {
    if (input.value == ''){ // if the request is deleted - return the latest news
      blockNews.textContent = '';
      initNews(12); // the number of displayed news is transmitted
    }
  }) 

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchText = input.value;
  if (searchText === '') { // exit if empty string is sent
    return;
  }
  blockNews.textContent = '';
  
  const searchNews = async () => {
    const getCards = await fetchRequest(`everything?q={${searchText}}`, {
      callback: renderNewsCards,
      headers: {
        'X-Api-Key': 'a7f0af9f13fc45caae08bce068de5b01',
      },
      title: `Новости по запросу "${searchText}"`,
      numberOfPosts: 8,
    });
  
    if (getCards === undefined) { // don't try to add an empty function result
      return;
    }
    blockNews.append(getCards);
  }
  
  searchNews();
  initNews(4); // the number of displayed news is transmitted
});
}


