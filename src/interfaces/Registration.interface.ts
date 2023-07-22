export interface IRegistationState {
  processRegistration: boolean;
  email: IItem;
  password: IPasswordItem;
  username: IItem;
}

export interface IItem {
  value: string;
  status: boolean;
}

export interface IPasswordItem extends IItem {
  complexity: number;
}
