import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value} {props.sign}</td>
      </tr>
    </>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad, all}) => {
  if (all == 0) {
    return (
      <>
        <h2>Statistics</h2>
        No feedback given
      </>
    )
  }
  return (
    <>
      <h2>Statistics</h2>
      <StatisticsLine text='Good' value={good} />
      <StatisticsLine text='Neutral' value={neutral} />
      <StatisticsLine text='Bad' value={bad} />
      <StatisticsLine text='All' value={all} />
      <StatisticsLine text='Average' value={((good * 1) + (neutral * 0) + (bad * -1)) / all} />
      <StatisticsLine text='Percentage' value={(good / all) * 100} sign='%' />
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodHandler = () => {
    const newGood = good + 1
    setGood(newGood)
    setAll(newGood + bad + neutral)
  }

  const neutralHandler = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setAll(newNeutral + bad + good)  
  }

  const badHandler = () => {
    const newBad = bad + 1
    setBad(newBad)
    setAll(newBad + good + neutral)
  }

  return (
    <>
      <h1>Give FeedBack</h1>
      <Button handleClick={goodHandler} text='Good' />
      <Button handleClick={neutralHandler} text='Neutral' />
      <Button handleClick={badHandler} text='Bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </>
  )
}

export default App
