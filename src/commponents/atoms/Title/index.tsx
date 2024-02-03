type Props = {
  text: string
}

const Title = ({ text }: Props) => {
  return (
    <p className='text-4xl font-bold mb-8'>
      {text}
    </p>
  )
}

export default Title
