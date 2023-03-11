import { ChangeEventHandler, FC, ReactNode, useState } from 'react';
import Image from 'next/image';
import ModalContainer from '@/components/common/ModalContainer';
import Gallery from './Gallery';
import ActionButton from '@/components/common/ActionButton';
import { ImageSelectionResult } from '@/util/types';
import { AiOutlineCloudUpload } from 'react-icons/ai';

interface ModalProps {
	children: ReactNode;
	visible?: boolean;
	onClose?(): void;
	onImageSelect(image: File): void;
	onSelect(result: ImageSelectionResult): void;
}

const images = [
	{
		src: 'https://images.unsplash.com/photo-1678497178543-dde658d2e732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	},
	{
		src: 'https://images.unsplash.com/photo-1678541321429-76d921007858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	},
	{
		src: 'https://images.unsplash.com/photo-1678510131275-f39a62d323f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
	},
	{
		src: 'https://images.unsplash.com/photo-1678509651605-f2c0fa01c49a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
	},
	{
		src: 'https://images.unsplash.com/photo-1678510131580-af8620b477e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	},
	{
		src: 'https://images.unsplash.com/photo-1678523037293-fac7a6d60134?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1524&q=80',
	},
];

const Modal: FC<ModalProps> = ({
	visible,
	children,
	onClose,
	onSelect,
	onImageSelect,
}): JSX.Element => {
	const [selectedImage, setSelectedImage] = useState('');
	const [altText, setAltText] = useState('');

	const handleOnImageChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		const { files } = target;

		if (!files) return;

		const file = files[0];

		if (file.type.startsWith('image')) return onClose && onClose();

		onImageSelect(file);
	};

	const handleSelection = () => {
		if (!selectedImage) return onClose && onClose();
		onSelect({ src: selectedImage, altText });
	};

	return (
		<ModalContainer visible={visible} onClose={onClose}>
			<div className='max-w-4xl p-2 bg-primary-dark dark:bg-primary-light rounded'>
				<div className='flex'>
					<div className='basis-[75%] max-h-[450px] overflow-y-auto custom-scroll-bar'>
						<Gallery
							images={images}
							onSelect={(src) => setSelectedImage(src)}
							selectedImage={selectedImage}
						/>
					</div>

					<div className='basis-[25%] px-2'>
						<div className='space-y-4'>
							<div>
								<input onChange={handleOnImageChange} hidden type='file' id='image-input' />
								<label htmlFor='image-input'>
									<div className='w-full border-2 border-action text-action flex items-center justify-center space-x-2 p-2 cursor-pointer rounded'>
										<AiOutlineCloudUpload />
										<span>Upload Image</span>
									</div>
								</label>
							</div>

							{selectedImage ? (
								<>
									<textarea
										className='resize-none w-full bg-transparent rounded border-2 border-secondary-dark focus:ring-1 text-primary-light dark:text-primary-dark h-32 p-1'
										placeholder='Add alt text...'
										value={altText}
										onChange={({ target }) => setAltText(target.value)}></textarea>

									<ActionButton onClick={handleSelection} title='Select' />
									<div className='relative aspect-video'>
										<Image
											src={selectedImage}
											layout='fill'
											alt=''
											style={{ objectFit: 'contain' }}
										/>
									</div>
								</>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default Modal;
