import React, { useContext } from 'react'
import styled from 'styled-components'
import {IoTrashOutline} from'react-icons/io5'
import {BiEditAlt} from'react-icons/bi'
import logo from '../../assets/logo-small.png'
import { ModelContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'
import { useNavigate } from 'react-router-dom'


const StyledRightComponent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 2rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`

const Heading = styled.h3`
  font-size: ${props => props.size === 'small' ? "1.25rem" : "1.75rem"};
  font-weight: 400;
  span{
    font-weight: 700;
  }
`

const AddButton = styled.div`
    font-size: 1rem;
    border-radius: 30px;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    span{
        font-size: 1.5rem;
        font-weight: 700;
    }
    &:hover{
        cursor: pointer;
    }
`

const FolderCard = styled.div`
    margin-bottom: 1rem;
`

const FolderIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
`

const PlayGroundCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`

const Card = styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 0 4px 0px #989898;
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

const CardContent = styled.div`
`

const Logo = styled.img`
    width: 70px;
    margin-right: 1rem;
`
const RightComponent = () => {
  const navigate = useNavigate();

  const { openModal } = useContext(ModelContext);
  const { folders, deleteFolder, deleteCard } = useContext(PlaygroundContext);

  return (
    <StyledRightComponent>
      <Header>
        <Heading size="large">
          My <span>Playground</span>
        </Heading>
        <AddButton onClick={() => openModal({
          show: true,
          modalType: 1,
          identifiers: {
            folderId: "",
            cardId: "",
          }
        })}> <span>+</span> New Folder</AddButton>
      </Header>
      <hr />

      {
        Object.entries(folders).map(([folderId, folder]) => (
          <FolderCard key={folderId}>
            <Header>
              <Heading size="small">
                {folder.title}
              </Heading>
              <FolderIcons>
                <IoTrashOutline onClick={() => deleteFolder(folderId)} />
                <BiEditAlt onClick={() => openModal({
                  show: true,
                  modalType: 4,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })} />
                <AddButton onClick={() => openModal({
                  show: true,
                  modalType: 2,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })}><span>+</span> New Playground</AddButton>
              </FolderIcons>
            </Header>

            <PlayGroundCards>
              {
                Object.entries(folder['playgrounds']).map(([playgroundId, playground]) => (
                  <Card key={playgroundId} onClick={() => {
                    navigate(`/playground/${folderId}/${playgroundId}`)
                  }}>
                    <CardContainer>
                      <Logo src={logo} />
                      <CardContent>
                        <p>{playground.title}</p>
                        <p>Language: {playground.language}</p>
                      </CardContent>
                    </CardContainer>
                    <FolderIcons onClick={(e) => {
                      e.stopPropagation(); //stop click propagation from child to parent
                    }}>
                      <IoTrashOutline onClick={() => deleteCard(folderId, playgroundId)} />
                      <BiEditAlt onClick={() => openModal({
                        show: true,
                        modalType: 5,
                        identifiers: {
                          folderId: folderId,
                          cardId: playgroundId,
                        }
                      })} />
                    </FolderIcons>
                  </Card>
                ))
              }
            </PlayGroundCards>
          </FolderCard>
        ))
      }
    </StyledRightComponent>
  )
}

export default RightComponent;

/*
const StyledRightComponent=styled.div`
position:absolute;
top:0;
right: 0;
width:60%;
height:100vh;
background-color:#fff;
padding:2rem;
`

const Header=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
// border-bottom:2px solid black;
`

const Heading=styled.h3`
font-size:${props => props.size==='small' ? "1.25rem" : "1.75rem"};
font-weight:400;
span{
    font-weight:700;
}
`

const AddFolder=styled.div`
padding: 0.75rem 1.25rem;
font-size:${props => props.size==='small' ? "0.8rem" : "1.25rem"};
border-radius:30px;
display:flex;
align-items:center;
gap:0.5rem;

span{
font-size:1.5rem;
font-weight:700;
}

&:hover{
    cursor:pointer;
}

`

const FolderCard=styled.div`
margin-bottom:1rem;
`

const FolderIcons=styled.div`
display:flex;
align-items:center;
gap:0.5rem;
cursor:pointer;
`

const PlayGroundCards=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
gap:2rem;
grid-column-gap:1rem;
`

const Card=styled.div`
padding:0.5rem;
display:flex;
align-items:center;
justify-content:space-between;
// border:1px solid gray;
box-shadow: 0 0 2px 0px #5a5858;
border-radius:5px;

`

const Logo=styled.img`
width:70px;
margin-right:1rem;
`

const CardContent=styled.div`

`
const CardContainer=styled.div`
display:flex;
align-items:center;
`

const RightComponent = () => {
    const {openModal}=useContext(ModelContext)
  return (
    <StyledRightComponent>
        <Header>
            <Heading size="large">
            My <span>PlayGround</span>
            </Heading>
        
        <AddFolder onClick={()=>openModal(
              {
                show : true,
                modalType : 1,
                identifiers : {
                folderId : "",
                cardId : "",
                            }
              }
             )}><span>+</span> New Folder</AddFolder>
        </Header>
        <hr />
        
        {
        Array.from({length:4}).map(()=>
        {
            return(
                <FolderCard>
                <Header>
                    <Heading size="small">
                    Folder Name
                    </Heading>
                    <FolderIcons>
                        <IoTrashOutline/>
                        <BiEditAlt onClick={()=>openModal(
              {
                            show : true,
                            modalType : 4,
                            identifiers : {
                            folderId : "",
                            cardId : "",
                                }
              }
             )}/>
                        <AddFolder  onClick={()=>openModal(
              {
                show : true,
                modalType : 2,
                identifiers : {
                folderId : "",
                cardId : "",
        }
              }
             )}><span>+</span> New Playground</AddFolder>
                    </FolderIcons>
               </Header> 
                             <PlayGroundCards>
                    {
                        Array.from({length:4}).map(()=>
                        (
                            <Card>
                        <CardContainer>
                        <Logo src={logo}/>
                        <CardContent>
                            <p>Playground Name</p>
                            <p>Language: c++</p>
                        </CardContent>
                        </CardContainer>
            
                        <FolderIcons>
                            <IoTrashOutline/>
                            <BiEditAlt onClick={()=>openModal(
              {
                show : true,
                modalType : 5,
                identifiers : {
                folderId : "",
                cardId : "",
        }
              }
             )}/>
                        </FolderIcons>
                            </Card>
                        ))
                    }
                            </PlayGroundCards>
                </FolderCard> 
            )
            
        })
       } 

       
    </StyledRightComponent>
  )
}


export default RightComponent
*/