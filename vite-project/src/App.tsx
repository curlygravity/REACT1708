import { useState } from 'react'
import './App.css'
import { Button, Typography, Stack} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Typography variant="h3" gutterBottom >
    count is  {count}
    </Typography>
    <Stack alignItems="center" direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={() => setCount((count) => count + 1)}>+1</Button>
      <Button variant="contained"  color="error" onClick={() => setCount((count) => count - 1)}>-1</Button>
</Stack>
    </>
  )
}

export default App



