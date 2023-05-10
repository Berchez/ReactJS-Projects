import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-blue-400">
        Hello my friends" I am glad you want to learn Next 13
      </h1>
    </main>
  )
}