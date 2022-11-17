import React, { Children, createContext, useState } from 'react'


export const ModelContext=createContext();
export const ModalProvider = ({children}) => {
    const[isOpenModal,setisOpenModal]=useState(false)
    const[modalType,setModalType]=useState(null)

    const setModal=(isOpenModal,type)=>
    {
        setisOpenModal(isOpenModal)
        setModalType(type)
    }
  return (
    <ModelContext.Provider value={{isOpenModal,setisOpenModal,modalType,setModal}}>
        {children}
    </ModelContext.Provider>
  )
}
