import {ArrowLeft} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LeaveRequest from './LeaveRequest';

export default function HRLeave() {
    const [pending, setPending] = useState([
        { name: 'John Smith', reason: 'Going on holiday', leaveType: 'Holiday', startDate: '19 May 2026', endDate: '28 May 2026', employeeType: 'Admin', status: 'pending' },
        { name: 'Sarah Johnson', reason: 'Medical appointment', leaveType: 'Sick Leave', startDate: '20 May 2026', endDate: '20 May 2026', employeeType: 'Employee', status: 'pending' },
        { name: 'Michael Chen', reason: 'Family emergency', leaveType: 'Compassionate Leave', startDate: '21 May 2026', endDate: '23 May 2026', employeeType: 'Manager', status: 'pending' },
        { name: 'Emma Wilson', reason: 'Annual leave', leaveType: 'Holiday', startDate: '12 June 2026', endDate: '19 June 2026', employeeType: 'Employee', status: 'pending' },
        { name: 'David Brown', reason: 'Training course', leaveType: 'Professional Development', startDate: '02 May 2026', endDate: '05 May 2026', employeeType: 'Senior Admin', status: 'pending' },
    ]);

    const [approved, setApproved] = useState([
        { name: 'Lisa Anderson', reason: 'Going on holiday', leaveType: 'Holiday', startDate: '10 March 2026', endDate: '17 March 2026', employeeType: 'Employee', status: 'approved' },
        { name: 'Robert Taylor', reason: 'Medical appointment', leaveType: 'Sick Leave', startDate: '15 February 2026', endDate: '15 February 2026', employeeType: 'Manager', status: 'approved' },
        { name: 'Jennifer Martinez', reason: 'Maternity leave', leaveType: 'Maternity', startDate: '01 December 2025', endDate: '31 January 2026', employeeType: 'Employee', status: 'approved' },
        { name: 'Christopher Lee', reason: 'Vacation', leaveType: 'Holiday', startDate: '05 April 2025', endDate: '12 April 2025', employeeType: 'Admin', status: 'approved' },
        { name: 'Amanda Garcia', reason: 'Personal leave', leaveType: 'Personal', startDate: '18 March 2026', endDate: '18 March 2026', employeeType: 'Employee', status: 'approved' },
        { name: 'Thomas Wilson', reason: 'Sabbatical', leaveType: 'Sabbatical', startDate: '10 August 2025', endDate: '31 August 2025', employeeType: 'Senior Admin', status: 'approved' },
        { name: 'Rebecca Moore', reason: 'Conference attendance', leaveType: 'Professional Development', startDate: '15 June 2025', endDate: '17 June 2025', employeeType: 'Manager', status: 'approved' },
        { name: 'James Taylor', reason: 'Wedding', leaveType: 'Personal', startDate: '12 September 2025', endDate: '14 September 2025', employeeType: 'Employee', status: 'approved' },
    ]);

    const [denied, setDenied] = useState([
        { name: 'Kevin White', reason: 'Holiday', leaveType: 'Holiday', startDate: '19 March 2026', endDate: '26 March 2026', employeeType: 'Employee', status: 'denied' },
        { name: 'Patricia Harris', reason: 'Going on holiday', leaveType: 'Holiday', startDate: '20 January 2026', endDate: '27 January 2026', employeeType: 'Admin', status: 'denied' },
        { name: 'Daniel Clark', reason: 'Annual leave', leaveType: 'Holiday', startDate: '21 November 2025', endDate: '25 November 2025', employeeType: 'Employee', status: 'denied' },
        { name: 'Jessica Rodriguez', reason: 'Vacation', leaveType: 'Holiday', startDate: '22 July 2025', endDate: '29 July 2025', employeeType: 'Senior Admin', status: 'denied' },
        { name: 'Steven Robinson', reason: 'Personal leave', leaveType: 'Personal', startDate: '23 May 2025', endDate: '24 May 2025', employeeType: 'Manager', status: 'denied' },
        { name: 'Maria Garcia', reason: 'Extended holiday', leaveType: 'Holiday', startDate: '01 April 2025', endDate: '15 April 2025', employeeType: 'Employee', status: 'denied' },
        { name: 'William Brown', reason: 'Sabbatical request', leaveType: 'Sabbatical', startDate: '10 March 2025', endDate: '30 June 2025', employeeType: 'Admin', status: 'denied' },
        { name: 'Victoria Lee', reason: 'Unpaid leave', leaveType: 'Personal', startDate: '05 February 2025', endDate: '12 February 2025', employeeType: 'Employee', status: 'denied' },
    ]);

    return(
        <div className="flex flex-col items-center w-full max-h-screen gap-5">
            <div className="flex flex-row items-center justify-between w-9/10">
                <header className="programme-page-header">
                    <h1 className="programme-page-title">Review Leave Requests</h1>
                    <p className="programme-page-subtitle">  Approve or deny pending leave requests. </p>
                </header>
                <Link
                    to="/hr"
                    className="fdm-nav-btn"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', height: 'fit-content', justifyContent: 'center' }}
                >
                    <ArrowLeft size={18} />
                    Back to HR Dashboard
                </Link>
            </div>

            <div  className="hr-section w-9/10 h-1/2"> {/* Review leave requests */}
                <h2 className="hr-section-title"> Pending leave requests </h2>
                <hr className="hr-line"/>
                <div className="leave-requests-container">

                    {pending.map((request, index) => (
                        <LeaveRequest
                            key={index}
                            name={request.name}
                            reason={request.reason}
                            leaveType={request.leaveType}
                            startDate={request.startDate}
                            endDate={request.endDate}
                            employeeType={request.employeeType}
                            status={request.status}
                        />
                    ))}

                </div>
            </div>

            <div className="flex flex-row items-center justify-between w-9/10 h-1/3"> {/* Approved and denied leave requests */}

                    <div  className="hr-section w-39/80 "> {/* View Approved leave requests */}
                    <h2 className="hr-section-title"> Approved leave requests </h2>
                    <hr className="hr-line"/>
                    <div className="leave-requests-container">

                        {approved.map((request, index) => (
                            <LeaveRequest
                                key={index}
                                name={request.name}
                                reason={request.reason}
                                leaveType={request.leaveType}
                                startDate={request.startDate}
                                endDate={request.endDate}
                                employeeType={request.employeeType}
                                status={request.status}
                            />
                        ))}

                    </div>
                </div>

                <div  className="hr-section w-39/80 "> {/* View Denied leave requests */}
                    <h2 className="hr-section-title"> Denied leave requests </h2>
                    <hr className="hr-line"/>
                    <div className="leave-requests-container">

                        {denied.map((request, index) => (
                            <LeaveRequest
                                key={index}
                                name={request.name}
                                reason={request.reason}
                                leaveType={request.leaveType}
                                startDate={request.startDate}
                                endDate={request.endDate}
                                employeeType={request.employeeType}
                                status={request.status}
                            />
                        ))}

                    </div>
                </div>
            </div>
            
        </div>

    )
}