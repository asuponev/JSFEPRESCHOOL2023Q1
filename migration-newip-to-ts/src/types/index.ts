export interface IArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface IArticles {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

export interface ISources {
  status: string;
  sources: ISource[];
}

export enum Method {
  GET = 'GET',
  POST = 'POST',
}

export enum Endpoint {
  sources = 'sources',
  everything = 'everything',
}

export type RequestOptions = Record<string, string>;

export interface IResp {
  endpoint: Endpoint;
  options?: RequestOptions;
}
