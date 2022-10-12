jest.mock("axios", () => {
  return {
    create: jest.fn().mockReturnValue({
      get: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
      delete: jest.fn(),
    }),
  };
});
import axios from "axios";
import { AxiosHttpClientAdapter } from "./AxiosHttpClientAdapter";

describe("AxiosHttpClientAdapter", () => {
  const httpClient = new AxiosHttpClientAdapter(process.env.BASE_URL as string);

  const uri = "/test-http-adapter";

  expect(axios.create).toHaveBeenCalledWith({
    baseURL: process.env.BASE_URL,
  });

  const _axiosInstance = axios.create();

  const config = undefined;

  it("should call axios get method", async () => {
    const result = { status: 200, data: "OK" };
    (_axiosInstance.get as jest.Mock<any>).mockResolvedValueOnce(result);

    const response = await httpClient.get(uri);

    expect(_axiosInstance.get).toHaveBeenCalledWith(uri, config);
    expect(response).toEqual(result);
  });

  it("should call axios post method", async () => {
    const body = { test: "test" };
    const result = { status: 201, data: "OK" };
    (_axiosInstance.post as jest.Mock<any>).mockResolvedValueOnce(result);

    const response = await httpClient.post(uri, body);

    expect(_axiosInstance.post).toHaveBeenCalledWith(uri, body, config);
    expect(response).toEqual(result);
  });

  it("should call axios patch method", async () => {
    const body = { test: "test" };
    const result = { status: 200, data: "OK" };
    (_axiosInstance.patch as jest.Mock<any>).mockResolvedValueOnce(result);

    const response = await httpClient.patch(uri, body);

    expect(_axiosInstance.patch).toHaveBeenCalledWith(uri, body, config);
    expect(response).toEqual(result);
  });

  it("should call axios delete method", async () => {
    const result = { status: 200 };
    (_axiosInstance.delete as jest.Mock<any>).mockResolvedValueOnce(result);

    const response = await httpClient.delete(uri);

    expect(_axiosInstance.delete).toHaveBeenCalledWith(uri, config);
    expect(response).toEqual(result);
  });
});
