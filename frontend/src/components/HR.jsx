import pfp from '../assets/pfp images/pfp3.jpg'
import { useState } from 'react'
import {Check, X} from 'lucide-react'


export default function HRDisplay(){
    const [firstSubmit, setFirstSubmit] = useState(true);
    const [showTitleError, setShowTitleError] = useState(false);
    const [showContentError, setShowContentError] = useState(false);
    const [hovered, setHovered] = useState(false);

    const createAnnoucement = (e) => {
        e.preventDefault();
        setFirstSubmit(false);
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const content = formData.get('content');

        setShowTitleError(!title || title.length === 0);
        setShowContentError(!content || content.length === 0);
        let canSubmit = (!(!title || title.length === 0) && !(!content || content.length === 0));

        if (canSubmit){
            // backend creates announcement here
            console.log("Announcement created with title: " + title + " and content: " + content);
        }
    }

    const checkEmpty = (e) => {
        if (firstSubmit){return}
        if (e.target.name === "title") 
            {setShowTitleError(!e.target.value || e.target.value.length === 0);} 
        else if (e.target.name === "content")
            {setShowContentError(!e.target.value || e.target.value.length === 0);}
    }


    return(
        <div className="flex flex-col items-center justify-top p-4 h-screen gap-4"> {/* Whole view wrapper*/}
            <div className="
                rounded-[28px] 
                w-full h-auto
                flex-col items-center justify-center"> {/* HR HEADER */}

                                
                <h1 className="text-4xl font-black tracking-[-0.04em] text-[var(--fdm-text)] sm:text-5xl">
                    Human Resources Dashboard
                </h1>
            </div>

            <div className="flex flex-row w-1/1 h-1/5 items-center justify-center gap-10"> {/* HR CONTENT */}
                <div className="hr-section w-1/4">
                    <h2 className="hr-section-title"> 4 Pending leave requests </h2>
                </div>
                <div className="hr-section w-1/4">
                    <h2 className="hr-section-title"> 6 Unread Announcements </h2>
                </div>
                <div className="hr-section w-1/4">
                    <h2 className="hr-section-title"> 4 Pending leave requests </h2>
                </div>
                <div className="hr-section w-1/4">
                    <h2 className="hr-section-title"> 4 Pending leave requests </h2>
                </div>
            </div>

            <div className="flex flex-wrap w-1/1 h-1/2 items-center justify-center gap-10"> {/* HR CONTENT */}
                <div  className="hr-section w-15/32"> {/* Review leave requests */}
                    <h2 className="hr-section-title"> Review leave requests </h2>
                    <hr className="hr-line"/>
                    <div className="leave-requests-container">

                        <div className="hr-leave-request"> 

                            <div className="leave-request-image-container"> <img src={pfp} alt="Profile Picture"/> </div>

                            <div className="leave-request-content-container">
                                <div className="leave-request-primary-info"> 
                                    <p className="request-name"> John Johnson </p>
                                </div>
                                <div className="leave-request-secondary-info">
                                    <p className="request-type"> Annual leave </p>
                                    <p className="request-dates"> 19 May - 28 May </p>
                                    <p className="request-employee-type"> Line Manager </p>
                                </div>

                            </div>

                            <div className="leave-request-buttons-container">
                                <button className="leave-button"> <Check/> </button>
                                <button className="leave-button"> <X/> </button>
                            </div>

                        </div>

                        <div className="hr-leave-request"> 

                            <div className="leave-request-image-container"> <img src={pfp} alt="Profile Picture"/> </div>

                            <div className="leave-request-content-container">
                                <div className="leave-request-primary-info"> 
                                    <p className="request-name"> John Johnson </p>
                                </div>
                                <div className="leave-request-secondary-info">
                                    <p className="request-type"> Annual leave </p>
                                    <p className="request-dates"> 19 May - 28 May </p>
                                    <p className="request-employee-type"> Line Manager </p>
                                </div>

                            </div>

                            <div className="leave-request-buttons-container">
                                <button className="leave-button"> <Check/> </button>
                                <button className="leave-button"> <X/> </button>
                            </div>

                        </div>

                        <div className="hr-leave-request"> 

                            <div className="leave-request-image-container"> <img src={pfp} alt="Profile Picture"/> </div>

                            <div className="leave-request-content-container">
                                <div className="leave-request-primary-info"> 
                                    <p className="request-name"> John Johnson </p>
                                </div>
                                <div className="leave-request-secondary-info">
                                    <p className="request-type"> Annual leave </p>
                                    <p className="request-dates"> 19 May - 28 May </p>
                                    <p className="request-employee-type"> Line Manager </p>
                                </div>

                            </div>

                            <div className="leave-request-buttons-container">
                                <button className="leave-button"> <Check/> </button>
                                <button className="leave-button"> <X/> </button>
                            </div>

                        </div>

                        <div className="hr-leave-request"> 

                            <div className="leave-request-image-container"> <img src={pfp} alt="Profile Picture"/> </div>

                            <div className="leave-request-content-container">
                                <div className="leave-request-primary-info"> 
                                    <p className="request-name"> John Johnson </p>
                                </div>
                                <div className="leave-request-secondary-info">
                                    <p className="request-type"> Annual leave </p>
                                    <p className="request-dates"> 19 May - 28 May </p>
                                    <p className="request-employee-type"> Line Manager </p>
                                </div>

                            </div>

                            <div className="leave-request-buttons-container">
                                <button className="leave-button"> <Check/> </button>
                                <button className="leave-button"> <X/> </button>
                            </div>

                        </div>

                    </div>
                </div> 

                <div  className="hr-section w-15/32" id="hr-announcements"> {/* Create/View announcements */}
                    <h2 className="hr-section-title"> Create announcements </h2>
                    <hr className="hr-line"/>
                    <form onSubmit={createAnnoucement} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="transition-all duration-300 ease-in-out p-2 pb-0 gap-2 flex flex-col items-center justify-top h-full">
                        <input placeholder='Title' name="title" onChange={checkEmpty} className={`bg-[#1a1a1a] rounded-[12px] p-2 w-full h-3/16 border border-[#303030] focus:outline-none focus:border-[#ff0000] ${hovered ? "focus:!border-[#d7ff00]":"focus:!border-[#303030]"} ${hovered && showTitleError ? "!border-red-500 focus:!border-red-400 focus:!ring-red-400" : ""}`}></input>
                        <textarea placeholder='Content' name="content" onChange={checkEmpty} className={`bg-[#1a1a1a] rounded-[12px] w-full resize-none h-9/16 p-2 border border-[#303030] focus:outline-none focus:ring-none ${hovered ? "focus:!border-[#d7ff00]":"focus:!border-[#303030]"} ${hovered && showContentError ? "!border-red-500 focus:!border-red-400 focus:!ring-red-400" : ""}`}></textarea>
                        <p className={`text-red-500 transition-all duration-300 ease-in-out ${hovered && (showTitleError || showContentError) ? "max-h-10 opacity-100 translate-y-0":"max-h-0 opacity-0 -translate-y-1"}`}> Please complete all fields. </p>
                        <div type="submit" className="h-1/4 w-full flex flex-col items-center justify-center"><button className="announcement-button"> Publish announcement </button> </div>
                    </form>
                </div>
    
                <div  className="hr-section w-15/32"> {/* Publish policy documents */}
                    <h2 className="hr-section-title"> Publish policy documents </h2>
                    <hr className="hr-line"/>
                </div>

                <div  className="hr-section w-15/32"> {/* upload confidential documents */}
                    <h2 className="hr-section-title"> Upload confidential documents </h2>
                    <hr className="hr-line"/>
                </div>    
            </div>
        </div>
    )
}