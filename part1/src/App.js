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
  const [percentage, setPercentage] = useState(0)
  const [average, setAverage] = useState(0)

  const title = "Give feedback"
  const goodButtonTitle = "good"
  const badButtonTitle = "bad"
  const neutralButtonTitle = "neutral"
  const statisticsHeader = "Statistics"

  const handleGoodState = () => {
    const newGood = good + 1
    const newAll = all + 1
    const newPercentage = newGood * 100 / newAll 
    const newAverage = (newGood - bad) / newAll
    setAll(newAll)
    setGood(newGood)
    setPercentage(newPercentage)
    setAverage(newAverage)
  }

  const handleBadState = () => {
    const newBad = bad + 1
    const newAll = all + 1
    const newPercentage = good * 100 / newAll
    const newAverage = (good - newBad) / newAll
    setAll(newAll)
    setBad(newBad)
    setPercentage(newPercentage)
    setAverage(newAverage)
  }
  const handleNeutralState = () => {
    const newNeutral = neutral + 1
    const newAll = all + 1
    const newPercentage = good * 100/ newAll
    const newAverage = (good - bad) / newAll
    setAll(newAll)
    setNeutral(newNeutral)
    setPercentage(newPercentage)
    setAverage(newAverage)
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
      <Display text="Average" state={average}/>
      <Display text="Percentage: " state={percentage}/>
    </div>
  )
  
}

export default App