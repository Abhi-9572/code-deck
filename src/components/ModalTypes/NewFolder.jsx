import React, { useContext } from 'react'
import { Header, Heading } from '../Model'
import {IoCloseSharp} from 'react-icons/io5'
import { ModelContext } from '../../context/ModalContext'

const NewFolder = () => {
  const {setisOpenModal}=useContext(ModelContext)
  return (
   <>
            <Header>
                <Heading><p>Create new Folder</p></Heading>
                <IoCloseSharp onClick={()=>setisOpenModal(false)}/>
            </Header>
             
           <p>Enter Folder Name:<input type="text" /></p> 
            <button>create New Folder</button>
   </>
  )
}

export default NewFolder