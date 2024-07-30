'use client';
import Image from 'next/image';

import styles from '@/app/page.module.css';

function Details({ details }) {
	console.log(details);
	const { title, overview, detailsImageUrl, id, release_date } = details;
	console.log(detailsImageUrl);

	return (
		<section className={styles.details}>
			<Image
				src={detailsImageUrl}
				alt={title}
				width={800}
				height={500}
				className={styles.detailsImg}
			/>
			<h3>{title}</h3>
			<p>{release_date}</p>
			<p>{overview}</p>
		</section>
	);
}
export default Details;
