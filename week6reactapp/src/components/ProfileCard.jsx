function ProfileCard({ name, role, isOnline, skills }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p> {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
            <p className="role">{role}</p>
            <p>Skills: {skills.join(", ")}</p>
        </div>
    )
}

export default ProfileCard 