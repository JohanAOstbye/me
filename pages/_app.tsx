import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastProvider } from '../components/context/Toast';
import ToastContainer from '../components/elements/toast/ToastContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />

      <ToastContainer />
    </ToastProvider>
  );
}

export default MyApp;
