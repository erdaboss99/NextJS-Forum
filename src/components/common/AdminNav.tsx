import Link from 'next/link';
import { FC } from 'react';
import { IconType } from 'react-icons';

import Logo from './Logo';

interface AdminNavProps {
	navItems: { href: string; label: string; icon: IconType }[];
}

const AdminNav: FC<AdminNavProps> = ({ navItems }): JSX.Element => {
	return (
		<nav className='h-screen w-48 shadow-sm bg-secondary-light dark:bg-secondary-dark '>
			<Link className='flex items-center space-x-2 p-3 mb-10' href='/admin'>
				<Logo className='fill-highlight-light dark:fill-highlight-dark w-5 h-5' />
				<span className='text-highlight-light dark:text-highlight-dark text-xl font-semibold'>
					Admin
				</span>
			</Link>

			<div className='space-y-6'>
				{navItems.map((item) => {
					return (
						<Link
							key={item.href}
							className='flex items-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.98] transition'
							href={item.href}>
							<item.icon size={24} />
							<span className='ml-2'>{item.label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default AdminNav;
