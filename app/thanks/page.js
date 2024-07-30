'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // can only use on client side

import styles from '@/app/page.module.css';

function Page() {
	// let tally = localStorage.getItem('tally');
	const name = useSearchParams().get('name');

	return (
		<main className={styles.main}>
			<h2>
				Thank you <span className={styles.name}>{name}</span> for your
				complaint.
				{/* You have submitted {tally}{' '}
				complaints. */}
			</h2>

			<Link className={styles.button} href="/">
				Return to Form
			</Link>
		</main>
	);
}
export default Page;
