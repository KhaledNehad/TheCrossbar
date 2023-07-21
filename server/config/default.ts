export default {
  port: 3000,
  env: 'development',
  dbUri: 'mongodb://localhost:27017/sport_db',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
}
