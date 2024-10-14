export interface IuserData{
    username: string,
    email: string,
    address: string,
    password: string,
    FullName: string
  }
export interface IFromInput {
    label: string;
    type: string;
    id: string;
    name: keyof IuserData;
}