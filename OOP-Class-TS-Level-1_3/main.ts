//*********************************
//     Klasse "Animal"
//*********************************

export default class Animal {
	private _species: string;
	private _age: number;
	private _color: string;

	constructor(species: string, age: number, color: string) {
		this._species = species;
		this._age = age;
		this._color = color;
	}

	//* Getter für species
	public get species(): string {
		return this._species;
	}

	//* Setter für species
	public set species(value: string) {
		this._species = value;
	}

	//* Getter für age
	public get age(): number {
		return this._age;
	}

	//* Setter für age
	public set age(value: number) {
		this._age = value;
	}

	//* Getter für color
	public get color(): string {
		return this._color;
	}

	//* Setter für color
	public set color(value: string) {
		this._color = value;
	}
}

//*********************************
//     Klasse "Person"
//*********************************

//* enum "Gender"
enum Gender {
	Male = 'Male',
	Female = 'Female',
	Other = 'Other'
}

export class Person {
	private fullname: string;
	private birthday: Date;
	private gender: Gender;

	constructor(fullname: string, birthday: Date, gender: Gender) {
		this.fullname = fullname;
		this.birthday = birthday;
		this.gender = gender;
	}

	//* Getter für fullname
	public getName(): string {
		return this.fullname
	}

	public setName(newName: string) {
		this.fullname = newName;
	}

	//* Getter für birthday
	public getBirthday(): Date {
		return this.birthday;
	}

	//* Getter für gender
	public getGender(): string {
		return this.gender;
	}
}
