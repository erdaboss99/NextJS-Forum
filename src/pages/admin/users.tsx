import { NextPage } from 'next';
import AdminLayout from '@/components/common/AdminLayout';

interface UsersPageProps {}

const UsersPage: NextPage<UsersPageProps> = () => {
	return (
		<AdminLayout>
			<div>
				<div>This is the users page!</div>
			</div>
		</AdminLayout>
	);
};

export default UsersPage;
