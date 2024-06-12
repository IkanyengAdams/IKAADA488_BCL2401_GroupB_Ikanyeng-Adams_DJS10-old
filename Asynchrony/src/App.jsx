import { useEffect, useState } from 'react'


function App() {
  const [count, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/posts')
  })

}

export default App
