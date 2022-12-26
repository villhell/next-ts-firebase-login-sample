import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { AuthProvider } from '../src/context/AuthContext';
import Top from '../src/components/Top';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <AuthProvider>
        <div style={{ margin: '2rem' }}>
          <Top />
        </div>
      </AuthProvider>
    </>
  );
}
