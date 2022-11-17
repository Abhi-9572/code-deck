import React, { useContext } from 'react'
import { Header, Heading } from '../Model'
import {IoCloseSharp} from 'react-icons/io5'
import { ModelContext } from '../../context/ModalContext'

const EditFolder = () => {
  const {setisOpenModal}=useContext(ModelContext)
  return (
   <>
            <Header>
                <Heading><p>Edit Folder</p></Heading>
                <IoCloseSharp onClick={()=>setisOpenModal(false)}/>
            </Header>
             
           <p>Enter New Folder:<input type="text" /></p> 
            <button>Edit Folder</button>
   </>
  )
}

export default EditFolder