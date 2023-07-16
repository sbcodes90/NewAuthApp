import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { UserInfoPage } from './Pages/UserInfoPage';
import { LoginPage } from "./Pages/LoginPage";
import { CreateUserPage } from "./Pages/CreateUserPage";

function App() {
  return (
    <Router>
  <Routes>
      {/* <Route path="/" element={<UserInfoPage />}/>  */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/user-info" element={<UserInfoPage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<CreateUserPage />}/>

      
    </Routes>
    </Router>
  );
}

export default App;
