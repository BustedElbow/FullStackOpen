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

export default Course