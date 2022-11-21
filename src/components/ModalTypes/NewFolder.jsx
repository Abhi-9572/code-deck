import React, { useContext,useState } from 'react'
import { Header, Heading,CloseButton, Input } from '../Model'
import {IoCloseSharp} from 'react-icons/io5'
import { ModelContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'



const NewFolder = () => {
  const { closeModal } = useContext(ModelContext);
  const { addFolder } = useContext(PlaygroundContext)
  const [folderTitle, setFolderTitle] = useState("");

  return (
    <>
      <Header>
        <h2>Create New Folder</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <Input>
        <input type="text" onChange={(e) => setFolderTitle(e.target.value)} />
        <button onClick={() => {
          addFolder(folderTitle)
          closeModal()
        }}>Create Folder</button>
      </Input>
    </>
  )
}

export default NewFolder

// const NewFolder = () => {
//   const {closeModal}=useContext(ModelContext)
//   return (
//    <>
//             <Header>
//                 <Heading><p>Create new Folder</p></Heading>
//                 <IoCloseSharp onClick={()=>closeModal()}/>
//             </Header>
             
//            <p>Enter Folder Name:<input type="text" /></p> 
//             <button>create New Folder</button>
//    </>
//   )
// }

// export default NewFolder