require('dotenv').config()

const config = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'panetone007',
            database: 'product-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredALL: true
            }
        },
        test: {

        },
        production: {

        }
    }
}

module.exports = config