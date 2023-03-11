import React from 'react';
import { FC } from 'react';
import { Editor } from '@tiptap/react';
import DropdownOptions from '@/components/common/DropdownOptions';
import Button from './Button';
import { HeadingOptions, LinkOption, ToolbarButton } from '@/util/types';
import { getFocusedEditor } from '../editorUtils';
import { AiFillCaretDown } from 'react-icons/ai';
import {
	BsTypeBold,
	BsTypeItalic,
	BsTypeUnderline,
	BsTypeStrikethrough,
	BsCode,
	BsBraces,
	BsListOl,
	BsListUl,
	BsImageFill,
} from 'react-icons/bs';
import { RiDoubleQuotesL } from 'react-icons/ri';
import InsertLink from '../link/InsertLink';
import EmbedYoutube from './EmbedYoutube';
interface ToolbarProps {
	editor: Editor | null;
	onOpenImageClick?(): void;
}

const Toolbar: FC<ToolbarProps> = ({ editor, onOpenImageClick }): JSX.Element | null => {
	if (!editor) return null;

	const options: HeadingOptions[] = [
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

	const simpleButtons: ToolbarButton[] = [
		{
			icon: BsTypeBold,
			isActive: editor.isActive('bold'),
			onClick: () => getFocusedEditor(editor).toggleBold().run(),
			separatorBefore: true,
		},
		{
			icon: BsTypeItalic,
			isActive: editor.isActive('italic'),
			onClick: () => getFocusedEditor(editor).toggleItalic().run(),
		},
		{
			icon: BsTypeUnderline,
			isActive: editor.isActive('underline'),
			onClick: () => getFocusedEditor(editor).toggleUnderline().run(),
		},
		{
			icon: BsTypeStrikethrough,
			isActive: editor.isActive('strike'),
			onClick: () => getFocusedEditor(editor).toggleStrike().run(),
		},
		{
			icon: RiDoubleQuotesL,
			isActive: editor.isActive('blockquote'),
			onClick: () => getFocusedEditor(editor).toggleBlockquote().run(),
			separatorBefore: true,
		},
		{
			icon: BsCode,
			isActive: editor.isActive('code'),
			onClick: () => getFocusedEditor(editor).toggleCode().run(),
		},
		{
			icon: BsBraces,
			isActive: editor.isActive('codeBlock'),
			onClick: () => getFocusedEditor(editor).toggleCodeBlock().run(),
		},
		{
			icon: BsListOl,
			isActive: editor.isActive('orderedList'),
			onClick: () => getFocusedEditor(editor).toggleOrderedList().run(),
		},
		{
			icon: BsListUl,
			isActive: editor.isActive('bulletList'),
			onClick: () => getFocusedEditor(editor).toggleBulletList().run(),
		},
	];

	const handleEmbedYoutube = (url: string) => {
		editor.chain().focus().setYoutubeVideo({ src: url }).run();
	};

	const handleLinkSubmit = ({ url, openInNewTab }: LinkOption) => {
		const { commands } = editor;
		if (openInNewTab) commands.setLink({ href: url, target: '_blank' });
		else commands.setLink({ href: url });
	};

	return (
		<div className='flex items-center'>
			<DropdownOptions options={options} head={<Head />} />

			<div className='flex items-center space-x-3'>
				{simpleButtons.map((item, index) => {
					return (
						<React.Fragment key={'f' + index}>
							{item.separatorBefore && (
								<div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8' />
							)}

							<Button active={item.isActive} onClick={item.onClick}>
								<item.icon />
							</Button>
						</React.Fragment>
					);
				})}
				<div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8' />
				<InsertLink onSubmit={handleLinkSubmit} />

				<EmbedYoutube onSubmit={handleEmbedYoutube} />

				<Button onClick={onOpenImageClick}>
					<BsImageFill />
				</Button>
				<div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8' />
			</div>
		</div>
	);
};

export default Toolbar;
