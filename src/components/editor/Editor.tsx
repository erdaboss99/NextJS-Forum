import { FC } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './toolbar/Toolbar';

interface EditorProps {}

const Editor: FC<EditorProps> = (props): JSX.Element => {
	const editor = useEditor({ extensions: [StarterKit] });
	return (
		<div>
			<Toolbar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};

export default Editor;
