import React from "react";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import { faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Actions= ({setPestaña})=>{

function changeState(e){

setPestaña(e.target.innerHTML)

console.log(e.target.innerHTML)

}

return(

<>

<div className="flex w-full mt-5" style={{justifyContent: "space-around"}}>

<div className="rounded-md border text-center" style={{marginRight:20}, {padding:3}} >

<button onClick={changeState}>Todas</button>

<FontAwesomeIcon icon={faHome}/>

</div>

<div className="rounded-md border text-center" style={{marginRight:20}, {padding:3}} >

<button onClick={changeState}>Pendientes</button>

<FontAwesomeIcon icon={faCoffee}/>

</div>

<div className="rounded-md border text-center" style={{marginRight:20}, {padding:3}} >

<button onClick={changeState}>Completadas</button>

<FontAwesomeIcon icon={faCheckSquare}/>

</div>

<div className="rounded-md border text-center" style={{marginRight:20}, {padding:3}} >

<button onClick={changeState}>Eliminadas</button>

<FontAwesomeIcon icon={faCheckSquare}/>

</div>

</div>

</>

)

}

export default Actions