import { Dream } from "@entities/dream";
import { DreamRepository } from "domain/repositories/dream";

export interface FindAllDreamUC {
  dreamRepository: DreamRepository;

  execute(): Promise<Array<Dream>>;
}
