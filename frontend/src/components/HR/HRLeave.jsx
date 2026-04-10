import {Check, X, CircleUser, ArrowLeft} from 'lucide-react';
import { Link } from 'react-router-dom';
import LeaveRequest from './LeaveRequest';
import pfp from '../../assets/pfp images/pfp3.jpg';

export default function HRLeave() {
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

                    <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="pending"/>
                    <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="pending"/>
                    <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="pending"/>
                    <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="pending"/>
                    <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="pending"/>
                    <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="pending"/>
                    <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="pending"/>
                    <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="pending"/>


                </div>
            </div>

            <div className="flex flex-row items-center justify-between w-9/10 h-1/3"> {/* Approved and denied leave requests */}

                    <div  className="hr-section w-39/80 "> {/* View Approved leave requests */}
                    <h2 className="hr-section-title"> Approved leave requests </h2>
                    <hr className="hr-line"/>
                    <div className="leave-requests-container">

                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="approved"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="approved"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="approved"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="approved"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="approved"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="approved"/>


                    </div>
                </div>

                <div  className="hr-section w-39/80 "> {/* View Denied leave requests */}
                    <h2 className="hr-section-title"> Denied leave requests </h2>
                    <hr className="hr-line"/>
                    <div className="leave-requests-container">

                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="denied"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="denied"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="denied"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="denied"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="denied"/>
                        <LeaveRequest name="John" reason="going holiday" leaveType="Holiday" startDate="19 May" endDate="28 May" employeeType="Admin" status="denied"/>


                    </div>
                </div>
            </div>
            
        </div>

    )
}