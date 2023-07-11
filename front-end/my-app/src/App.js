import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { UserInfoPage } from './UserInfoPage';
import { LoginPage } from "./LoginPage";

function App() {
  return (
    <Router>
  <Routes>
      <Route path="/" element={<UserInfoPage />}/>
      <Route path="/login" element={<LoginPage />}/>

      
    </Routes>
    </Router>
  );
}

export default App;
