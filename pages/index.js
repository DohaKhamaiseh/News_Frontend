import { Parent } from '@/components/Parent'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
    <title>Home</title>
   </Head>
   <Parent>
    
    <div></div>
   </Parent>
   </>
  )
}
