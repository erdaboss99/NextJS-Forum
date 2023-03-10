import { FC, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { LinkOption } from '@/util/types';
import Button from '../toolbar/Button';

interface EmbedYoutubeProps {
	onSubmit(link: string): void;
}

const EmbedYoutube: FC<EmbedYoutubeProps> = ({ onSubmit }): JSX.Element => {
	const [youtubeUrl, setYoutubeUrl] = useState('');
	const [visible, setVisible] = useState(false);

	const hideForm = () => setVisible(false);
	const showForm = () => setVisible(true);
	const handleSubmit = () => {
		if (!youtubeUrl.trim()) return hideForm();

		onSubmit(youtubeUrl);
		setYoutubeUrl('');
		hideForm();
	};

	return (
		<div
			onKeyDown={({ key }) => {
				if (key === 'Escape') hideForm();
			}}
			className='relative'>
			<Button onClick={visible ? hideForm : showForm}>
				<BsYoutube />
			</Button>

			{visible && (
				<div className='absolute top-full mt-4 right-0 z-50'>
					<div className='flex space-x-2'>
						<input
							autoFocus
							type='text'
							className='max-w-xs bg-transparent rounded border-2 border-secondary-dark focus:border-primary-dark dark:focus:border-primary-light transition p-2 text-primary-dark dark:text-primary-light'
							placeholder='https://www.youtube.com'
							value={youtubeUrl}
							onChange={({ target }) => setYoutubeUrl(target.value)}
						/>
						<button
							onClick={handleSubmit}
							className='bg-action p-2 text-primary-light rounded text-sm'>
							Embed
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default EmbedYoutube;
