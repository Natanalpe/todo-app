import { HashRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global/globalStyle";
import Home from "./components/home";
import AddNewItem from "./components/form";

function App() {
     return (
          <>
               <GlobalStyle />
               <HashRouter>
                    <Routes>
                         <Route path="/" element={<Home />}/>
                         <Route path="add" element={<AddNewItem />}/>
                    </Routes>
               </HashRouter>
               <a id="git-link" href="https://github.com/Natanalpe" target="_blank" rel="noreferrer" >@natanalpe</a>
          </>
     )
}

export default App;