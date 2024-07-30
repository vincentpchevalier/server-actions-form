'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import styles from '@/app/page.module.css';

function MovieCard({ movie }) {
	const router = useRouter();
	const { title, release_date, posterImageUrl, id } = movie;
	return (
		<div
			className={styles.movieCard}
			onClick={() => router.push(`/movies/${id}`)}
		>
			<Image
				className={styles.image}
				src={posterImageUrl}
				alt={title}
				width={300}
				height={500}
			/>
			<h3>{title}</h3>
			<p>{release_date}</p>
		</div>
	);
}
export default MovieCard;
