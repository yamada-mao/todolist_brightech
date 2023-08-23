import Head from 'next/head'
import Image from 'next/image'
import { Inter, Nothing_You_Could_Do } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const Push_Num = 0
  return (
<div>
			<button onClick={()=>Push_Num+1}>完了</button>
			<div>{Push_Num}</div>
		</div>
  )
  }

