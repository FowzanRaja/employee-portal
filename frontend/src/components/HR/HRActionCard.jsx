import { useNavigate } from 'react-router-dom'

export default function HRActionCard({ title, description, to, icon: Icon, buttonLabel }) {
  const navigate = useNavigate()

  return (
    <article className="programme-card">
      <h2 className="programme-card-title">{title}</h2>
      <p className="programme-card-description">
        {description}
      </p>

      {Icon && (
        <div className="programme-card-icon">
          <Icon size={140} strokeWidth={1.5} />
        </div>
      )}

      <button
        type="button"
        className="programme-card-button"
        onClick={() => navigate(to)}
      >
        {buttonLabel}
      </button>
    </article>
  )
}