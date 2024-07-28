'use client';

import { useRouter } from 'next/navigation';

function MoviesButton() {
	const router = useRouter();
	return (
		<button type="button" onClick={() => router.push('/api/movies')}>
			Watch A Movie Instead?
		</button>
	);
}
export default MoviesButton;
