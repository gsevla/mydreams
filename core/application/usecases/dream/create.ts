import { CreateDreamInput, Dream } from "../../../domain/entities/Dream";
import { DreamRepository } from "../../../domain/repositories/dream";
import { DreamCreateUC } from "../../../domain/usecases/dream/create";

export class DreamCreateUCImpl implements DreamCreateUC {
  dreamRepository: DreamRepository;

  constructor(dreamRepository: DreamRepository) {
    this.dreamRepository = dreamRepository;
  }

  execute(data: CreateDreamInput): Promise<Dream | undefined> {
    return this.dreamRepository.create(data);
  }
}
