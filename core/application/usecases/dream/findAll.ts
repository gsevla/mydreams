import { Dream } from "../../../domain/entities/Dream";
import { DreamRepository } from "../../../domain/repositories/dream";
import { DreamFindAllUC } from "../../../domain/usecases/dream/findAll";

export class DreamFindAllUCImpl implements DreamFindAllUC {
  dreamRepository: DreamRepository;

  constructor(dreamRepository: DreamRepository) {
    this.dreamRepository = dreamRepository;
  }

  execute(): Promise<Dream[]> {
    return this.dreamRepository.findAll();
  }
}
