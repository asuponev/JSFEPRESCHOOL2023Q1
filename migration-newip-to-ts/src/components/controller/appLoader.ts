import Loader from './loader';

const BASE_URL: string = process.env.NEWS_BASE_URL ? process.env.NEWS_BASE_URL : 'https://newsapi.org/v2/';
const apiKey: string = process.env.NEWS_API_KEY ? process.env.NEWS_API_KEY : '';

class AppLoader extends Loader {
  constructor() {
    super(BASE_URL, {
      apiKey,
    });
  }
}

export default AppLoader;
