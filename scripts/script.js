import { initNews } from "./modules/getCards.js";
import { getSearchNews } from "./modules/searchNews.js";

initNews(12); // initial download of news. Passed parameter - the number of displayed news
getSearchNews(); // add listeners rendering news by search query