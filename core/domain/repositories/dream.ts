import { CreateDreamInput, Dream, UpdateDreamInput } from "../entities/Dream";

export interface DreamRepository {
  findAll(): Promise<Array<Dream>>;

  findById(id: number): Promise<Dream | undefined>;

  create(data: CreateDreamInput): Promise<Dream | undefined>;

  update(id: number, data: UpdateDreamInput): Promise<Dream | undefined>;

  delete(id: number): Promise<void>;
}
