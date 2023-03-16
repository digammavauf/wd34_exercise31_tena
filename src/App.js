import NavigationBar from './components/NavigationBar';
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import CartMultiple from './pages/CartMultiple';
import UseReferencePage from './pages/UseReferenceHook';
import UseReducerPage from './pages/UseReducerHook';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <div className="App container my-5 pt-5">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Work" element={<Work/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Cart" element={<CartMultiple/>}></Route>
          <Route path="/HookUseRef" element={<UseReferencePage/>}></Route>
          <Route path="/HookUseReducer" element={<UseReducerPage/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
