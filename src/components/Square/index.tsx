import './styles.css'

interface SquareProps {
  value: string | number
  onSquareClick: () => void
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return(
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
}