import {Card, CardContent} from "@mui/material" ;
import { useContext } from "react";
import contextStatus from "./provider";

export default function child() {
  const {myStatus} = useContext(contextStatus);
    return(
      <> <Card>
        <CardContent>
          <div>{myStatus}</div>
        </CardContent>
      </Card>
      </>
    )
  
}