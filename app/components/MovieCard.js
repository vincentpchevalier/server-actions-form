'use client';
import { useRouter } from 'next/navigation';

import styles from '@/app/page.module.css';

function MovieCard({ movie }) {
	const router = useRouter();
	const { title, overview, poster_path, id } = movie;
	return (
		<div className={styles.movie} onClick={() => router.push(`/movies/${id}`)}>
			<h3>{title}</h3>
			<p>{overview}</p>
		</div>
	);
}
export default MovieCard;
