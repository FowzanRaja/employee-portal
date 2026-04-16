import {Check, X, CircleUser} from 'lucide-react';

export default function LeaveRequest({id, name, reason, leaveType, startDate, endDate, employeeType, status, onApprove, onDeny, profilePic}) {
    return(
        <div className="hr-leave-request"> 

            <div className="leave-request-image-container">
                {profilePic ? (
                    <img src={profilePic} alt={`${name} avatar`} className="leave-request-avatar" />
                ) : (
                    <CircleUser className="icon"/>
                )}
            </div>

            <div className="leave-request-content-container">
                <div className="leave-request-primary-info"> 
                    <p className="request-name"> {name} &nbsp; • &nbsp; <span id="reason-text"> {reason} </span></p>
                </div>
                <div className="leave-request-secondary-info">
                    <p className="request-type"> {leaveType} </p>
                    <p className="request-dates"> {startDate} - {endDate} </p>
                    <p className="request-employee-type"> {employeeType} </p>
                </div>

            </div>
            {status == "pending" &&
                <div className="leave-request-buttons-container">
                    <span className='inline-flex items-center gap-2 rounded-full px-4 py-2 mr-2 text-xs font-semibold bg-[rgba(234,179,8,0.06)] text-[var(--fdm-lime)] border border-[rgba(215,255,0,0.06)]'> Pending </span>
                    <button className="leave-button" onClick={() => onApprove(id)}> <Check id="approve"/> </button>
                    <button className="leave-button" onClick={() => onDeny(id)}> <X id="deny"/> </button>
                </div>
            }

            {status == "approved" &&
                <div className="leave-request-buttons-container">
                    <span className='inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold bg-[rgba(34,197,94,0.12)] text-emerald-300 border border-[rgba(34,197,94,0.06)]'> Approved </span>
                </div>
                }

            {status == "denied" &&
                <div className="leave-request-buttons-container">
                    <span className='inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold bg-[rgba(239,68,68,0.06)] text-rose-400 border border-[rgba(239,68,68,0.06)]'> Denied </span>
                </div>
            }

        </div>
    )
}