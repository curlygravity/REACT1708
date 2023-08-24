import { Typography} from "@mui/material";
import App from "./App"
import { useState } from 'react'
import Parent2 from "./parent2";
import contextStatus from "./provider";
import { Tistatus } from "./types.ts";

function MyApp(){
    const [counterSum, setCounterSum] = useState(0);
    const customSumIncrease = (val:number) => {
        setCounterSum(counterSum + val);
    };
    const [MyStatusApp, setMyStatusApp] = useState<Tistatus>("Not Ok");
    const changeStatus = () => {
        if (MyStatusApp === "Ok"){
            setMyStatusApp("Not Ok");
            return;
        }   setMyStatusApp("Ok");
    return; };
    return (
    <>
        <App initalState ={0} customCallback={customSumIncrease}/>
        
        <Typography variant="h5">
        <span>Sum:</span> <span>{counterSum}</span> 
        </Typography>

        <contextStatus.Provider value= {{ myStatus: MyStatusApp, setMyStatus:changeStatus,}}>
          <Parent2></Parent2>  
        </contextStatus.Provider>
        
    </>);
}
export default MyApp;