import { AxiosHttpClientAdapter } from "../adapters/AxiosHttpClientAdapter";
import { AxiosHttpClientFactory } from "./AxiosHttpClientFactory";

describe("AxiosHttpClientAdapterFactory", () => {
  it("should have a create method", () => {
    expect(AxiosHttpClientFactory).toHaveProperty("create");
    expect(typeof AxiosHttpClientFactory.create).toBe("function");
  });

  test("create method returns an instance of AxiosHttpClientFactory", () => {
    const httpClient = AxiosHttpClientFactory.create(
      process.env.BASE_URL as string
    );

    expect(httpClient instanceof AxiosHttpClientAdapter).toBe(true);
  });
});
