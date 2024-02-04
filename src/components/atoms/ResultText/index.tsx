import Text from '@/components/atoms/Text'
import { userChoiceState } from '@/globalState.index'
import { useRecoilValue } from 'recoil'

type ResultTextProps = {
  computerChoice: string
  result: string
}

const ResultText = ({
  computerChoice,
  result,
}: ResultTextProps) => {
  const userChoice = useRecoilValue(
    userChoiceState,
  )
  return (
    <>
      <Text
        text={`あなたの選択: ${userChoice}`}
      />

      <Text
        text={`コンピューターの選択: ${computerChoice}`}
      />
      <Text text={`結果: ${result}`} />
    </>
  )
}

export default ResultText
