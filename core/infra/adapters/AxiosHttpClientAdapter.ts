import axios, { AxiosInstance } from "axios";
import { HttpClientProtocol } from "../../application/protocols/HttpClient";

export class AxiosHttpClientAdapter implements HttpClientProtocol {
  baseUrl: string;

  private client: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.client = axios.create({ baseURL: baseUrl });
  }

  async get<R = any>(
    url: string,
    config?: { headers: { [x: string]: any }; params: { [x: string]: any } }
  ): Promise<{ status: number; data?: R }> {
    const result = await this.client.get(url, config);
    return {
      status: result.status,
      data: result.data,
    };
  }

  async post<R = any>(
    url: string,
    body?: { [x: string]: any },
    config?: { headers: { [x: string]: any }; params: { [x: string]: any } }
  ): Promise<{ status: number; data?: R }> {
    const result = await this.client.post(url, body, config);
    return {
      status: result.status,
      data: result.data,
    };
  }

  async patch<R = any>(
    url: string,
    body?: { [x: string]: any },
    config?: { headers: { [x: string]: any }; params: { [x: string]: any } }
  ): Promise<{ status: number; data?: R }> {
    const result = await this.client.patch(url, body, config);
    return {
      status: result.status,
      data: result.data,
    };
  }

  async delete(
    url: string,
    config?: { headers: { [x: string]: any }; params: { [x: string]: any } }
  ): Promise<{ status: number }> {
    const result = await this.client.delete(url, config);
    return {
      status: result.status,
    };
  }
}
