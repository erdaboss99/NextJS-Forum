import formidable from 'formidable';
import type { IconType } from 'react-icons';

export type ToolbarButton = {
	icon: IconType;
	isActive: boolean;
	onClick: () => boolean;
	separatorBefore?: boolean;
};

export type HeadingOptions = {
	label: string;
	onClick: () => boolean;
};

export type NavItem = {
	href: string;
	icon: IconType;
	label: string;
};

export type LinkOption = {
	url: string;
	openInNewTab: boolean;
};

export interface ImageSelectionResult {
	src: string;
	altText: string;
}

export interface FormidablePromise {
	files: formidable.Files;
	body: formidable.Fields;
}
