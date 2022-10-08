import { CreateDreamInput, Dream } from "../../../domain/entities/Dream";
import { DreamRepository } from "../../../domain/repositories/dream";
import { DreamUpdateUC } from "../../../domain/usecases/dream/update";

export class DreamUpdateUCImpl implements DreamUpdateUC {
  dreamRepository: DreamRepository;

  constructor(dreamRepository: DreamRepository) {
    this.dreamRepository = dreamRepository;
  }

  execute(
    id: number,
    data: Partial<CreateDreamInput>
  ): Promise<Dream | undefined> {
    return this.dreamRepository.update(id, data);
  }
}
