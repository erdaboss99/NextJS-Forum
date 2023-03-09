import AdminNav from '@/components/common/AdminNav';
import { NextPage } from 'next';

interface AdminPageProps {}

const AdminPage: NextPage<AdminPageProps> = () => {
	return (
		<div className=''>
			<AdminNav />
		</div>
	);
};

export default AdminPage;
