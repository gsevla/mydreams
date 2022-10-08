import { AxiosHttpClientAdapter } from "../adapters/AxiosHttpClientAdapter";

export class AxiosHttpClientFactory {
  static create(baseUrl: string) {
    return new AxiosHttpClientAdapter(baseUrl);
  }
}
