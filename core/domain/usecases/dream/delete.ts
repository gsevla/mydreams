import { DreamRepository } from "../../repositories/dream";

export interface DreamDeleteUC {
  dreamRepository: DreamRepository;

  execute(id: number): Promise<void>;
}
