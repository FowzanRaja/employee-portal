import {Check, X, CircleUser} from 'lucide-react';

export default function LeaveRequest({id, name, reason, leaveType, startDate, endDate, employeeType, status, onApprove, onDeny}) {
    return(
        <div className="hr-leave-request"> 

            <div className="leave-request-image-container"> <CircleUser className="icon"/> </div>

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
                    <span className="leave-status leave-status-pending"> Pending </span>
                    <button className="leave-button" onClick={() => onApprove(id)}> <Check id="approve"/> </button>
                    <button className="leave-button" onClick={() => onDeny(id)}> <X id="deny"/> </button>
                </div>
            }

            {status == "approved" &&
                <div className="leave-request-buttons-container">
                    <span className="leave-status leave-status-approved"> Approved </span>
                </div>
                }

            {status == "denied" &&
                <div className="leave-request-buttons-container">
                    <span className="leave-status leave-status-rejected"> Denied </span>
                </div>
            }

        </div>
    )
}