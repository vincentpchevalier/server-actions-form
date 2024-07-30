import styles from '@/app/page.module.css';

async function MovieDetails() {
	// get id from params
	// get base url from env variable
	// fetch data from api at /details endpoint
	// pass id through custombody header

	return (
		<main className={styles.main}>
			<h2>Movie Details</h2>
			{/* show MovieDetails component with data from api fetch in api/[id] */}
			{/* add return to movies Link */}
		</main>
	);
}
export default MovieDetails;
