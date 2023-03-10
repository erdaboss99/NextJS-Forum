import { FC } from 'react';
import { Editor } from '@tiptap/react';
import DropdownOptions from '@/components/common/DropdownOptions';

interface ToolbarProps {
	editor: Editor | null;
}

const Toolbar: FC<ToolbarProps> = ({ editor }): JSX.Element | null => {
	if (!editor) return null;
	return (
		<div>
			<DropdownOptions
				options={[
					{ label: 'Paragraph', onClick: () => {} },
					{ label: 'Heading 1', onClick: () => {} },
					{ label: 'Heading 2', onClick: () => {} },
					{ label: 'Heading 3', onClick: () => {} },
				]}
				head={<p>Paragraph</p>}
			/>
		</div>
	);
};

export default Toolbar;
