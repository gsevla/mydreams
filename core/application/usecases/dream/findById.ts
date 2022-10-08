import { Dream } from "../../../domain/entities/Dream";
import { DreamRepository } from "../../../domain/repositories/dream";
import { DreamFindByIdUC } from "../../../domain/usecases/dream/findById";

export class DreamFindByIdUCImpl implements DreamFindByIdUC {
  dreamRepository: DreamRepository;

  constructor(dreamRepository: DreamRepository) {
    this.dreamRepository = dreamRepository;
  }

  execute(id: number): Promise<Dream | undefined> {
    return this.dreamRepository.findById(id);
  }
}
