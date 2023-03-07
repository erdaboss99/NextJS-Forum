import { NextPage } from 'next';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
	return (
		<div className='bg-secondary-light w-[50%] mx-auto my-4 p-4 rounded-full'>
			<h1 className='text-highlight-light text-5xl text-center'>Welcome to the home page!</h1>
		</div>
	);
};

export default HomePage;
