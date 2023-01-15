module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS"),
        secretAccessKey: env("AWS_SECRET_KEY"),
        region: "eu-north-1",
        params: {
          Bucket: "squidroe-strapi-new",
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
