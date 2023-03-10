import Editor from '@/components/editor/Editor';
import { NextPage } from 'next';

interface CreatePostPageProps {}

const CreatePostPage: NextPage<CreatePostPageProps> = () => {
	return (
		<div className='max-w-4xl mx-auto'>
			<Editor />
		</div>
	);
};

export default CreatePostPage;
