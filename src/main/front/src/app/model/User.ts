export default class User{
  private _id: number;
  private _fullname: string;
  private _email: string;
  private _createdDate: string;


  constructor(id: number, fullname: string, email: string, creationDate: string) {
    this._id = id;
    this._fullname = fullname;
    this._email = email;
    this._createdDate = creationDate;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(value: string) {
    this._fullname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get createdDate(): string {
    return this._createdDate;
  }

  set createdDate(value: string) {
    this._createdDate = value;
  }
}
