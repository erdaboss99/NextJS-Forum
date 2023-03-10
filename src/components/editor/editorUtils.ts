import { Editor } from '@tiptap/react';

export const getFocusedEditor = (edtitor: Editor) => {
	return edtitor.chain().focus();
};
