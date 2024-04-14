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

const Course = (props) => {
  return (
    <>
      {props.courses.map(
        (course) => {
         return (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <Content content={course}/>
          </div>
         )
        }
      )}
    </>
  )
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        }
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        }, 
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        }
      ],

    }
  ]
  
  return (
    <Course courses={courses} />
  )
}

export default App
