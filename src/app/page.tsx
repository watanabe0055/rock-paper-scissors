import Button from '@/components/atoms/Button'
import ResultText from '@/components/atoms/ResultText'
import Text from '@/components/atoms/Text'
import Title from '@/components/atoms/Title'
import './globals.css'

export default function Home() {
  return (
    <>
      <Title text='じゃんけんゲーム' />
      <Button />
      <Text text='コンピューターの選択' />
      <ResultText />
    </>
  )
}
