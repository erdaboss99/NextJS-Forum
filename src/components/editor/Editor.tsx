import { FC } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Toolbar from './toolbar/Toolbar';

interface EditorProps {}

const Editor: FC<EditorProps> = (props): JSX.Element => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			Link.configure({
				autolink: false,
				linkOnPaste: false,
				openOnClick: false,
				HTMLAttributes: {
					target: '',
				},
			}),
			Placeholder.configure({ placeholder: 'Type something...' }),
		],
		editorProps: {
			attributes: {
				class: 'prose prose-lg focus:outline-none dark:prose-invert max-w-full mx-auto h-full',
			},
		},
	});
	return (
		<div className='p-3 bg-primary-light dark:bg-primary-dark'>
			<Toolbar editor={editor} />
			<div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light my-3' />
			<EditorContent editor={editor} />
		</div>
	);
};

export default Editor;
