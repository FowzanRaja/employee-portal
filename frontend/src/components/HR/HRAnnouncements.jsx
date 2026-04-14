import { useState } from 'react'
import { Link } from 'react-router-dom';
import { ArrowLeft} from 'lucide-react';
import Title from '../Title'

export default function HRAnnouncements() {
    const [firstSubmit, setFirstSubmit] = useState(true);
    const [showTitleError, setShowTitleError] = useState(false);
    const [showContentError, setShowContentError] = useState(false);
    const [hovered, setHovered] = useState(false);

    const [complete, setComplete] = useState(false);

    const createAnnouncement = (e) => {
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
            setComplete(true);
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
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
            <div>
                <Title badge="FDM Staff Portal" title="Announcements" subtitle="Publish announcements to staff." />

                <div className="mt-4">
                    <Link
                        to="/hr"
                        className="fdm-nav-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', height: 'fit-content', justifyContent: 'center' }}
                    >
                        <ArrowLeft size={18} />
                        Back to HR Dashboard
                    </Link>
                </div>
            </div>

            <div className="announcements-section-container">

                {!complete && 
                    <div  className="hr-section !h-7/10" id="hr-announcements"> {/* Create/View announcements */}
                        <h2 className="hr-section-title"> Create announcements </h2>
                        <hr className="hr-line"/>
                        <form onSubmit={createAnnouncement} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="transition-all duration-300 ease-in-out p-2 pb-0 gap-2 flex flex-col items-center justify-top h-full">
                            <input placeholder='Title' name="title" onChange={checkEmpty} className={`bg-[#1a1a1a] rounded-[12px] p-2 w-full h-3/16 border border-[#303030] focus:outline-none focus:border-[#ff0000] ${hovered ? "focus:!border-[#d7ff00]":"focus:!border-[#303030]"} ${hovered && showTitleError ? "!border-red-500 focus:!border-red-400 focus:!ring-red-400" : ""}`}></input>
                            <textarea placeholder='Content' name="content" onChange={checkEmpty} className={`bg-[#1a1a1a] rounded-[12px] w-full resize-none h-9/16 p-2 border border-[#303030] focus:outline-none focus:ring-none ${hovered ? "focus:!border-[#d7ff00]":"focus:!border-[#303030]"} ${hovered && showContentError ? "!border-red-500 focus:!border-red-400 focus:!ring-red-400" : ""}`}></textarea>
                            <p className={`text-red-500 transition-all duration-300 ease-in-out ${hovered && (showTitleError || showContentError) ? "max-h-10 opacity-100 translate-y-0":"max-h-0 opacity-0 -translate-y-1"}`}> Please complete all fields. </p>
                            <div type="submit" className="h-1/4 w-full flex flex-col items-center justify-center"><button className="announcement-button"> Publish announcement </button> </div>
                        </form>
                    </div>
                }


                {complete &&
                    <div className='hr-section !h-7/10 !flex !flex-col !justify-center !items-center !gap-10' id="hr-announcements">
                        <h2 className="hr-section-title"> Announcement published! </h2>
                        <button className="announcement-button" onClick={() => setComplete(false)}> Create another announcement </button>
                    </div>
                }
            </div>





    </section>
    )
}