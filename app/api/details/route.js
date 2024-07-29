import { headers } from 'next/headers';

export async function GET() {
	const resHeaders = headers();
	let id = resHeaders.get('custombody');
	console.log(resHeaders.get('custombody'));

	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`;

	try {
		let res = await fetch(url);

		const data = await res.json();
		console.log('data:', data);
		const { original_title, overview, poster_path, id, release_date } = data;
		let filmInfo = {
			title: original_title,
			overview,
			poster_path,
			id,
			release_date,
		};
		return new Response(JSON.stringify(filmInfo), {
			headers: {
				'content-type': 'application/json',
				'access-control-allow-methods': 'GET',
				'access-control-allow-origin': '*',
			},
			status: 200,
		});
	} catch (err) {}
}
