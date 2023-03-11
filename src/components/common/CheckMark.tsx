import { FC } from 'react';
import { BsCheckLg } from 'react-icons/bs';

interface CheckMarkProps {
	selected: boolean;
}

const CheckMark: FC<CheckMarkProps> = ({ selected }): JSX.Element | null => {
	if (!selected) return null;

	return (
		<div className='bg-action p-2 text-primary-light rounded-full bg-opacity-70 backdrop-blur-sm'>
			<BsCheckLg />
		</div>
	);
};

export default CheckMark;
