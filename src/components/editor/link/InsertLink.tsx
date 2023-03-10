import { FC, useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { LinkOption } from '@/util/types';
import Button from '../toolbar/Button';
import LinkForm from './LinkForm';

interface InsertLinkProps {
	onSubmit(link: LinkOption): void;
}

const InsertLink: FC<InsertLinkProps> = ({ onSubmit }): JSX.Element => {
	const [visible, setVisible] = useState(false);

	const hideForm = () => setVisible(false);
	const showForm = () => setVisible(true);
	const handleSubmit = (link: LinkOption) => {
		if (!link.url.trim()) return hideForm();

		onSubmit(link);
		hideForm();
	};

	return (
		<div
			onKeyDown={({ key }) => {
				if (key === 'Escape') hideForm();
			}}
			className='relative'>
			<Button onClick={visible ? hideForm : showForm}>
				<BsLink45Deg />
			</Button>

			<div className='absolute top-full mt-4 right-0 z-50'>
				<LinkForm visible={visible} onSubmit={handleSubmit} />
			</div>
		</div>
	);
};

export default InsertLink;
