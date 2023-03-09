import { FC, ReactNode } from 'react';
import Link from 'next/link';
import {
	AiOutlineContainer,
	AiOutlineDashboard,
	AiOutlineFileAdd,
	AiOutlineMail,
	AiOutlineTeam,
} from 'react-icons/ai';
import AdminNav from './AdminNav';

interface AdminLayoutProps {
	children: ReactNode;
}

const navItems = [
	{ href: '/admin', icon: AiOutlineDashboard, label: 'Dashboard' },
	{ href: '/admin/posts', icon: AiOutlineContainer, label: 'Posts' },
	{ href: '/admin/users', icon: AiOutlineTeam, label: 'Users' },
	{ href: '/admin/comments', icon: AiOutlineMail, label: 'Comments' },
];

const AdminLayout: FC<AdminLayoutProps> = ({ children }): JSX.Element => {
	return (
		<div className='flex'>
			<AdminNav navItems={navItems} />
			<div className='flex-1 p-4'>{children}</div>
			<Link
				className='bg-secondary-dark text-primary-light dark:bg-secondary-light dark:text-primary-dark fixed z-10 right-10 bottom-10 p-3 rounded-full hover:scale-90 shadow-sm transition'
				href='/admin/post/create'>
				<AiOutlineFileAdd size={24} />
			</Link>
		</div>
	);
};

export default AdminLayout;
