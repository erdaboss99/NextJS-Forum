import React from 'react';
import { FC } from 'react';
import { Editor } from '@tiptap/react';
import DropdownOptions from '@/components/common/DropdownOptions';
import Button from './Button';
import { getFocusedEditor } from '../editorUtils';
import { AiFillCaretDown } from 'react-icons/ai';
import {
	BsTypeBold,
	BsTypeItalic,
	BsTypeUnderline,
	BsTypeStrikethrough,
	BsCode,
	BsBraces,
	BsLink45Deg,
	BsListOl,
	BsListUl,
	BsImageFill,
	BsYoutube,
} from 'react-icons/bs';
import { RiDoubleQuotesL } from 'react-icons/ri';
interface ToolbarProps {
	editor: Editor | null;
}

const Toolbar: FC<ToolbarProps> = ({ editor }): JSX.Element | null => {
	if (!editor) return null;

	const options = [
		{
			label: 'Paragraph',
			onClick: () => getFocusedEditor(editor).setParagraph().run(),
		},
		{
			label: 'Heading 1',
			onClick: () => getFocusedEditor(editor).toggleHeading({ level: 1 }).run(),
		},
		{
			label: 'Heading 2',
			onClick: () => getFocusedEditor(editor).toggleHeading({ level: 2 }).run(),
		},
		{
			label: 'Heading 3',
			onClick: () => getFocusedEditor(editor).toggleHeading({ level: 3 }).run(),
		},
	];
	const getLabel = (): string => {
		if (editor.isActive('heading', { level: 1 })) return 'Heading 1';
		if (editor.isActive('heading', { level: 2 })) return 'Heading 2';
		if (editor.isActive('heading', { level: 3 })) return 'Heading 3';

		return 'Paragraph';
	};

	const Head = () => {
		return (
			<div className='flex items-center space-x-2 text-primary-dark'>
				<p>{getLabel()}</p>
				<AiFillCaretDown />
			</div>
		);
	};

	const buttons = [
		{
			icon: BsTypeBold,
			separatorBefore: true,
			onClick: () => getFocusedEditor(editor).toggleBold().run(),
		},
		{ icon: BsTypeItalic, onClick: () => getFocusedEditor(editor).toggleItalic().run() },
		{ icon: BsTypeUnderline, onClick: () => getFocusedEditor(editor).toggleUnderline().run() },
		{ icon: BsTypeStrikethrough, onClick: () => getFocusedEditor(editor).toggleStrike().run() },
		{
			icon: RiDoubleQuotesL,
			separatorBefore: true,
			onClick: () => getFocusedEditor(editor).toggleBlockquote().run(),
		},
		{ icon: BsCode, onClick: () => getFocusedEditor(editor).toggleCode().run() },
		{ icon: BsBraces, onClick: () => getFocusedEditor(editor).toggleCodeBlock().run() },
		{ icon: BsLink45Deg, onClick: () => {} }, //TODO
		{ icon: BsListOl, onClick: () => getFocusedEditor(editor).toggleOrderedList().run() },
		{ icon: BsListUl, onClick: () => getFocusedEditor(editor).toggleBulletList().run() },
		{ icon: BsYoutube, separatorBefore: true, onClick: () => {} }, //TODO
		{ icon: BsImageFill, onClick: () => {} }, //TODO
	];

	return (
		<div className='flex items-center'>
			<DropdownOptions options={options} head={<Head />} />

			<div className='flex items-center space-x-3'>
				{buttons.map((item, index) => {
					return (
						<React.Fragment key={'f' + index}>
							{item.separatorBefore && (
								<div
									key={'s' + index}
									className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8'
								/>
							)}

							<Button key={'b' + index} onClick={item.onClick}>
								<item.icon />
							</Button>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default Toolbar;
