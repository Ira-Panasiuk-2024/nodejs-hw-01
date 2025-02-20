import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = Array(number).fill().map(() => createFakeContact());
  const updatedContacts = [...contacts, ...newContacts];
  await writeContacts(updatedContacts);
  console.log('Контакти успішно згенеровані!');
};

generateContacts(5);
