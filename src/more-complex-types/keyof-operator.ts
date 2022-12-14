export {};

type ContactName = string;
type ContactStatus = 'active' | 'inactive' | 'new';
type ContactBirthDate = Date | number | string;

interface Contact {
	id: number;
	name: ContactName;
	birthDate?: ContactBirthDate;
	status?: ContactStatus;
}

let primaryContact: Contact = {
	id: 12345,
	name: 'Jamie Johnson',
	status: 'active',
};

type ContactFields = keyof Contact;

// const field: ContactFields = 'name';

// function getValue<T, U extends T>(source: T, propName: keyof T) {
function getValue<T, U extends keyof T>(source: T, propName: U) {
	return source[propName];
}

const val = getValue({ min: 10, max: 100 }, 'min');
