export {};

type ContactName = string;

interface Contact {
	id: number;
	name: ContactName;
	birthDate?: Date;
}

let primaryContact: Contact = {
	id: 1,
	name: 'Ali',
	birthDate: new Date('03-12-2022'),
};
