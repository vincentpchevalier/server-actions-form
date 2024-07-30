import styles from '@/app/page.module.css';

// const { title, release_date, posterImageUrl, id } = movie;

// next.config.mjs:
// images: {
// 		remotePatterns: [
// 			{
// 				protocol: 'https',
// 				hostname: 'image.tmdb.org',
// 				port: '',
// 				pathname: '/t/p/original/**',
// 			},
// 		],
// 	},

function MovieCard({ movie }) {
	// set to use client
	// get movie data from props
	// create router to push to details page on click
	// import Image from 'next/image' and set the src, width, height, and alt
	// set Image configuration in next.config.mjs
	return (
		<div className={styles.movieCard}>
			{/* movie data for the preview card */}
		</div>
	);
}
export default MovieCard;
