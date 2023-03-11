import { FC, ReactNode } from 'react';
import ModalContainer from '@/components/common/ModalContainer';
import Gallery from './Gallery';

interface ModalProps {
	children: ReactNode;
	visible?: boolean;
	onClose?(): void;
}

const Modal: FC<ModalProps> = ({ visible, children, onClose }): JSX.Element => {
	return (
		<ModalContainer visible={visible} onClose={onClose}>
			<div className='max-w-4xl p-2 bg-primary-dark dark:bg-primary-light rounded'>
				<div className='flex'>
					<div className='basis-[75%] max-h-[450px] overflow-y-auto custom-scroll-bar'>
						<Gallery />
					</div>

					<div className='basis-[25%]'></div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default Modal;
