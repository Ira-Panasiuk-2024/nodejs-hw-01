import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.promises.writeFile(PATH_DB, JSON.stringify(updatedContacts));
    } catch (error) {
        console.error(error);
    }
};
