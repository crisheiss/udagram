export const config = {
  "dev": {
    "username": process.env.UDACITY_USERNAME,
    "password": process.env.UDACITY_PASSWORD,
    "database": process.env.UDACITY_DATABASE,
    "host": process.env.UDACITY_HOST,
    "dialect": process.env.UDACITY_DIALECT,
    "aws_region": process.env.UDACITY_AWS_REGION,
    "aws_profile": process.env.UDACITY_AWS_PROFILE,
    "aws_media_bucket": process.env.UDACITY_AWD_MEDIA_BUCKET
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": process.env.UDACITY_USERNAME,
    "password": process.env.UDACITY_PASSWORD,
    "database": process.env.UDACITY_DATABASE,
    "host": process.env.UDACITY_HOST,
    "dialect": process.env.UDACITY_DIALECT,
    "aws_region": process.env.UDACITY_AWS_REGION,
    "aws_profile": process.env.UDACITY_AWS_PROFILE,
    "aws_media_bucket": process.env.UDACITY_AWD_MEDIA_BUCKET
  }
}
