export interface Adapter<T> {
  adapt(data?: any): T;

  adaptArray(data?: any): T [];
}
