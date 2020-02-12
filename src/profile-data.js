const data = [
    {
        id: 1,
        name: 'Saiful Islam',
        bio: 'I am Javascript Developer',
        skills: ['ReactJS', 'NodeJS', 'Nextjs', 'VueJS'],
        links: [
            { link: 'https://fb.com', name: 'Facebook' },
            { link: 'https://github.com', name: 'Github' },
        ]
    },

    {
        id: 2,
        name: 'Israt Jahan',
        bio: 'I am Beginner',
        skills: ['HTML', 'CSS', 'JavaScript'],
        links: [
            { link: 'https://youtube.com', name: 'Youtube' },
            { link: 'https://twitter.com', name: 'Twitter' },
        ]
    },

    {
        id: 3,
        name: 'Urmi Jahan',
        
        bio: 'I am Learner',
        skills: ['Microsoft Office', 'Typing', 'Browsing'],
        links: [
            { link: 'https://youtube.com', name: 'Youtube' },
            { link: 'https://linkedin.com', name: 'Linkedin' },
        ]
    },
];

export const fetchData = id => {
    return data.find(d => d.id === id);
}

export default data;