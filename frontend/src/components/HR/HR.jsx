import { CalendarDays , Megaphone, ShieldCheck, Ticket } from "lucide-react";
import TicketTypeCard from '../../components/TicketManagementCard'
import Title from '../Title'

export default function HRDisplay() {
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

    return (
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
            <Title
                badge="FDM Staff Portal"
                title="HR Management"
                subtitle="Manage leave requests, create announcements, and modify company policy."
            />

            <div className="programme-grid">
                {HR_SECTIONS.map((section) => (
                    <TicketTypeCard
                        key={section.to}
                        title={section.title}
                        description={section.description}
                        to={section.to}
                        icon={section.icon}
                        buttonText={section.buttonLabel}
                    />
                ))}
            </div>
        </section>
    )
}