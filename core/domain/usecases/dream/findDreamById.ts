import { Dream } from "@entities/dream";
import { DreamRepository } from "domain/repositories/dream";

export interface FindDreamByIdUC {
  dreamRepository: DreamRepository;

  execute(id: number): Promise<Dream | undefined>;
}
