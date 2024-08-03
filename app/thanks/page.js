'use client';

import styles from '@/app/page.module.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function Page() {
	const name = useSearchParams().get('name');
	const user = useSearchParams().get('user');
	// set to use client
	return (
		<main className={styles.main}>
			{/* show name from useSearchParams and thank user for complaint */}
			<h2 className={styles.name}>Thank You {name}</h2>
			<p>We received a complaint from user: {user}</p>
			<Link href="/" className={styles.button}>
				Return to Form
			</Link>
		</main>
	);
}
export default Page;
