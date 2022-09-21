import { Dream, UpdateDreamInput } from "@entities/dream";
import { DreamRepository } from "domain/repositories/dream";

export interface UpdateDreamUC {
  dreamRepository: DreamRepository;

  execute(id: number, args: UpdateDreamInput): Promise<Dream>;
}
