import styles from './page.module.css';
import Form from './components/Form';

export default function Home() {
	return (
		<main className={styles.main}>
			<Form />
		</main>
	);
}
