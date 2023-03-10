import { NextPage } from 'next';
import AdminLayout from '@/components/layout/AdminLayout';

interface AdminPageProps {}

const AdminPage: NextPage<AdminPageProps> = () => {
	return (
		<AdminLayout>
			<div>This is the dashboard page!</div>
		</AdminLayout>
	);
};

export default AdminPage;
