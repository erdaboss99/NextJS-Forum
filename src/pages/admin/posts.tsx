import { NextPage } from 'next';
import AdminLayout from '@/components/layout/AdminLayout';

interface PostsPageProps {}

const PostsPage: NextPage<PostsPageProps> = () => {
	return (
		<AdminLayout>
			<div>
				<div>This is the posts page!</div>
			</div>
		</AdminLayout>
	);
};

export default PostsPage;
