import axios from 'axios';
const PostUrl = (url) => {
	return (
		axios
		.post('https://url-shortner-2020.herokuapp.com/api/url', {
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				"url": url,
			},
		})
		// .then((response) => {
		// 	const res = response;
		// 	console.log(res);
		// })
		.catch((error) => console.log(error))
	);
};
export default PostUrl;