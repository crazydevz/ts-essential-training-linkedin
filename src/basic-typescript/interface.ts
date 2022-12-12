export {};

interface Contact extends Address {
	id: number;
	name: string;
	birthDate?: Date; // optional property
}

interface Address {
	line1: string;
	line2: string;
	province: string;
	region: string;
	postalCode: string;
}

let primaryContact: Contact;

primaryContact = {
	id: 1,
	name: 'Ali',
	// birthDate: new Date(),
	line1: 'E-8',
	line2: 'Islamabad',
	province: 'Punjab',
	region: 'South-East Asia',
	postalCode: '7839',
};
