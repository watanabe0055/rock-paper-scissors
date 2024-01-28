import Button from '@/commponents/atoms/Button'
import ResultText from '@/commponents/atoms/ResultText'
import Text from '@/commponents/atoms/Text'
import Title from '@/commponents/atoms/Title'

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
