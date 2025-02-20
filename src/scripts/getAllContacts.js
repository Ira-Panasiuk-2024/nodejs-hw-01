import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log(contacts);
  console.log('Контакти успішно отримані!');
};

getAllContacts();
