const url = 'https://newsapi.org/v2/';

const fetchRequest = async (postfix, {
  method = 'get',
  callback,
  body,
  headers,
  title, // news block title in the callback
  numberOfPosts, // the number of posts that will be rendered in the callback
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(`${url}${postfix}`, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data.articles, title, numberOfPosts);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;