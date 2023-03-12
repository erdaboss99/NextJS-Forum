import { NextApiRequest } from 'next';
import formidable from 'formidable';
import { FormidablePromise } from './types';

export const readFile = (req: NextApiRequest): Promise<FormidablePromise> => {
	const form = formidable();
	return new Promise((resolve, reject) => {
		form.parse(req, (err, fields, files) => {
			if (err) reject(err);

			resolve({ files, body: fields });
		});
	});
};
