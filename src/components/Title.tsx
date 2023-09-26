type Props = {
    text: string
}

const Title = ({ text }: Props) => {
  return (
    <div className="text-8xl text-background">
        {text}
    </div>
  )
}

export default Title