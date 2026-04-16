import {ArrowLeft} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LeaveRequest from './LeaveRequest';
import Title from '../Title'

export default function HRLeave() {
    const approveRequest = (id) => {
        let request = pending.find(request => request.id === id);
        request.status = "approved";
        setApproved([pending.find(request => request.id === id), ...approved]);
        setPending(pending.filter(request => request.id !== id));
        console.log("Approved request with id: " + id);
    }
    const denyRequest = (id) => {
        let request = pending.find(request => request.id === id);
        request.status = "denied";
        setDenied([pending.find(request => request.id === id), ...denied]);
        setPending(pending.filter(request => request.id !== id));
        console.log("Denied request with id: " + id);
    }

    const [pending, setPending] = useState([
        { id: 1, name: 'John Smith', reason: 'Going on holiday', leaveType: 'Holiday', startDate: '19 May 2026', endDate: '28 May 2026', employeeType: 'Admin', status: 'pending' },
        { id: 2, name: 'Sarah Johnson', reason: 'Medical appointment', leaveType: 'Sick Leave', startDate: '20 May 2026', endDate: '20 May 2026', employeeType: 'Employee', status: 'pending' },
        { id: 3, name: 'Michael Chen', reason: 'Family emergency', leaveType: 'Compassionate Leave', startDate: '21 May 2026', endDate: '23 May 2026', employeeType: 'Manager', status: 'pending' },
        { id: 4, name: 'Emma Wilson', reason: 'Annual leave', leaveType: 'Holiday', startDate: '12 June 2026', endDate: '19 June 2026', employeeType: 'Employee', status: 'pending' },
        { id: 5, name: 'David Brown', reason: 'Training course', leaveType: 'Professional Development', startDate: '02 May 2026', endDate: '05 May 2026', employeeType: 'Senior Admin', status: 'pending' },
    ]);

    const [approved, setApproved] = useState([
        { id:6, name: 'Lisa Anderson', reason: 'Going on holiday', leaveType: 'Holiday', startDate: '10 March 2026', endDate: '17 March 2026', employeeType: 'Employee', status: 'approved' },
        { id:7, name: 'Robert Taylor', reason: 'Medical appointment', leaveType: 'Sick Leave', startDate: '15 February 2026', endDate: '15 February 2026', employeeType: 'Manager', status: 'approved' },
        { id:8, name: 'Jennifer Martinez', reason: 'Maternity leave', leaveType: 'Maternity', startDate: '01 December 2025', endDate: '31 January 2026', employeeType: 'Employee', status: 'approved' },
        { id:9, name: 'Christopher Lee', reason: 'Vacation', leaveType: 'Holiday', startDate: '05 April 2025', endDate: '12 April 2025', employeeType: 'Admin', status: 'approved' },
        { id:10, name: 'Amanda Garcia', reason: 'Personal leave', leaveType: 'Personal', startDate: '18 March 2026', endDate: '18 March 2026', employeeType: 'Employee', status: 'approved' },
        { id:11, name: 'Thomas Wilson', reason: 'Sabbatical', leaveType: 'Sabbatical', startDate: '10 August 2025', endDate: '31 August 2025', employeeType: 'Senior Admin', status: 'approved' },
        { id:12, name: 'Rebecca Moore', reason: 'Conference attendance', leaveType: 'Professional Development', startDate: '15 June 2025', endDate: '17 June 2025', employeeType: 'Manager', status: 'approved' },
        { id:13, name: 'James Taylor', reason: 'Wedding', leaveType: 'Personal', startDate: '12 September 2025', endDate: '14 September 2025', employeeType: 'Employee', status: 'approved' },
    ]);

    const [denied, setDenied] = useState([
        { id:14, name: 'Kevin White', reason: 'Holiday', leaveType: 'Holiday', startDate: '19 March 2026', endDate: '26 March 2026', employeeType: 'Employee', status: 'denied' },
        { id:15, name: 'Patricia Harris', reason: 'Going on holiday', leaveType: 'Holiday', startDate: '20 January 2026', endDate: '27 January 2026', employeeType: 'Admin', status: 'denied' },
        { id:16, name: 'Daniel Clark', reason: 'Annual leave', leaveType: 'Holiday', startDate: '21 November 2025', endDate: '25 November 2025', employeeType: 'Employee', status: 'denied' },
        { id:17, name: 'Jessica Rodriguez', reason: 'Vacation', leaveType: 'Holiday', startDate: '22 July 2025', endDate: '29 July 2025', employeeType: 'Senior Admin', status: 'denied' },
        { id:18, name: 'Steven Robinson', reason: 'Personal leave', leaveType: 'Personal', startDate: '23 May 2025', endDate: '24 May 2025', employeeType: 'Manager', status: 'denied' },
        { id:19, name: 'Maria Garcia', reason: 'Extended holiday', leaveType: 'Holiday', startDate: '01 April 2025', endDate: '15 April 2025', employeeType: 'Employee', status: 'denied' },
        { id:20, name: 'William Brown', reason: 'Sabbatical request', leaveType: 'Sabbatical', startDate: '10 March 2025', endDate: '30 June 2025', employeeType: 'Admin', status: 'denied' },
        { id:21,  name: 'Victoria Lee', reason: 'Unpaid leave', leaveType: 'Personal', startDate: '05 February 2025', endDate: '12 February 2025', employeeType: 'Employee', status: 'denied' },
    ]);

    return (
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
            <div>
                <Title badge="Time Off" title="Review Leave Requests" subtitle="Approve or deny pending leave requests." />

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

            <div className="hr-section w-full"> {/* Review leave requests */}
                <h2 className="hr-section-title"> Pending leave requests </h2>
                <hr className="hr-line"/>
                <div className="leave-requests-container">

                    {pending.map((request) => (
                        <LeaveRequest
                            key={request.id}
                            id={request.id}
                            name={request.name}
                            reason={request.reason}
                            leaveType={request.leaveType}
                            startDate={request.startDate}
                            endDate={request.endDate}
                            employeeType={request.employeeType}
                            status={request.status}
                            onApprove={approveRequest}
                            onDeny={denyRequest}
                        />
                    ))}

                    {pending.length === 0 && <p className="self-center text-xl text-[var(--fdm-text-muted)]">No pending leave requests.</p>}

                </div>
            </div>

            <div className="flex flex-col items-stretch gap-6"> {/* Approved and denied leave requests (stacked) */}

                <div className="hr-section flex-1 w-full"> {/* View Approved leave requests (full width) */}
                    <h2 className="hr-section-title"> Approved leave requests </h2>
                    <hr className="hr-line"/>
                    <div className="leave-requests-container">

                        {approved.map((request) => (
                            <LeaveRequest
                                key={request.id}
                                id={request.id}
                                name={request.name}
                                reason={request.reason}
                                leaveType={request.leaveType}
                                startDate={request.startDate}
                                endDate={request.endDate}
                                employeeType={request.employeeType}
                                status={request.status}
                                onApprove={approveRequest}
                                onDeny={denyRequest}
                            />
                        ))}

                    </div>
                </div>

                <div className="hr-section flex-1 w-full"> {/* View Denied leave requests (full width) */}
                    <h2 className="hr-section-title"> Denied leave requests </h2>
                    <hr className="hr-line"/>
                    <div className="leave-requests-container">

                        {denied.map((request) => (
                            <LeaveRequest
                                key={request.id}
                                id={request.id}
                                name={request.name}
                                reason={request.reason}
                                leaveType={request.leaveType}
                                startDate={request.startDate}
                                endDate={request.endDate}
                                employeeType={request.employeeType}
                                status={request.status}
                                onApprove={approveRequest}
                                onDeny={denyRequest}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}