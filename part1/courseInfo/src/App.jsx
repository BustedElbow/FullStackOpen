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

const Hello = ({name,age}) => {
  
  const bornYear = () => { return new Date().getFullYear() - age}
  
  console.log(bornYear())

  return (
    <>
      <p>
        Hello, I think you, {name}, is somewhat stuck in tutorial hell
      </p>
      <p>Somehow a piece of shit like is born in {bornYear()}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of component',
        exercises: 14,
      }
    ]
  }
  
  return (
    <>
      <Header title={course}/>
      <Content parts={course}/>
      <Total parts={course}/>
    </>
  )
}

export default App