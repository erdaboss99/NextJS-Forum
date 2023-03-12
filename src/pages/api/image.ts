import { NextApiHandler } from 'next';
import formidable from 'formidable';
import cloudinary from '@/lib/cloudinary';
import { uploadFolder } from '@/lib/cloudinary';
import { readFile } from '@/util/imageUtils';

export const config = {
	api: { bodyParser: false },
};

const handler: NextApiHandler = (req, res) => {
	const { method } = req;

	switch (method) {
		case 'POST':
			return uploadNewImage(req, res);
		case 'GET':
			return readAllImages(req, res);

		default:
			return res.status(404).send('Not found!');
	}
};

const uploadNewImage: NextApiHandler = async (req, res) => {
	try {
		const { files } = await readFile(req);
		const imageFile = files.image as formidable.File;
		const { secure_url, url } = await cloudinary.uploader.upload(imageFile.filepath, {
			folder: uploadFolder,
		});
		res.status(200).json({ image: secure_url, url });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};
const readAllImages: NextApiHandler = (req, res) => {};

export default handler;
