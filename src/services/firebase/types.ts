export interface UserModel {
  name: string | null;
  email: string | null;
  id: string | null;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface SignInData {
  email: string;
  password: string;
}
