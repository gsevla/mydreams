import { Feeling } from "../enums/Feeling";

export type Dream = {
  id: number;
  title?: string;
  dream: string;
  date: string;
  feeling: Feeling;
  createdAt: Date;
  modifiedAt: Date;
};

export type CreateDreamInput = Omit<Dream, "id" | "createdAt" | "modifiedAt">;

export type UpdateDreamInput = Partial<CreateDreamInput>;
