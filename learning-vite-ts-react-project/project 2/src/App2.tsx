// using normal state

import { useState, useEffect, useCallback, useMemo, useRef } from "react";

interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

function App() {
  const [count, setCount] = useState<number>(1)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log('Refcurrent: ', inputRef?.current)
  console.log('Refvalue: ', inputRef?.current?.value)

  useEffect(() => {
    console.log('mount')
    console.log('Users: ', users)

    return () => console.log('unmount')
  }, [users])

  // eg for event e
  // const add = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
  //   setCount(prev => prev + 1)
  // }, [])

  const add = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const subtract = useCallback(() => {
    setCount(prev => prev - 1)
  }, [])

  // this also works
  const result = useMemo<number>(() => {
    return fib(myNum)
  }, [myNum])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>
        +
      </button>
      <button onClick={subtract}>
        -
      </button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
