const configuration = () => {
  return {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    db_url: process.env.DB_URL ? process.env.DB_URL : 'mongodb://127.0.0.1',
    jwt_secret_key: process.env.JWT_SECRET_KEY
      ? process.env.JWT_SECRET_KEY
      : '22122121',
  };
};
export default configuration;
