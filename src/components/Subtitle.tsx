type Props = {
    text: string;
}

const Subtitle = ({ text }: Props) => {
  return (
    <div className="text-3xl text-background">
        {text}
    </div>
  )
}

export default Subtitle