const linksConfig = (currentUser) => [
    { path: '/home', label: 'Home' },
    ...currentUser ? [
        { path: '/users', label: 'Users', end: true },
        { path: `/users/${currentUser.id}`, label: currentUser.username }
    ] : [
        { path: '/login', label: 'Login' },
        { path: '/sign-up', label: 'Sign Up' }
    ]
];

export default linksConfig;