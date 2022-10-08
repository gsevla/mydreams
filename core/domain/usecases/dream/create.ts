import { CreateDreamInput, Dream } from "../../entities/Dream";
import { DreamRepository } from "../../repositories/dream";

export interface DreamCreateUC {
  dreamRepository: DreamRepository;

  execute(data: CreateDreamInput): Promise<Dream | undefined>;
}
