import type { IconType } from 'react-icons';

export type ToolbarButton = {
	//REMOVE ? from isActive and onClick after implementation
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
