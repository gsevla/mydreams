import { Dream } from "../../entities/Dream";
import { DreamRepository } from "../../repositories/dream";

export interface DreamFindAllUC {
  dreamRepository: DreamRepository;

  execute(): Promise<Array<Dream>>;
}
