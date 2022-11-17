import React, { useContext } from 'react'
import styled from 'styled-components'
import { ModelContext } from '../context/ModalContext'
import NewFolder from './ModalTypes/NewFolder'
import NewPlayGround from './ModalTypes/NewPlayGround'
import NewPlaygroundAndFolder from './ModalTypes/NewPlaygroundAndFolder'



const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;

width:100%;
height:100vh;
background-color:rgba(0,0,0,0.8);
display:flex;
justify-content:center;
align-items:center;
`

const ModalContent=styled.div`
background-color:#fff;
padding:0.5rem;
// display:flex;
// flex-direction:column;
`

export const Header=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
// border-bottom:2px solid black;
`

export const Heading=styled.h3`
font-size:1.5rem;
font-weight:400;
span{
    font-weight:700;
}
`

const Model = () => {
    // const type=3;
    const{modalType}=useContext(ModelContext)
    // console.log(modalType)
  return (
    <ModalContainer>
        <ModalContent>
            {modalType===1 &&<NewFolder/>}
            {modalType===2 &&<NewPlayGround/>}
            {modalType===3 &&<NewPlaygroundAndFolder/>}
           
            {/* <NewFolder/> */}
            {/* <NewPlayGround/>
            <NewPlaygroundAndFolder/> */}
            
        </ModalContent>
    </ModalContainer>
  )
}

export default Model