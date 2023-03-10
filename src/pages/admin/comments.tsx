import { NextPage } from 'next';
import AdminLayout from '@/components/layout/AdminLayout';

interface CommentsPageProps {}

const CommentsPage: NextPage<CommentsPageProps> = () => {
	return (
		<AdminLayout>
			<div>
				<div>This is the comments page!</div>
			</div>
		</AdminLayout>
	);
};

export default CommentsPage;
