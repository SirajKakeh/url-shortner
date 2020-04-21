import axios from 'axios';

const PostUrl = (url) => {
  return axios.post(
    'https://url-shortner-2020.herokuapp.com/api/url',
    {
      url,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  // .catch((error) => console.log(error))
};
export default PostUrl;
