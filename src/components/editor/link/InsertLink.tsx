import { FC, useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { linkOption } from '@/util/types';
import Button from '../toolbar/Button';
import LinkForm from './LinkForm';

interface InsertLinkProps {
	onSubmit(link: linkOption): void;
}

const InsertLink: FC<InsertLinkProps> = ({ onSubmit }): JSX.Element => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			onKeyDown={({ key }) => {
				if (key === 'Escape') setVisible(false);
			}}
			className='relative'>
			<Button onClick={() => setVisible(!visible)}>
				<BsLink45Deg />
			</Button>

			<div className='absolute top-full mt-4 right-0 z-50'>
				<LinkForm visible={visible} onSubmit={onSubmit} />
			</div>
		</div>
	);
};

export default InsertLink;
