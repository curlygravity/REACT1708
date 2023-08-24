import Child from "./child";
import {Card, CardContent, Button} from "@mui/material" ;
import contextStatus from "./provider";
import {useContext} from "react";
export default function parent1(){
    const {setMyStatus} = useContext(contextStatus)
    return (
        <>
        <Card>
            <CardContent>
              <div>parent1</div>  
              <Button onClick={setMyStatus}>change</Button>
                <Child></Child>
            </CardContent>
        </Card>
        </>
    )
}