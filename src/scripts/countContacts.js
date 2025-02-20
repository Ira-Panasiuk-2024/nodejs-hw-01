import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(contacts.length);
  console.log('Кількість контактів успішно отримана!');
};

countContacts();
