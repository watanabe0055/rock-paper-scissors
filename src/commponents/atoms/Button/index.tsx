const Button = () => {
  return (
    <>
      <div className='flex space-x-4 mb-8'>
        <button
          type='button'
          className='bg-red-500 text-white py-2 px-4 rounded-lg'
        >
          グー
        </button>
        <button
          type='button'
          className='bg-green-500 text-white py-2 px-4 rounded-lg'
        >
          チョキ
        </button>
        <button
          type='button'
          className='bg-blue-500 text-white py-2 px-4 rounded-lg'
        >
          パー
        </button>
      </div>
    </>
  )
}

export default Button
