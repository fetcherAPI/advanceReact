import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {

  const[count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(prev => prev+1)
  }

  return (
    <h1  className={classes.counter}  onClick={increment}>{count}</h1>
  )
}