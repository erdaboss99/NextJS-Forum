import { FC, MouseEventHandler, ReactNode, useCallback, useEffect, useId } from 'react';

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
	const containerId = useId();
	const handleClose = useCallback(() => onClose && onClose(), [onClose]);

	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		if ((e.target as HTMLDivElement).id === containerId) handleClose();
	};

	useEffect(() => {
		const closeModal = (e: KeyboardEvent) => e.key === 'Escape' && handleClose();
		document.addEventListener('keydown', closeModal);

		return () => document.removeEventListener('keydown', closeModal);
	}, [handleClose]);

	if (!visible) return null;

	return (
		<div
			id={containerId}
			onClick={handleClick}
			className='fixed inset-0 bg-primary-light dark:bg-primary-dark bg-opacity-5 dark:bg-opacity-5 backdrop-blur-[2px] z-50 flex items-center justify-center'>
			{children}
		</div>
	);
};

export default ModalContainer;
