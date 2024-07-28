'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // can only use on client side

import styles from '@/app/page.module.css';

function Page() {
	// let tally = localStorage.getItem('tally');
	const name = useSearchParams().get('name');

	return (
		<div>
			<h2>
				Thank you <span className={styles.name}>{name}</span> for your
				complaint.
				{/* You have submitted {tally}{' '}
				complaints. */}
			</h2>

			<Link href="/">Return to Form</Link>
			<Link href="/staff">Speak to a manager</Link>
		</div>
	);
}
export default Page;
