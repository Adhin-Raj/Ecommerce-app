import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dkoyh69in', // Replace with your actual cloud name
  },
  url: {
    secure: true // Use HTTPS
  }
});
