import { ChangeEventHandler, FC, ReactNode, useCallback, useState } from 'react';
import Image from 'next/image';
import ModalContainer from '@/components/common/ModalContainer';
import Gallery from './Gallery';
import ActionButton from '@/components/common/ActionButton';
import { ImageSelectionResult } from '@/util/types';
import { AiOutlineCloudUpload } from 'react-icons/ai';

interface ModalProps {
	children: ReactNode;
	visible?: boolean;
	images: { src: string }[];
	onClose?(): void;
	onFileSelect(image: File): void;
	onSelect(result: ImageSelectionResult): void;
}

const Modal: FC<ModalProps> = ({
	children,
	visible,
	images,
	onClose,
	onSelect,
	onFileSelect,
}): JSX.Element => {
	const [selectedImage, setSelectedImage] = useState('');
	const [altText, setAltText] = useState('');

	const handleClose = useCallback(() => onClose && onClose(), [onClose]);

	const handleOnImageChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		const { files } = target;

		if (!files) return;

		const file = files[0];

		if (file.type.startsWith('image')) return handleClose();

		onFileSelect(file);
	};

	const handleSelection = () => {
		if (!selectedImage) return handleClose();
		onSelect({ src: selectedImage, altText });
		handleClose();
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
