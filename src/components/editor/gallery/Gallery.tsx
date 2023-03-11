import { FC } from 'react';

interface GalleryProps {}

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

const Gallery: FC<GalleryProps> = (props): JSX.Element => {
	return (
		<div className='flex flex-wrap'>
			{images.map(({ src }, index) => {
				return (
					<div key={'d' + index} className='basis-1/4'>
						<img key={'i' + index} src={src} alt='' />
					</div>
				);
			})}
		</div>
	);
};

export default Gallery;
