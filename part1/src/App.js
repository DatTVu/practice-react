import {useState} from "react"
const Header = ({text}) => <h1>{text}</h1>
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const Display = ({state, text}) => {
  return(
    <div>{text} : {state}</div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)
  const title = "Give feedback"
  const goodButtonTitle = "good"
  const badButtonTitle = "bad"
  const neutralButtonTitle = "neutral"
  const statisticsHeader = "Statistics"
  const handleGoodState = () => {
    const newGood = good + 1
    const newAll = all + 1
    setAll(newAll)
    setGood(newGood)
  }
  const handleBadState = () => {
    const newBad = bad + 1
    const newAll = all + 1
    setAll(newAll)
    setBad(newBad)
  }
  const handleNeutralState = () => {
    const newNeutral = neutral + 1
    const newAll = all + 1
    setAll(newAll)
    setNeutral(newNeutral)
  }
  return (
    <div>
      <Header text={title}/>
      <Button text={goodButtonTitle} handleClick={handleGoodState}/>
      <Button text={badButtonTitle} handleClick={handleBadState}/>
      <Button text={neutralButtonTitle} handleClick={handleNeutralState}/>
      <Header text={statisticsHeader}/>
      <Display text="Good" state={good}/>
      <Display text="Bad" state={bad}/>
      <Display text="Neutral" state={neutral}/>
      <Display text="All" state={all}/>
    </div>
  )
  
}

export default App