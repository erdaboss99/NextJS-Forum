import { FC, useEffect, useState } from 'react';
import { EditorContent, useEditor, getMarkRange, Range } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';
import Image from '@tiptap/extension-image';
import { ImageSelectionResult } from '@/util/types';
import Toolbar from './toolbar/Toolbar';
import EditLink from './link/EditLink';
import Modal from './gallery/Modal';
import axios from 'axios';

interface EditorProps {}

const Editor: FC<EditorProps> = (props): JSX.Element => {
	const [selectionRange, setSelectionRange] = useState<Range>();
	const [showGallery, setShowGallery] = useState(false);
	const [images, setImages] = useState<{ src: string }[]>([]);

	const fetchImages = async () => {
		const { data } = await axios('/api/image');
		setImages(data.images);
	};

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
			Youtube.configure({
				width: 840,
				height: 472.5,
				HTMLAttributes: {
					class: 'mx-auto rounded',
				},
			}),
			Image.configure({
				HTMLAttributes: {
					class: 'mx-auto',
				},
			}),
		],
		editorProps: {
			handleClick(view, pos, event) {
				const { state } = view;
				const selectionRange = getMarkRange(state.doc.resolve(pos), state.schema.marks.link);
				if (selectionRange) setSelectionRange(selectionRange);
			},
			attributes: {
				class: 'prose prose-lg focus:outline-none dark:prose-invert max-w-full mx-auto h-full',
			},
		},
	});

	const handleImageSelection = (result: ImageSelectionResult) => {
		editor?.chain().focus().setImage({ src: result.src, alt: result.altText }).run();
	};

	useEffect(() => {
		if (editor && selectionRange) editor.commands.setTextSelection(selectionRange);
	}, [editor, selectionRange]);

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<>
			<div className='p-3 bg-primary-light dark:bg-primary-dark'>
				<Toolbar editor={editor} onOpenImageClick={() => setShowGallery(true)} />
				<div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light my-3' />
				{editor ? <EditLink editor={editor} /> : null}
				<EditorContent editor={editor} />
			</div>
			<Modal
				visible={showGallery}
				images={images}
				onClose={() => setShowGallery(false)}
				onFileSelect={() => {
					/* TODO */
				}}
				onSelect={handleImageSelection}>
				<></>
			</Modal>
		</>
	);
};

export default Editor;
