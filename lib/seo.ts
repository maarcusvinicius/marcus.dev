import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'marcus ─ developer';
	const description = "Hey 👋 I'm Marcus, a developer";

	return {
		title,
		description,
		canonical: `https://marcus.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'marcus',
			url: `https://marcus.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://marcus.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
