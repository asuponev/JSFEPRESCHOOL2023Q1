import Loader from './loader';

const BASE_URL: string =
  process.env.NODE_ENV === 'development' ? 'https://newsapi.org/v2/' : 'https://news-proxy.spanb4.shop/';

const apiKey: string = process.env.NEWS_API_KEY ? process.env.NEWS_API_KEY : '';

class AppLoader extends Loader {
  constructor() {
    super(BASE_URL, {
      apiKey,
    });
  }
}

export default AppLoader;
