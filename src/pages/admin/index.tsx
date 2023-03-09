import AdminLayout from '@/components/common/AdminLayout';
import { NextPage } from 'next';

interface AdminPageProps {}

const AdminPage: NextPage<AdminPageProps> = () => {
	return (
		<AdminLayout>
			<div>This is the dashboard page!</div>
		</AdminLayout>
	);
};

export default AdminPage;
