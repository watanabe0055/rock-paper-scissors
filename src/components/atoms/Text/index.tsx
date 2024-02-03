type TextProps = {
  text: string
}

const Text = ({ text }: TextProps) => {
  return (
    <p className='text-2xl font-semibold'>
      {text}
    </p>
  )
}

export default Text
