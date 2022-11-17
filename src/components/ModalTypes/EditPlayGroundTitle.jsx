import React, { useContext } from 'react'
import { Header, Heading } from '../Model'
import {IoCloseSharp} from 'react-icons/io5'
import { ModelContext } from '../../context/ModalContext'

const EditPlayGroundTitle = () => {
  const {setisOpenModal}=useContext(ModelContext)
  return (
    <>
            <Header>
                <Heading><p>Edit PlayGround</p></Heading>
                <IoCloseSharp onClick={()=>setisOpenModal(false)}/>
            </Header>
            <p>Enter New  PlayGround:<input type="text" /></p> 
            <button>Edit PlayGround</button>
   </>
  )
}

export default EditPlayGroundTitle