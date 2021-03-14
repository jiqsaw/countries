export interface IResponseList<T> {
  meta: IMeta;
  data: T[];
}
export interface IMeta {
  limit: number;
  page: number;
  total: number;
}
