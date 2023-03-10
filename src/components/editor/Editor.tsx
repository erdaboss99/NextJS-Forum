import { FC } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Toolbar from './toolbar/Toolbar';

interface EditorProps {}

const Editor: FC<EditorProps> = (props): JSX.Element => {
	const editor = useEditor({ extensions: [StarterKit, Underline] });
	return (
		<div className='p-3 bg-primary-light dark:bg-primary-dark'>
			<Toolbar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};

export default Editor;
