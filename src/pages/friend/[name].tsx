import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const FriendDetail: NextPage = () => {
  const router = useRouter()
  const name = router.query.name;
  return (
    <div>
      <p>welcome to {name}</p>
    </div>
  )
}

export default FriendDetail