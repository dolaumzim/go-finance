import './App.css'
import { Route, Routes} from "react-router-dom";
import Login from './Routers/Login';
import SignUp from './Routers/SignUp';

function App() {

  return (
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  )
}

export default App
