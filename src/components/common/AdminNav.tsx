import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri';

import Logo from './Logo';

interface AdminNavProps {
	navItems: { href: string; label: string; icon: IconType }[];
}

const NAV_EXPANDED_WIDTH = 'w-48';
const NAV_CLOSED_WIDTH = 'w-12';
const NAV_EXPANSION = 'nav-expansion';

const AdminNav: FC<AdminNavProps> = ({ navItems }): JSX.Element => {
	const navRef = useRef<HTMLElement>(null);
	const [expandedNav, setExpandedNav] = useState(false);

	const toggleNav = (isExpanded: boolean) => {
		const currentNav = navRef.current;
		if (!currentNav) return;

		const { classList } = currentNav;
		if (isExpanded) {
			classList.replace(NAV_EXPANDED_WIDTH, NAV_CLOSED_WIDTH);
		} else {
			classList.replace(NAV_CLOSED_WIDTH, NAV_EXPANDED_WIDTH);
		}
	};

	const updateNavState = () => {
		toggleNav(expandedNav);
		const newState = !expandedNav;
		setExpandedNav(newState);
		localStorage.setItem(NAV_EXPANSION, JSON.stringify(newState));
	};

	useEffect(() => {
		const navState = localStorage.getItem(NAV_EXPANSION);
		if (navState !== null) {
			const newState = JSON.parse(navState);
			setExpandedNav(newState);
			toggleNav(!newState);
		} else {
			setExpandedNav(false);
		}
	}, []);

	return (
		<nav
			ref={navRef}
			className='h-screen w-12 shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between transition-width duration-500 overflow-hidden sticky top-0'>
			<div>
				<Link className='flex items-center space-x-2 p-3 mb-10' href='/admin'>
					<Logo className='fill-highlight-light dark:fill-highlight-dark w-5 h-5' />

					{expandedNav && (
						<span className='text-highlight-light dark:text-highlight-dark text-xl font-semibold leading-none'>
							Admin
						</span>
					)}
				</Link>

				<div className='space-y-6'>
					{navItems.map((item) => {
						return (
							<Link
								key={item.href}
								className='flex items-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.98] transition'
								href={item.href}>
								<item.icon size={24} />
								{expandedNav && <span className='ml-2 leading-none'>{item.label}</span>}
							</Link>
						);
					})}
				</div>
			</div>

			<button
				onClick={updateNavState}
				className='text-highlight-light dark:text-highlight-dark p-3 hover:scale-[0.98] transition self-end'>
				{expandedNav ? <RiMenuFoldFill size={25} /> : <RiMenuUnfoldFill size={25} />}
			</button>
		</nav>
	);
};

export default AdminNav;
