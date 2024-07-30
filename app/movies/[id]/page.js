import Details from '@/app/components/Details';

import styles from '@/app/page.module.css';

async function MovieDetails({ params }) {
	const { id } = params;
	const base = process.env.BASE_URL;
	const url = `${base}/details`;
	const res = await fetch(url, {
		headers: { custombody: id },
	});

	const data = await res.json();
	console.log('data from api: ', data);

	return (
		<main className={styles.main}>
			<h2>Movie Details</h2>
			<Details details={data} />
		</main>
	);
}
export default MovieDetails;
