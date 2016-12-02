module.exports = {
    db: {
        uri: process.env.DATABASE || 'mongodb://localhost/book-hub',
        options: {
            user: '',
            pass: ''
        },
        seedDB: {
            seed: true,
            user: {
                email: 'admin@bookhub.com',
                firstName: "Admin",
                lastName: "System",
                address: "Ho Chi Minh City, Vietnam",
                roles: ['user', 'moderator', 'admin']
            }
        }
    },

    facebook: {

    },

    google: {

    }
};
