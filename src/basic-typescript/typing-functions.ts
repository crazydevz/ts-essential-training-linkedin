export {};

interface Contact {
	id: number;
	name: string;
	contact(name: string): Contact;
}

// function clone(source: Contact, func: (source: Contact) => Contact): Contact {
function clone(source: Contact): Contact {
	return Object.apply({}, source);
}

const a: Contact = {
	id: 1,
	name: 'David',
	contact: function () {
		return {
			id: this.id,
			name: this.name,
			contact: this.contact,
		};
	},
};

const b = clone(a);
