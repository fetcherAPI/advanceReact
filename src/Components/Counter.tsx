import { useState } from "react"
import './Counter.module.scss'

type Props = {}

export const Counter = (props: Props) => {

  const[count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(prev => prev+1)
  }

  return (
    <h1   onClick={increment}>{count}</h1>
  )
}