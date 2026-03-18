import fdmLogo from '../assets/fdmLogo.png'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'

export default function loginForm(){
    const navigate = useNavigate()

    return <div className="flex flex-col items-center justify-center p-4 h-screen"> {/* Whole view wrapper*/}
      <form className=" 
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
            <input placeholder="Email Address" type="email" className="w-9/10 mt-6 mb-4 p-2 border border-gray-300 rounded-md bg-[#1a1a1a]"></input>
            <input placeholder="Password" type="password" className="w-9/10 mt-2 mb-4 p-2 border border-gray-300 rounded-md bg-[#1a1a1a]"></input>
        </div>
        <div className="flex justify-center"> <button onClick={() => navigate('/dashboard')} className="w-1/4 mt-4 mb-4 p-2 py-5 bg-[#c5ff00] text-black rounded-3xl hover:bg-[#a3dd00]"> <h3> Login </h3> </button> </div>
      </form>
  </div>
}