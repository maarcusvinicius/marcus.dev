import { useTheme } from 'next-themes';

import { NavigationItemType, Theme } from '~/types';

import type { NavigationItem, NavigationItems } from '~/types';

const staticMenuItems: Array<Array<NavigationItem>> = [
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:home',
			text: 'Home',
			href: '/',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:edit-3',
			text: 'Blog',
			href: '/blog',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:copy',
			text: 'Projects',
			href: '/projects',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:clock',
			text: 'Timeline',
			href: '/timeline',
		},
	],
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:linkedin',
			text: 'Linkedin',
			href: 'https://www.linkedin.com/in/marcus-vinicius-507718228/',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:github',
			text: 'GitHub',
			href: 'https://github.com/maarcusvinicius',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:download',
			text: 'Currículo',
			href: 'https://drive.google.com/file/d/16DrsTKDWx0zf3b2TVo4rgbx1Y6QFj2nW/view?usp=sharing',
			external: true,
		},
	],
];

export function useNavigation() {
	const { theme, setTheme } = useTheme();

	const menuItems: NavigationItems = [
		...staticMenuItems,
	];

	const settingsItems: NavigationItems = [
		[
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:monitor',
				endIcon: theme === Theme.SYSTEM ? 'feather:check-circle' : undefined,
				text: 'System Theme',
				onClick: () => setTheme(Theme.SYSTEM),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:sun',
				endIcon: theme === Theme.LIGHT ? 'feather:check-circle' : undefined,
				text: 'Light Theme',
				onClick: () => setTheme(Theme.LIGHT),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:moon',
				endIcon: theme === Theme.DARK ? 'feather:check-circle' : undefined,
				text: 'Dark Theme',
				onClick: () => setTheme(Theme.DARK),
			},
		],
	];

	return {
		menu: menuItems,
		settings: settingsItems,
	};
}