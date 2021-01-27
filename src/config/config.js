module.exports = {
    port: 8080,
    db: {
        database: process.env.DB_NAME || 'budgetEnDb',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_Pass || '',
        option: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './budgetEnDb-db.sqlite'
        }
    }
}