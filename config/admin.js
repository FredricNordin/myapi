module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b31b691c6dcd6bd67b06ba5f79fb473a'),
  },
});
