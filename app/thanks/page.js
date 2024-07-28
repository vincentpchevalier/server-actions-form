'use client';

import Link from 'next/link';

function Page() {
	let tally = localStorage.getItem('tally');

	return (
		<div>
			<h2>
				Thank you xxxxx for your complaint. You have submitted {tally}{' '}
				complaints.
			</h2>

			<Link href="/">Return to Form</Link>
			<Link href="/staff">Speak to a manager</Link>
		</div>
	);
}
export default Page;
