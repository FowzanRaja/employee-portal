import pfp from '../assets/pfp images/pfp3.jpg'

export default function HRDisplay(){
    return(
        <div className="flex flex-col items-center justify-top p-4 h-screen gap-4"> {/* Whole view wrapper*/}
            <div className="
                rounded-[28px] 
                border border-[color:var(--fdm-border)] 
                bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] 
                p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)]
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
                                <button className="leave-button"> :) </button>
                                <button className="leave-button">:( </button>
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
                                <button className="leave-button"> :) </button>
                                <button className="leave-button">:( </button>
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
                                <button className="leave-button"> :) </button>
                                <button className="leave-button">:( </button>
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
                                <button className="leave-button"> :) </button>
                                <button className="leave-button">:( </button>
                            </div>

                        </div>

                    </div>
                </div> 

                <div  className="hr-section w-15/32"> {/* Create/View announcements */}
                    <h2 className="hr-section-title"> Create announcements </h2>
                    <hr className="hr-line"/>
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