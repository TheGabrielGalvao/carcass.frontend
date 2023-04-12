import { AxiosResponse } from "axios";
import { Params } from "react-router-dom";
import { api } from "../config/api";

interface IBaseService<T> {
  getUrl(): string;
  getParamId(): keyof T;
  getAll(): Promise<T[]>;
  getById(uuid: string): Promise<T>;
  beforeSave(data: BeforeSaveParams<T>): Promise<T>;
  create(data: Omit<T, "uuid">): Promise<T>;
  remove(uuid: string): Promise<void>;
}

type BeforeSaveParams<T> = {
  data: T;
  paramsPage: Readonly<Params<string>>;
};

export type TableParams<T> = {
  formValues: T;
  pageable: {
    activePage: number;
    maxSize: number;
  };
};

export abstract class BaseService<T> implements IBaseService<T> {
  private url: string;
  private paramId: keyof T;

  constructor(url: string, paramId: keyof T) {
    this.url = url;
    this.paramId = paramId;
  }

  getUrl = () => this.url;

  getParamId(): keyof T {
    return this.paramId;
  }

  beforeSave = async ({ data }: BeforeSaveParams<T>): Promise<T> => {
    return data;
  };

  async getAll(): Promise<T[]> {
    const { data } = await api.get<T[]>(this.url);
    return data;
  }

  async getById(uuid: string): Promise<T> {
    const { data } = await api.get<T>(`${this.url}/${uuid}`);
    return data;
  }

  async create(data: T): Promise<T> {
    const response: AxiosResponse<T> = await api.post<T>(this.url, data);
    return response.data;
  }

  async update(uuid: string, data: T): Promise<T> {
    const response: AxiosResponse<T> = await api.put<T>(
      `${this.url}/${uuid}`,
      data
    );
    return response.data;
  }

  async remove(uuid: string): Promise<void> {
    await api.delete(`${this.url}/${uuid}`);
  }
}
