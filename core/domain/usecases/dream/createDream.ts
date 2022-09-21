import { DreamRepository } from "domain/repositories/dream";

export interface DeleteDreamUC {
  dreamRepository: DreamRepository;

  execute(id: number): Promise<void>;
}
