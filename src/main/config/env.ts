export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/crud-person-ts-api',
  port: process.env.PORT || 5050
}