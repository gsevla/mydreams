type Headers = Record<string, any>;

type Params = Record<string, any>;

type Options = {
  headers: Headers;
  params: Params;
};

type Data = Record<string, any>;

type Return<T = any> = {
  status: number;
  data?: T;
};

export interface HttpClientProtocol {
  baseUrl: string;

  get<R = any>(url: string, config?: Options): Promise<Return<R>>;

  post<R = any>(url: string, body?: Data, config?: Options): Promise<Return<R>>;

  patch<R = any>(
    url: string,
    body?: Data,
    config?: Options
  ): Promise<Return<R>>;

  delete(url: string, config?: Options): Promise<Return>;
}
