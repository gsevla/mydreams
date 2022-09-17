import { DreamRepository } from "domain/repositories/dream";

export interface CreateDreamUC {
  repository: DreamRepository;

  execute: DreamRepository["create"];
}
