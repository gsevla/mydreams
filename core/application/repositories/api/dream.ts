import { CreateDreamInput, Dream } from "../../../domain/entities/Dream";
import { DreamRepository } from "../../../domain/repositories/dream";
import { HttpClientProtocol } from "../../protocols/HttpClient";

export class DreamRepositoryImpl implements DreamRepository {
  private datasource: HttpClientProtocol;

  private uri = "/dream";

  constructor(datasource: HttpClientProtocol) {
    this.datasource = datasource;
  }

  async findById(id: number): Promise<Dream | undefined> {
    const response = await this.datasource.get<Dream>(`${this.uri}/${id}`);
    return response.data;
  }

  async findAll(): Promise<Dream[]> {
    const response = await this.datasource.get<Dream[]>(`${this.uri}`);
    return response.data ?? [];
  }

  async create(data: CreateDreamInput): Promise<Dream | undefined> {
    const response = await this.datasource.post<Dream>(`${this.uri}`, data);
    return response.data;
  }

  async update(
    id: number,
    data: Partial<CreateDreamInput>
  ): Promise<Dream | undefined> {
    const response = await this.datasource.patch<Dream>(
      `${this.uri}/${id}`,
      data
    );
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await this.datasource.delete(`${this.uri}/${id}`);
  }
}
