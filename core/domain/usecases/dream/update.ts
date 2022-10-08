import { Dream, UpdateDreamInput } from "../../entities/Dream";
import { DreamRepository } from "../../repositories/dream";

export interface DreamUpdateUC {
  dreamRepository: DreamRepository;

  execute(id: number, data: UpdateDreamInput): Promise<Dream | undefined>;
}
