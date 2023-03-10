import { FC, useState } from 'react';
import { LinkOption } from '@/util/types';
import { validateUrl } from '../editorUtils';

interface LinkFormProps {
	visible: boolean;
	onSubmit(link: LinkOption): void;
}

const defaultLink: LinkOption = {
	url: '',
	openInNewTab: false,
};

const LinkForm: FC<LinkFormProps> = ({ visible, onSubmit }): JSX.Element | null => {
	const [link, setLink] = useState<LinkOption>(defaultLink);

	const handleSubmit = () => {
		onSubmit({ ...link, url: validateUrl(link.url) });
		resetForm();
	};

	const resetForm = () => {
		setLink({ ...defaultLink });
	};

	if (!visible) return null;

	return (
		<div className='rounded p-2 bg-primary-light dark:bg-primary-dark shadow-sm shadow-secondary-dark'>
			<input
				autoFocus
				type='text'
				className='max-w-xs bg-transparent rounded border-2 border-secondary-dark focus:border-primary-dark dark:focus:border-primary-light transition p-2 text-primary-dark dark:text-primary-light'
				placeholder='https://www.example.com'
				value={link.url}
				onChange={({ target }) => setLink({ ...link, url: target.value })}
			/>

			<div className='flex items-center space-x-2 mt-4'>
				<input
					type='checkbox'
					id='open-in-new-tab'
					checked={link.openInNewTab}
					onChange={({ target }) => setLink({ ...link, openInNewTab: target.checked })}
				/>
				<label htmlFor='open-in-new-tab'>Open in new tab</label>

				<div className='flex-1 text-right'>
					<button
						onClick={handleSubmit}
						className='bg-action px-2 py-1 text-primary-light rounded text-sm'>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
};

export default LinkForm;
