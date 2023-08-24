import Parent1 from "./parent1";
import {Card, CardContent} from "@mui/material" ;

export default function parent2(){
    return (
        <>
        <Card>
            <CardContent>
              <div>parent2</div>  
                <Parent1></Parent1>
            </CardContent>
        </Card>
        </>
    )
}