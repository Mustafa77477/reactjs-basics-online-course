import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import LoginForm from "./components/Form/LoginForm"; 
import { IuserData } from "./interfaces";
import UserDetails from "./components/Form/UserDetails";

function App() {
  const company = "AL AJWANY";
  const aboutTxt = "About us";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IuserData>({
    username: "",
    email: "",
    address: "",
    password: "",
    FullName: "",
  }); 

  return (
    <>
      <Navbar
        companyName={company}
        aboutTxt={aboutTxt}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {isLoggedIn ? (
        <UserDetails user={userData}/>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} userData={userData} setUserData={setUserData}/>
      )}
    </>
  );
}

export default App;
