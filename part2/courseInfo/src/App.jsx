import { useState } from 'react'

const Content = ({content}) => {
  
  const total = content.parts.reduce((accu, currVal) => {
    console.log()
    return accu + currVal.exercises
  }, 0)

  return (
    <>
      <ul>
        {content.parts.map(x => 
          <li key={x.id}>{x.name} {x.exercises}</li>
        )}
      </ul>
      <p>total of {total} exercises</p>
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
      <Content content={course} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      }
    ]
  }

  return <Course course={course} />
}

export default App
