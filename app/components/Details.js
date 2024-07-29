'use client';
import styles from '@/app/page.module.css';
function Details({ details }) {
	console.log(details);
	const { title, overview, poster_path, id, release_date } = details;

	return (
		<div className={styles.details}>
			<h2>{title}</h2>
			<p>{overview}</p>
			<p>{release_date}</p>
		</div>
	);
}
export default Details;
