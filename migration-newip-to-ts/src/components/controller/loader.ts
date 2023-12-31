import { RequestOptions, IResp, Endpoint, Method } from '../../types/index';

class Loader {
  constructor(private baseLink: string, private options: RequestOptions) {}

  protected getResp<T>(
    { endpoint, options = {} }: IResp,
    callback: (data: T) => void = (): void => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load(Method.GET, endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: Partial<RequestOptions>, endpoint: string): string {
    const urlOptions: Partial<RequestOptions> = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load<T>(
    method: Method,
    endpoint: Endpoint,
    callback: (data: T) => void,
    options: Partial<RequestOptions> = {}
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: T) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
