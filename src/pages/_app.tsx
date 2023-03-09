import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Shantell_Sans } from 'next/font/google';

const shantellsans = Shantell_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={shantellsans.className}>
			<Component {...pageProps} />
		</div>
	);
}
