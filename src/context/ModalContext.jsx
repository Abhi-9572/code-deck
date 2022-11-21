// import React, { Children, createContext, useState } from 'react'


// export const ModelContext=createContext();
// export const ModalProvider = ({children}) => {
//     const[isOpenModal,setisOpenModal]=useState(false)
//     const[modalType,setModalType]=useState(null)

//     const setModal=(isOpenModal,type)=>
//     {
//         setisOpenModal(isOpenModal)
//         setModalType(type)
//     }
//   return (
//     <ModelContext.Provider value={{isOpenModal,setisOpenModal,modalType,setModal}}>
//         {children}
//     </ModelContext.Provider>
//   )
// }


import { createContext, useState } from "react";

export const ModelContext = createContext();

// ModalFields: {foldername, filename, language, type, isopenmodel}
export const ModalProvider=({children})=>{
    const initialModalFields = {
        show : false,
        modalType : "",
        identifiers : {
            folderId : "",
            cardId : "",
        }
    }

    const [isOpenModal, setIsOpenModal] = useState({ ...initialModalFields});

    const openModal = (value) => {
        setIsOpenModal(value)
    }

    const closeModal = () => {
        setIsOpenModal({ ...initialModalFields})
    }

    const ModalFeatures = {
        isOpenModal: isOpenModal,
        openModal: openModal,
        closeModal: closeModal
    }
    return (
        <ModelContext.Provider value={ModalFeatures}>
            {children}
        </ModelContext.Provider>
    )
}

