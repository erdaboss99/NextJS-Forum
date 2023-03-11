import { FC, ReactNode } from 'react';
import ModalContainer from '@/components/common/ModalContainer';

interface ModalProps {
	children: ReactNode;
	visible?: boolean;
	onClose?(): void;
}

const Modal: FC<ModalProps> = ({ visible, children, onClose }): JSX.Element => {
	return (
		<ModalContainer visible={visible} onClose={onClose}>
			<div className='bg-black p-20'>
				<button className='bg-white p-3'>Click me</button>
			</div>
		</ModalContainer>
	);
};

export default Modal;
