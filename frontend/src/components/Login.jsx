import { useState } from 'react'
import fdmLogo from '../assets/fdmLogo.png'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'


export default function LoginForm(){
  const navigate = useNavigate()
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(true);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    if (firstSubmit){return}
    if (e.target.name === "email") {
      setShowEmailError(!isValidEmail(e.target.value));
    } else{
      setShowPasswordError(!e.target.value || e.target.value.length === 0);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    setFirstSubmit(false);
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    setShowEmailError(!isValidEmail(email));
    setShowPasswordError(!password || password.length === 0);
    let canSubmit = ((isValidEmail(email)) && !(!password || password.length === 0));

    if (canSubmit){
      navigate('/Dashboard');
    }
  }

  return <div className="flex flex-col items-center justify-center p-4 h-screen"> {/* Whole view wrapper*/}
    <form onSubmit={submit} className=" 
    rounded-[28px] 
    border 
    border-[color:var(--fdm-border)] 
    bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] 
    p-5 
    shadow-[0_18px_40px_rgba(0,0,0,0.24)]
    w-5/8
    h-auto
    flex-col
    items-center
    justify-center"> {/* FORM DIV */}

      <div className="flex items-center relative mb-6"> {/* Top line: Logo + Title */}
          <img src={fdmLogo} alt="FDM Logo" className="w-22 absolute left-0"/> 
          <p className="text-center text-4xl font-bold flex-1 w-full"> Login </p> 
      </div>
      <div className='mb-4'> <p className="text-center text-xl"> Welcome to the FDM Employee Portal </p> </div>
      <div className='flex flex-col items-center'>
          <input placeholder="Email Address" name="email" onChange={handleChange} className={`focus:outline-none focus:ring-1 w-9/10 p-2 border ${showEmailError ? "border-red-500 focus:border-red-400 focus:ring-red-400" : "border-gray-300 "} rounded-md bg-[#1a1a1a]`}></input>
          {showEmailError && (<p className="text-red-500 text-s text-left w-18/20"> Please enter a valid email address. </p>)}

          <input placeholder="Password" type="password" name="password" onChange={handleChange} className={`focus:outline-none focus:ring-1 w-9/10  p-2 border ${showEmailError ? "mt-2 " : "mt-6 "} ${showPasswordError ? "border-red-500 focus:border-red-400 focus:ring-red-400" : "border-gray-300 mb-2"} rounded-md bg-[#1a1a1a]`}></input>
          {showPasswordError && (<p className="text-red-500 text-s text-left w-18/20"> Please enter a password. </p>)}
      </div>
      <div className="flex justify-center"> <button type="submit" className="w-1/4 mt-4 mb-6 p-2 py-5 bg-[#c5ff00] text-black rounded-3xl hover:bg-[#a3dd00]"> <h3> Login </h3> </button> </div>
    </form>
  </div>
}