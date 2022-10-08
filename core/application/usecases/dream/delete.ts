import { DreamRepository } from "../../../domain/repositories/dream";
import { DreamDeleteUC } from "../../../domain/usecases/dream/delete";

export class DreamDeleteUCImpl implements DreamDeleteUC {
  dreamRepository: DreamRepository;

  constructor(dreamRepository: DreamRepository) {
    this.dreamRepository = dreamRepository;
  }

  execute(id: number): Promise<void> {
    return this.dreamRepository.delete(id);
  }
}
