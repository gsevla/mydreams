import { Dream } from "../../entities/Dream";
import { DreamRepository } from "../../repositories/dream";

export interface DreamFindByIdUC {
  dreamRepository: DreamRepository;

  execute(id: number): Promise<Dream | undefined>;
}
