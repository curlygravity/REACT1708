// import {Tistatus} from "./types.ts";
import { createContext } from "react";
const contextStatus = createContext ({myStatus:"", setMyStatus:() => {}});
export default contextStatus;