import Course from './Components/Course'


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Test Course',
      id: 3,
      parts: [
        {
          name: 'Part1Name',
          exercises: 5,
          id: 1
        },
        {
          name: 'Part2Name',
          exercises: 2,
          id: 2
        }
      ]
    }
  ]

  return (
    <div id="Course">
        <Course courseId={1} courses={courses} />
        <Course courseId={2} courses={courses} />
        <Course courseId={3} courses={courses} />
    </div>
  )
}

export default App