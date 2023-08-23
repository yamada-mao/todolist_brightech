import Head from 'next/head'
import Image from 'next/image'
import { Inter, Nothing_You_Could_Do } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { test } from 'node:test'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [stringArray, setStringArray] = useState(['掃除する', '勉強する', '貯金する']);
  const [newItem, setNewItem] = useState('');

  const submit = () => {
    if (newItem.trim() !== '') {
      setStringArray(prevArray => [...prevArray, newItem]);
      setNewItem(''); // 入力フィールドをクリア
    }
  }

  return (
    <div>
      <input type="text" 
      onChange={event => setNewItem(event.target.value)}/>

      <button onClick={() => submit()}>完了</button>
      
      <div>
        {stringArray.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  )
}

