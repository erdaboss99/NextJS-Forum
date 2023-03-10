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

export type linkOption = {
	url: string;
	openInNewTab: boolean;
};
