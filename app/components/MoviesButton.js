'use client';

import { useRouter } from 'next/navigation';

import styles from '@/app/page.module.css';

function MoviesButton() {
	const router = useRouter();
	// set to use client

	// create router to push to movies page on click
	return (
		<button
			className={styles.button}
			type="button"
			onClick={() => router.push('/movies')}
		>
			Watch A Movie Instead?
		</button>
	);
}
export default MoviesButton;
