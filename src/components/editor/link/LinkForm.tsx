import { FC } from 'react';

interface LinkFormProps {
	visible: boolean;
}

const LinkForm: FC<LinkFormProps> = ({ visible }): JSX.Element | null => {
	if (!visible) return null;

	return (
		<div className='rounded p-2 bg-primary-light dark:bg-primary-dark shadow-sm shadow-secondary-dark'>
			<input
				autoFocus
				type='text'
				placeholder='https://www.example.com'
				className='max-w-xs bg-transparent rounded border-2 border-secondary-dark focus:border-primary-dark dark:focus:border-primary-light transition p-2 text-primary-dark dark:text-primary-light'
			/>

			<div className='flex items-center space-x-2 mt-4'>
				<input type='checkbox' id='open-in-new-tab' />
				<label htmlFor='open-in-new-tab'>Open in new tab</label>

				<div className='flex-1 text-right'>
					<button className='bg-action px-2 py-1 text-primary-light rounded text-sm'>Apply</button>
				</div>
			</div>
		</div>
	);
};

export default LinkForm;
