type ResponseWithData<T> = {
  data: T;
};

type ResponseWithError = {
  error: string;
};

export type Response<T = {}> = Promise<
  {
    status: number;
  } & (ResponseWithData<T> | ResponseWithError)
>;
