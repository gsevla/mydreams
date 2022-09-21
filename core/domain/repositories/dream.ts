import { CreateDreamInput, Dream, UpdateDreamInput } from "@entities/dream";

export interface DreamRepository {
  httpService: any;

  findAll(): Promise<Array<Dream>>;

  findById(id: number): Promise<Dream | undefined>;

  create(data: CreateDreamInput): Dream;

  update(id: number, data: UpdateDreamInput): Promise<void>;

  delete(id: number): Promise<void>;
}
