import { useState } from 'react'
import { Button, Typography, Stack} from '@mui/material'

type MyAppProps = {
  title?:string;
  initalState: number;
  customCallback: (val:number) => void;
}
function App(props:MyAppProps) {
  const [count, setCount] = useState(props.initalState)
  const increment = ()=> {
    setCount(count + 1);
    props.customCallback(1)
  }
  const decrement = ()=> {
    setCount(count - 1);
    props.customCallback(-1)
  }
  return (
    <>
    <Typography variant="h3" gutterBottom >
   {props.title}
    </Typography>
    <Typography variant="h3" gutterBottom >
    count is  {count}
    </Typography>
    <Stack alignItems="center" direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={increment}>+1</Button>
      <Button variant="contained"  color="error" onClick={decrement}>-1</Button>
</Stack>
    </>
  )
}

export default App



