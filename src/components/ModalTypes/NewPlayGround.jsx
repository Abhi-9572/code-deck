import React, { useContext,useState } from 'react'
import { Header, Heading,CloseButton } from '../Model'
import {IoCloseSharp} from 'react-icons/io5'
import { ModelContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'
import Select from 'react-select';
import styled from 'styled-components';



const InputWithSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 1rem;
  margin-top: 1.2rem;
  align-items: center;
  input {
    flex-grow: 1;
    height: 2rem;
  }
  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0 2rem;
  }
`;

const NewPlayGround = () => {
  const { isOpenModal, closeModal } = useContext(ModelContext);
  const { addPlayground } = useContext(PlaygroundContext);

  const languageOptions = [
    { value: "cpp", label: "cpp" },
    { value: "java", label: "java" },
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
  ];

  const {folderId} = isOpenModal.identifiers;
  const [cardTitle, setCardTitle] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  return (
    <>
   
      <Header>
        <h2>Create New Playground</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <InputWithSelect>
        <input
          type='text'
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />
        <button onClick={() => {
          addPlayground(folderId, cardTitle, language.label)
          closeModal();
        }}> Create Playground </button>
      </InputWithSelect>
    </>
  )
}

export default NewPlayGround

// const NewPlayGround = () => {
//   const {closeModal}=useContext(ModelContext)
//   return (
//     <>
//             <Header>
//                 <Heading><p>Create new PlayGround</p></Heading>
//                 <IoCloseSharp onClick={()=>closeModal()}/>
//             </Header>
//             <p>Enter PlayGround:<input type="text" /></p> 
//             <select name="" id="">
//             <option value="C++">C++</option>
//             <option value="Java">Java</option>
//             <option value="JavaScript">JavaScript</option>
//             <option value="Python">Python</option>
//            </select>
//             <button>create New PlayGround</button>
//    </>
//   )
// }

// export default NewPlayGround