module.exports = {

    author: "@camvrgs",
    siteTitle: "Cameron Vargas Portfolio",
    siteDescription: "A modern one-page portfolio with a clean yet expressive design.",
    siteUrl: "https://cameronvargas.com",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/cameron-vargas/",
            icon: "/icons/linkedin.svg"
        },
        {
            name: "Github",
            url: "https://github.com/camvrgs",
            icon: "/icons/github.svg"
        },
    ],

    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Features",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}
