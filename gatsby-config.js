module.exports = {
	siteMetadata: {
		title: 'Mark Murphy',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		`gatsby-plugin-sharp`,
		'gatsby-remark-reading-time',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'MarkMurphy.io',
				short_name: 'MarkMurphy',
				start_url: '/',
				background_color: '#0e2439',
				theme_color: '#1f364d',
				display: 'minimal-ui',
				icon: 'src/images/avatar-formal-thumbnail.png',
			},
		},

		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-126654660-1',
				head: true,
				anonymize: true,
				respectDNT: true,
				exclude: ['/localhost/**'],
				sampleRate: 5,
				siteSpeedSampleRate: 10,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/blog`,
				name: 'blog',
			},
		},
	],
};
