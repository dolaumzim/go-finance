import './App.css'
import { Route, Routes} from "react-router-dom";
import Login from './Routers/Login';
import SignIn from './Routers/SignIn';
import Home from './Routers/Home';
import UnderConstruction from './Routers/UnderConstruction';
import UnderConstruction2 from './Routers/UnderConstruction2';

function App() {

  return (
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/construction" element={<UnderConstruction/>}/>
      <Route path="/construction2" element={<UnderConstruction2/>}/>
    </Routes>
  )
}

export default App
