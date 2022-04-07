export interface RegistryData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface AuthData {
  login: string;
  password: string;
}

export interface GetUserInt {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface ChatDataInt {
  title: string;
}

export interface OneChatInt {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
}

export interface UserData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface UserPassword {
  oldPassword: string;
  newPassword: string;
}

export interface MyUserInt {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}
