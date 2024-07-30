'use client';

import styles from '@/app/page.module.css';

function MoviesButton() {
	// set to use client

	// create router to push to movies page on click
	return (
		<button className={styles.button} type="button">
			Watch A Movie Instead?
		</button>
	);
}
export default MoviesButton;
