async function Movies() {
	let base = process.env.BASE_URL;
	let url = `${base}/movies`;
	let res = await fetch(url);

	let data = await res.json();
	console.log(data);

	return <main>Movies</main>;
}
export default Movies;
