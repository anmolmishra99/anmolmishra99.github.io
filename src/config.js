// config.js
module.exports = {
    github: {
        username: 'anmolmishra99', // Your GitHub org/user name. (Required)
        sortBy: 'updated', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: ['Subu', 'anmolmishra99'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'anmolmishra99',
        twitter: 'anmol_real_wala',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://anmolmishra99.github.io/',
        phone: '',
        email: 'mishraanmol258@gmail.com'
    },
    skills: [
        'Python',
        'Machine Learning',
        'Deep Learning',
        'Tensorflow',
        'Skikit Learn',
        'MySQL',
        'Git',
        'Dart',
        'Flutter',
    ],
//     experiences: [
//         { 
//             company: 'Monstarlab Bangladesh',
//             position: 'Backend Engineer II',
//             from: 'September 2021',
//             to: 'Present'
//         },
//         { 
//             company: 'Orangetoolz',
//             position: 'Jr. Full Stack Engineer',
//             from: 'July 2019',
//             to: 'August 2021'
//         },
//         { 
//             company: 'Techvillage',
//             position: 'Jr. Software Engineer',
//             from: 'January 2019',
//             to: ' June 2019'
//         }
//     ],
    education: [
        { 
            institution: 'Naraina Vidya Peeth Engineering and Management Institute',
            degree: 'Bachelor of Technology - CSE',
            from: '2019',
            to: '2023'
        },
        { 
            institution: 'Florets International School',
            degree: 'XII (CBSE) - PCM | Multimedia',
            from: '2017',
            to: '2018',
        },
        { 
            institution: 'Florets International School',
            degree: 'X (CBSE)',
            from: '2015',
            to: '2016'
        }
    ],
//     blog: {
//         // Display blog posts from your medium or dev.to account. (Optional)
//         source: 'dev.to', // medium | dev.to
//         username: 'arifszn',
//         limit: 3 // How many posts to display. Max is 10.
//     },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'halloween',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
