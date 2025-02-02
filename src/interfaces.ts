export interface User {
  id: number;
  name: string;
  email: string;
  city: string;
}

export interface userList {
  users: Array<object>;
}
