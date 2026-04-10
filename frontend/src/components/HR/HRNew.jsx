import { CalendarDays , Megaphone, ShieldCheck, Ticket } from "lucide-react";
import HRActionCard from "./HRActionCard";

export default function HRNewDisplay() {
    const HR_SECTIONS =[
        {
            to: "leave",
            title: "Review Leave Requests",
            description: "View and manage employee leave requests.",
            buttonLabel: "View Requests",
            icon: CalendarDays
        },

        {
            to: "announcements",
            title: "Announcements",
            description: "Post announcements to staff.",
            buttonLabel: "View Announcements",
            icon: Megaphone
        },

        {
            to: "policy",
            title: "Policies",
            description: "Create and update policy documents.",
            buttonLabel: "View Policies",
            icon: ShieldCheck
        }
    ]

    return(
        <div className="programme-page">
            <header className="programme-page-header">
                <h1 className="programme-page-title">HR Management</h1>
                <p className="programme-page-subtitle"> Manage leave requests, Create announcements, and modify company policy. </p>
            </header>

            <div className="programme-grid">
                {HR_SECTIONS.map((section) => (
                    <HRActionCard
                        key = {section.to}
                        title = {section.title}
                        description = {section.description}
                        to = {section.to}
                        icon = {section.icon}
                        buttonLabel = {section.buttonLabel}
                    />
                ))
                }

            </div>

        </div>
    )
}