export class User {
  email: string;
  login: string;
  password: string;
  constructor(email: string, login: string, password: string) {
    this.email = email;
    this.login = !!login ? login : email;
    this.password = password;
  }
  get data(): {} {
    return {
      email: this.email,
      login: this.login,
      password: this.password,
    };
  }
}
