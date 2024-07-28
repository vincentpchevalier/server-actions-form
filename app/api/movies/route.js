export async function GET() {
	try {
		let res = await fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=c53703c98c891a9440f4334af8a7c43a&language=en-US&page=1`
		);
		console.log(res);
		if (!res.ok) throw new Error(error);
		let data = await res.json();
		console.log(data);
		return new Response(JSON.stringify(data), {
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
