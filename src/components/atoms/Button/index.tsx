import { gameLogic } from '@/components/lib'
import ResultText from '../ResultText'

const Button = () => {
  const {
    userChoice,
    computerChoice,
    result,
    onClickChoice,
  } = gameLogic()

  return (
    <>
      <div className='flex space-x-4 mb-8'>
        <button
          type='button'
          className='bg-red-500 text-white py-2 px-4 rounded-lg'
          onClick={() =>
            onClickChoice('グー')
          }
        >
          グー
        </button>
        <button
          type='button'
          className='bg-green-500 text-white py-2 px-4 rounded-lg'
          onClick={() =>
            onClickChoice('チョキ')
          }
        >
          チョキ
        </button>
        <button
          type='button'
          className='bg-blue-500 text-white py-2 px-4 rounded-lg'
          onClick={() =>
            onClickChoice('パー')
          }
        >
          パー
        </button>
      </div>

      <ResultText
        computerChoice={computerChoice}
        result={result}
      />
    </>
  )
}

export default Button
