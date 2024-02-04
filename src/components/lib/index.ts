import { loseCountState, userChoiceState, winCountState } from '@/globalState.index'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export const gameLogic = () => {
  const [userChoice, setUserChoice] = useRecoilState(userChoiceState)

  const setWinCount = useSetRecoilState(winCountState)
  const setLoseCount = useSetRecoilState(loseCountState)

  const [computerChoice, setComputerChoice] = useState<string>('')

  const [result, setResult] = useState<string>('')

  const onClickChoice = (choice: string) => {
    const computerHand = getRandomHand()
    setUserChoice(choice)
    setComputerChoice(computerHand)
    const gameResult = judgeJanken(choice, computerHand)
    setResult(gameResult)
  }

  // コンピューターの手をランダムに選択する関数
  const getRandomHand = (): string => {
    const hands = ['グー', 'チョキ', 'パー']
    const randomIndex = Math.floor(Math.random() * hands.length)
    return hands[randomIndex]
  }

  // 勝敗を判定する関数
  const judgeJanken = (userHand: string, computerHand: string): string => {
    if (userHand === computerHand) {
      return '引き分け'
    }

    switch (userHand) {
      case 'グー':
        return computerHand === 'チョキ' ? '勝ち' : '負け'
      case 'チョキ':
        return computerHand === 'パー' ? '勝ち' : '負け'
      case 'パー':
        return computerHand === 'グー' ? '勝ち' : '負け'
      default:
        return '不正な手です'
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (result === '勝ち') {
      setWinCount(prev => prev + 1)
    }
    if (result === '負け') {
      setLoseCount(prev => prev + 1)
    }
  }, [result])

  return {
    userChoice,
    computerChoice,
    result,
    onClickChoice,
  }
}
