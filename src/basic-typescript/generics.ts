export {};

interface Contact {
	id: number;
	name: string;
}

interface Task<TExternalId> {
	name: string;
	taskId: TExternalId;
}

// interface UserContact<TExternalId> {
interface UserContact {
	id: number;
	name: string;
	username: string;
	// externalId: TExternalId;
	// loadExternalId(): Task<TExternalId>;
}

// function clone(source: Contact, func: (source: Contact) => Contact): Contact {
function clone<T1, T2 extends T1>(source: T1): T2 {
	return Object.apply({}, source);
}

const a: Contact = {
	id: 1,
	name: 'David',
};
const b = clone<Contact, UserContact>(a);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);
