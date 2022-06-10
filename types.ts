export interface GetCharacterResults {
	info: Info;
	results: Character[];
}

export interface Info {
	count: number;
	pages: number;
	next: string;
	prev: null;
}

export interface Character {
	id: number;
	name: string;
	status: Status;
	species: Species;
	type: string;
	gender: Gender;
	origin: CharLocation;
	location: CharLocation;
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export enum Gender {
	Female = 'Female',
	Male = 'Male',
	Unknown = 'unknown',
}

export interface CharLocation {
	name: string;
	url: string;
}

export enum Species {
	Alien = 'Alien',
	Human = 'Human',
}

export enum Status {
	Alive = 'Alive',
	Dead = 'Dead',
	Unknown = 'unknown',
}
export interface GetLocationResults {
	info: Info;
	results: Location[];
}

export interface Info {
	count: number;
	pages: number;
	next: string;
	prev: null;
}

export interface Location {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: Date;
}
