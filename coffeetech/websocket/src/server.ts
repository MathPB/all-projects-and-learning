import { serverHttp } from "./http";
import "./websocket";

serverHttp.listen(3000, () => console.log("Server listen on PORT 3000"));