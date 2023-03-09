import AdminNav from '@/components/common/AdminNav';
import { NextPage } from 'next';
import {
	AiOutlineContainer,
	AiOutlineDashboard,
	AiOutlineMail,
	AiOutlineTeam,
} from 'react-icons/ai';

interface AdminPageProps {}

const navItems = [
	{ href: '/admin', icon: AiOutlineDashboard, label: 'Dashboard' },
	{ href: '/admin/posts', icon: AiOutlineContainer, label: 'Posts' },
	{ href: '/admin/users', icon: AiOutlineTeam, label: 'Users' },
	{ href: '/admin/comments', icon: AiOutlineMail, label: 'Comments' },
];

const AdminPage: NextPage<AdminPageProps> = () => {
	return (
		<div className=''>
			<AdminNav navItems={navItems} />
		</div>
	);
};

export default AdminPage;
