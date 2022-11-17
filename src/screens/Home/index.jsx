import React from 'react'
import styled from 'styled-components'
import Model from '../../components/Model'
import LeftComponenet from './LeftComponenet'
import RightComponent from './RightComponent'

const StyledHome=styled.div`
width:100%;
height:100vh;

`
const Home = () => {
  return (
   <StyledHome>
    
    <LeftComponenet/>
    <RightComponent/>
    <Model/>
   </StyledHome>
  )
}

export default Home