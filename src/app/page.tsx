'use client'

import Button from '@/components/atoms/Button'

import Title from '@/components/atoms/Title'
import { RecoilRoot } from 'recoil'
import './globals.css'

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <Title text='じゃんけんゲーム' />
        <Button />
      </RecoilRoot>
    </>
  )
}
