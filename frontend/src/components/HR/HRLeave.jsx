import {ArrowLeft} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LeaveRequest from './LeaveRequest';
import SampritiPic from '../../assets/pfp images/Sampriti.jpeg'
import JoelPic from '../../assets/pfp images/Joel.jpeg'
import FowzanPic from '../../assets/pfp images/Fowzan.jpeg'
import AhmadPic from '../../assets/pfp images/Ahmad.jpeg'
import SuhanPic from '../../assets/pfp images/Suhan.png'
import AlexanderPic from '../../assets/pfp images/Alexander.jpeg'
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
    // Normalise leave types so only allowed types are used in the UI
    const normalizeLeaveType = (t) => {
        const map = {
            'holiday': 'Annual Leave',
            'annual': 'Annual Leave',
            'annual leave': 'Annual Leave',
            'sick': 'Sick Leave',
            'sick leave': 'Sick Leave',
            'maternity': 'Maternity Leave',
            'maternity leave': 'Maternity Leave',
            'compassionate': 'Compassionate Leave',
            'compassionate leave': 'Compassionate Leave',
            'unpaid': 'Unpaid Leave',
            'unpaid leave': 'Unpaid Leave',
            'religious': 'Religious Observance',
            'religious observance': 'Religious Observance'
        };
        if (!t) return 'Annual Leave';
        const key = String(t).toLowerCase();
        // exact or inclusive match
        for (const k in map) {
            if (key === k || key.includes(k)) return map[k];
        }
        // default fallback
        return 'Annual Leave';
    }

    const initialPending = [
        { id: 1, name: 'John Smith', reason: 'Going on holiday', leaveType: 'Annual Leave', startDate: '19 May 2026', endDate: '28 May 2026', employeeType: 'Admin', status: 'pending' },
        { id: 2, name: 'Sarah Johnson', reason: 'Medical appointment', leaveType: 'Sick Leave', startDate: '20 May 2026', endDate: '20 May 2026', employeeType: 'Employee', status: 'pending' },
        { id: 3, name: 'Michael Chen', reason: 'Family emergency', leaveType: 'Compassionate Leave', startDate: '21 May 2026', endDate: '23 May 2026', employeeType: 'Manager', status: 'pending' },
        { id: 4, name: 'Emma Wilson', reason: 'Annual leave', leaveType: 'Annual Leave', startDate: '12 June 2026', endDate: '19 June 2026', employeeType: 'Employee', status: 'pending' },
        { id: 5, name: 'David Brown', reason: 'Training course', leaveType: 'Unpaid Leave', startDate: '02 May 2026', endDate: '05 May 2026', employeeType: 'Senior Admin', status: 'pending' },
    ];

    const initialApproved = [
        { id:6, name: 'Lisa Anderson', reason: 'Going on holiday', leaveType: 'Annual Leave', startDate: '10 March 2026', endDate: '17 March 2026', employeeType: 'Employee', status: 'approved' },
        { id:7, name: 'Robert Taylor', reason: 'Medical appointment', leaveType: 'Sick Leave', startDate: '15 February 2026', endDate: '15 February 2026', employeeType: 'Manager', status: 'approved' },
        { id:8, name: 'Jennifer Martinez', reason: 'Maternity leave', leaveType: 'Annual Leave', startDate: '01 December 2025', endDate: '31 January 2026', employeeType: 'Employee', status: 'approved' },
        { id:9, name: 'Christopher Lee', reason: 'Vacation', leaveType: 'Annual Leave', startDate: '05 April 2025', endDate: '12 April 2025', employeeType: 'Admin', status: 'approved' },
        { id:10, name: 'Amanda Garcia', reason: 'Personal leave', leaveType: 'Unpaid Leave', startDate: '18 March 2026', endDate: '18 March 2026', employeeType: 'Employee', status: 'approved' },
        { id:11, name: 'Thomas Wilson', reason: 'Sabbatical', leaveType: 'Religious Observance', startDate: '10 August 2025', endDate: '31 August 2025', employeeType: 'Senior Admin', status: 'approved' },
        { id:12, name: 'Rebecca Moore', reason: 'Conference attendance', leaveType: 'Unpaid Leave', startDate: '15 June 2025', endDate: '17 June 2025', employeeType: 'Manager', status: 'approved' },
        { id:13, name: 'James Taylor', reason: 'Wedding', leaveType: 'Annual Leave', startDate: '12 September 2025', endDate: '14 September 2025', employeeType: 'Employee', status: 'approved' },
    ];

    const initialDenied = [
        { id:14, name: 'Kevin White', reason: 'Holiday', leaveType: 'Annual Leave', startDate: '19 March 2026', endDate: '26 March 2026', employeeType: 'Employee', status: 'denied' },
        { id:15, name: 'Patricia Harris', reason: 'Going on holiday', leaveType: 'Annual Leave', startDate: '20 January 2026', endDate: '27 January 2026', employeeType: 'Admin', status: 'denied' },
        { id:16, name: 'Daniel Clark', reason: 'Annual leave', leaveType: 'Annual Leave', startDate: '21 November 2025', endDate: '25 November 2025', employeeType: 'Employee', status: 'denied' },
        { id:17, name: 'Jessica Rodriguez', reason: 'Vacation', leaveType: 'Unpaid Leave', startDate: '22 July 2025', endDate: '29 July 2025', employeeType: 'Senior Admin', status: 'denied' },
        { id:18, name: 'Steven Robinson', reason: 'Personal leave', leaveType: 'Sick Leave', startDate: '23 May 2025', endDate: '24 May 2025', employeeType: 'Manager', status: 'denied' },
        { id:19, name: 'Maria Garcia', reason: 'Extended holiday', leaveType: 'Annual Leave', startDate: '01 April 2025', endDate: '15 April 2025', employeeType: 'Employee', status: 'denied' },
        { id:20, name: 'William Brown', reason: 'Sabbatical request', leaveType: 'Unpaid Leave', startDate: '10 March 2025', endDate: '30 June 2025', employeeType: 'Admin', status: 'denied' },
        { id:21,  name: 'Victoria Lee', reason: 'Unpaid leave', leaveType: 'Unpaid Leave', startDate: '05 February 2025', endDate: '12 February 2025', employeeType: 'Employee', status: 'denied' },
    ];

    const people = [
        { name: 'Sampriti Patro', pic: SampritiPic },
        { name: 'Joel Lima', pic: JoelPic },
        { name: 'Fowzan Raja', pic: FowzanPic },
        { name: 'Ahmad Ahmadzai', pic: AhmadPic },
        { name: 'Suhan Erbil', pic: SuhanPic },
        { name: 'Alexander Michael-Iacovou', pic: AlexanderPic },
    ];

    // Full-sentence reasons per person (keeps descriptions consistent)
    const reasonMap = {
        'Sampriti Patro': 'I will be attending a close family wedding and need time off to travel and support my family.',
        'Joel Lima': 'I have scheduled consultancy visits and need the day to travel between client sites.',
        'Fowzan Raja': 'I will be unavailable due to HR training and internal meetings that span the week.',
        'Ahmad Ahmadzai': 'I need to resolve a critical home IT issue that requires my presence during the working day.',
        'Suhan Erbil': 'I am attending an industry marketing conference and will be out for the day to gather insights.',
        'Alexander Michael-Iacovou': 'I will be attending a series of line-management workshops and one-to-one meetings.',
    };

    // Unique reasons per list so no sentence repeats across pending/approved/denied
    const pendingReasons = [
        'I will be attending a close family wedding and need time off to travel and support my family.',
        'I have a medical appointment that cannot be rescheduled and will need the day off.',
        'There is a family emergency requiring me to be away for several days.',
        'I need to travel to handle an important personal matter and will be out next week.',
        'I will be taking unpaid leave to complete a short professional certification course.',
    ];

    const approvedReasons = [
        'I will be taking annual leave to visit family overseas and will be unavailable during this period.',
        'I have a scheduled hospital appointment and have been advised to rest afterwards.',
        'I am requesting leave from 01 December 2025 to 31 January 2026 to care for personal and family needs.',
        'I will be on annual leave for a short holiday with my partner.',
        'I am requesting unpaid leave to manage a personal matter that requires time off.',
        'I will be attending a leadership workshop as part of my development plan.',
        'I need short unpaid leave to care for a dependent at home.',
        'I will be taking annual leave for my wedding and related arrangements.',
    ];

    const deniedReasons = [
        'Requesting annual leave from 19 March 2026 to 26 March 2026 to attend a family event.',
        'Please approve annual leave from 20 January 2026 to 27 January 2026 for personal travel.',
        'I am requesting annual leave from 21 November 2025 to 25 November 2025 to rest after a busy project.',
        'Can I take unpaid leave from 22 July 2025 to 29 July 2025 to care for a family member?',
        'Requesting sick leave on 23 May 2025 due to an unexpected medical issue.',
        'I am requesting unpaid leave from 01 April 2025 to 15 April 2025 to handle a domestic matter.',
        'Please grant unpaid leave from 10 March 2025 to 30 June 2025 to attend a long-term training course.',
        'Could I have unpaid leave from 05 February 2025 to 12 February 2025 for personal reasons?',
    ];

    // Role assignments: keep Joel as Consultant and Fowzan as HR; assign others consistently
    const roleMap = {
        'Sampriti Patro': 'Programme Manager',
        'Joel Lima': 'Consultant',
        'Fowzan Raja': 'HR',
        'Ahmad Ahmadzai': 'IT',
        'Suhan Erbil': 'Marketer',
        'Alexander Michael-Iacovou': 'Line Manager',
    };

    const rotate = (arr, offset) => {
        const o = ((offset % arr.length) + arr.length) % arr.length;
        return [...arr.slice(o), ...arr.slice(0, o)];
    };

    const assignPeopleWithOrder = (arr, peopleOrder, reasonsArr) => arr.map((r, i) => {
        const person = peopleOrder[i % peopleOrder.length];
        return {
            ...r,
            leaveType: normalizeLeaveType(r.leaveType),
            name: person.name,
            profilePic: person.pic,
            employeeType: roleMap[person.name] || r.employeeType,
            // Use provided unique reason for this list entry, else fall back to per-person map or original
            reason: (reasonsArr && reasonsArr[i]) || reasonMap[person.name] || r.reason,
        };
    });

    // Rotate the people list for each section so positions vary between pending/approved/denied
    const peopleForPending = rotate(people, 1);
    const peopleForApproved = rotate(people, 2);
    const peopleForDenied = rotate(people, 3);

    const [pending, setPending] = useState(assignPeopleWithOrder(initialPending, peopleForPending, pendingReasons));

    const [approved, setApproved] = useState(assignPeopleWithOrder(initialApproved, peopleForApproved, approvedReasons));

    const [denied, setDenied] = useState(assignPeopleWithOrder(initialDenied, peopleForDenied, deniedReasons));

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
                            profilePic={request.profilePic}
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
                                profilePic={request.profilePic}
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
                                profilePic={request.profilePic}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}