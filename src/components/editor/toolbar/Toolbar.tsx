import { FC } from 'react';
import { Editor } from '@tiptap/react';

interface ToolbarProps {
	editor: Editor | null;
}

const Toolbar: FC<ToolbarProps> = ({ editor }): JSX.Element | null => {
	if (!editor) return null;
	return <div>Toolbar</div>;
};

export default Toolbar;
