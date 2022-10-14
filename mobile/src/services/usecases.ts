import { BASE_URL } from "@env";
import { bootstrapUsecases } from "@mydreams/core";

class InnerUsecases {
  usecases: ReturnType<typeof bootstrapUsecases>["usecases"] | null = null;

  constructor() {
    this.usecases = bootstrapUsecases(BASE_URL).usecases;
  }
}

export default Object.freeze(new InnerUsecases());
