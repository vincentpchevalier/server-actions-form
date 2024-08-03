// `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`;
// movie = {
// 	id: movie.id,
// 	title: movie.title,
// 	posterImageUrl: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
// 	release_date: movie.release_date,
// };

export async function GET(request) {
	const reqURL = request.url;
	console.log(reqURL);

	try {
		let res = await fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`
		);
		if (!res.ok) throw new Error(error);
		let data = await res.json();

		const { results } = data;
		console.log(results);

		const movieInfo = results.map((movie) => {
			return {
				id: movie.id,
				title: movie.title,
				posterImageUrl: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
				release_date,
			};
		});
		return new Response(
			JSON.stringify(movieInfo, {
				headers: { 'content-type': 'application/json' },
			})
		);
	} catch (err) {
		return new Response(JSON.stringify({ error: err.message }));
	}

	// fetch data from tmdb api
	// return data in a Response using json stringify
}
