import React from 'react'
import { Header, Heading } from '../Model'
import {IoCloseSharp} from 'react-icons/io5'
const NewPlaygroundAndFolder = () => {
  return (
    <>
     <Header>
                <Heading ><p> Create newPlayGround and Create new Folder</p></Heading>
                <IoCloseSharp/>
            </Header>
           
           <p>Enter Folder Name:<input type="text" /></p> 
           <p>Enter PlayGround:<input type="text" /></p> 
           <select name="" id="">
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
           </select>
            <button>create New PlayGround</button>
    </>
  )
}

export default NewPlaygroundAndFolder