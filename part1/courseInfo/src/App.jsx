const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.title}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const part1 = {
    name: 'Fundamentals of Reach',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of component',
    exercises: 14,
  }
  
  return (
    <>
      <Header title={course}/>
      <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/>
      <Total part1={exercises1} part2={exercises2} part3={exercises3}/>
    </>
  )
}

export default App