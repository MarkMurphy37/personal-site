module.exports = {
  siteMetadata: {
    title: 'Mark Murphy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'mark-murphy-personal-site',
        short_name: 'markmurphy.io',
        start_url: '/',
        background_color: '#0e2439',
        theme_color: '#1f364d',
        display: 'minimal-ui',
        icon: 'src/images/avatar-casual-thumbnail.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126654660-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ["/localhost/**"],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    // {
    //   resolve: "gatsby-plugin-guess-js",
    //   options: {
    //     GAViewID: `182615318`,
    //     minimumThreshold: 0.03,
    //     period: {
    //       startDate: new Date("2018-1-1"),
    //       endDate: new Date(),
    //     },
    //   },
    // },
  ],
}
