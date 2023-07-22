export interface IAutorizationState {
  processAutorization: boolean;
  email: IItem;
  password: IItem;
}

export interface IItem {
  value: string;
  status: boolean;
}
