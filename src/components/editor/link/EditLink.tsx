import { FC, useCallback, useState } from 'react';
import { BubbleMenu, Editor } from '@tiptap/react';
import { BsBoxArrowUpRight, BsPencilSquare } from 'react-icons/bs';
import { BiUnlink } from 'react-icons/bi';
import LinkForm from './LinkForm';
import { LinkOption } from '@/util/types';

interface EditLinkProps {
	editor: Editor;
}

const EditLink: FC<EditLinkProps> = ({ editor }): JSX.Element => {
	const [showEditForm, setShowEditForm] = useState(false);
	const handOnLinkOpenClick = useCallback(() => {
		const { href } = editor.getAttributes('link');
		if (href) {
			window.open(href, '_blank');
		}
	}, [editor]);
	const handLinkEditClick = () => {
		setShowEditForm(true);
	};
	const handleUnlinkClick = useCallback(() => editor.commands.unsetLink(), [editor]);

	const handleSubmit = ({ url, openInNewTab }: LinkOption) => {
		editor
			.chain()
			.focus()
			.unsetLink()
			.setLink({ href: url, target: openInNewTab ? '_blank' : '' })
			.run();
		setShowEditForm(false);
	};

	const getInitialState = useCallback(() => {
		const { href, target } = editor.getAttributes('link');
		return { url: href, openInNewTab: target ? true : false };
	}, [editor]);

	return (
		<BubbleMenu
			shouldShow={({ editor }) => editor.isActive('link')}
			editor={editor}
			tippyOptions={{
				onHide: () => setShowEditForm(false),
			}}>
			<LinkForm visible={showEditForm} onSubmit={handleSubmit} initialState={getInitialState()} />
			{!showEditForm && (
				<div className='rounded bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light shadow-secondary-dark shadow-md p-3 flex items-center space-x-6 z-50'>
					<button onClick={handOnLinkOpenClick}>
						<BsBoxArrowUpRight />
					</button>
					<button onClick={handLinkEditClick}>
						<BsPencilSquare />
					</button>
					<button onClick={handleUnlinkClick}>
						<BiUnlink />
					</button>
				</div>
			)}
		</BubbleMenu>
	);
};

export default EditLink;
