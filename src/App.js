import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./screens/Error404";
import Home from "./screens/Home";
import Playground from "./screens/Playground";
import { GlobalStyle } from "./style/global"; 
import { ModalProvider } from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";


function App() {
  return (
    <>
    <PlaygroundProvider>
    <ModalProvider>
    <BrowserRouter>
    <GlobalStyle/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/playground" element={<Playground/>}></Route>
    <Route path="*" element={<Error404/>}></Route>
   </Routes>
    </BrowserRouter>
    </ModalProvider>
    </PlaygroundProvider>
   
   
    </>
  );
}

export default App;
