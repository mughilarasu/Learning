// using normal state

import { useState } from "react";
import './css/App.css';
import Headings from './components/Headings';
import Section from './components/Section';
import Counter from './components/Counter';
import List from './components/List';
function App() {
  const [count, setCount] = useState<number>(1)
  return (
    <>
      <Headings title={"Hi"} />
      <Section title={"Hey"} >This is my section</Section>
      <Counter setCount={setCount}>count is {count}</Counter>
      <List items={["a", "b", "c"]} render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
