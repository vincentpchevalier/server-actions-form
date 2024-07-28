async function Movies() {
	let base = process.env.BASE;
	let url = `${base}/api/movies`;
	let res = await fetch(url, {
		method: 'GET',
	});

	let data = await res.json();
	console.log(data);

	return <main>Movies</main>;
}
export default Movies;
