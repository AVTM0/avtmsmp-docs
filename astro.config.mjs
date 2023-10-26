import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {
				src: './src/assets/docs.png'
			},
			social: {
				github: 'https://github.com/AVTM0/avtmsmp-docs',
			},
			customCss: [
				'./src/styles/custom.css',
				'@fontsource/atkinson-hyperlegible/400.css',
				'@fontsource/atkinson-hyperlegible/700.css',
				'@fontsource/atkinson-hyperlegible/400-italic.css',
				'@fontsource/atkinson-hyperlegible/700-italic.css',
				'@fontsource-variable/jetbrains-mono',
				'@fontsource-variable/jetbrains-mono/wght-italic.css',
			],
			components: {
				SocialIcons: './src/components/CustomSocial.astro'
			}
		}),
	],
});
