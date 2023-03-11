import { FC, ReactNode } from 'react';

interface ModalContainerProps {
	visible?: boolean;
	onClose?(): void;
	children: ReactNode;
}

const ModalContainer: FC<ModalContainerProps> = ({
	visible,
	children,
	onClose,
}): JSX.Element | null => {
	if (!visible) return null;

	const handleClick = () => {
		onClose && onClose();
	};

	return (
		<div
			onClick={handleClick}
			className='fixed inset-0 bg-primary-light dark:bg-primary-dark bg-opacity-5 dark:bg-opacity-5 backdrop-blur-[2px] z-50 flex items-center justify-center'>
			{children}
		</div>
	);
};

export default ModalContainer;
