'use server';

import { redirect } from 'next/navigation';

export async function handleForm(formData) {
	'use server';
	console.log(formData); // this appears in the dev server console but not in the browser console

	const studentname = encodeURIComponent(formData.get('studentname'));

	redirect(`/thanks?name=${studentname}`);
}
