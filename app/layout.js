import { Inter } from 'next/font/google';
import './globals.css';
import Container from './components/Container';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Student complaint form',
	description: 'Here for you!',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Container>
					<Header />
					{children}
				</Container>
			</body>
		</html>
	);
}
