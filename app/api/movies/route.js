export async function GET() {
	try {
		let res = await fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`
		);
		console.log(res);
		if (!res.ok) throw new Error(error);
		let data = await res.json();
		console.log(data);
		const { results } = data;
		const movieInfo = results.map((movie) => {
			return {
				id: movie.id,
				title: movie.title,
				poster_path: movie.poster_path,
				release_date: movie.release_date,
			};
		});
		console.log(movieInfo);
		return new Response(JSON.stringify(movieInfo), {
			headers: {
				'content-type': 'application/json',
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
