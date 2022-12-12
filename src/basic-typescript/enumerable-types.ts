export {};

type ContactName = string;

interface Contact {
	id: number;
	name: ContactName;
	birthDate?: Date;
	status: ContactStatus;
}

enum ContactStatus {
	Active = 'active',
	Inactive = 'inactive',
	New = 'new',
}

let primaryContact: Contact = {
	id: 1,
	name: 'Ali',
	birthDate: new Date('03-12-2022'),
	status: ContactStatus.Active,
};
