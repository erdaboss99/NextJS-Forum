import { FC } from 'react';
import { BsCardImage } from 'react-icons/bs';
import Image from './Image';

interface GalleryProps {
	images: { src: string }[];
	onSelect(src: string): void;
	uploading?: boolean;
	selectedImage?: string;
}

const Gallery: FC<GalleryProps> = ({
	images,
	onSelect,
	uploading = false,
	selectedImage = '',
}): JSX.Element => {
	return (
		<div className='flex flex-wrap'>
			{uploading && (
				<div className='basis-1/4 p-2 aspect-square flex flex-col items-center justify-center bg-secondary-light text-primary-dark rounded animate-pulse'>
					<BsCardImage size={60} />
					<p> Uploading...</p>
				</div>
			)}
			{images.map(({ src }, index) => {
				return (
					<div key={'d' + index} className='basis-1/4 p-2'>
						<Image
							src={src}
							alt=''
							selected={selectedImage === src}
							onClick={() => onSelect(src)}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Gallery;
