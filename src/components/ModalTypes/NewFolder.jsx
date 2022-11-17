import React from 'react'
import { Header, Heading } from '../Model'
import {IoCloseSharp} from 'react-icons/io5'

const NewFolder = () => {
  return (
   <>
            <Header>
                <Heading><p>Create new Folder</p></Heading>
                <IoCloseSharp/>
            </Header>
             
           <p>Enter Folder Name:<input type="text" /></p> 
            <button>create New Folder</button>
   </>
  )
}

export default NewFolder