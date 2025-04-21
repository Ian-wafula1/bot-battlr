import useFetch from "../hooks/useFetch"

export default function BotCard({id, location}) {
    const {data: bot, loading, error} = useFetch(`https://localhost:8001/${location}/${id}`)
    const {name, avatar_url: avatar, bot_class: botClass, health, damage, armor, catchphrase} = bot
    if (loading) {
        return <div>Loading bot...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    return (
        <div className="card">
            <div className="back-button"></div>
            <div className="close-button"></div>
            <h1 className="name">{name}</h1>
            <img src={avatar} alt="Bot avatar" />
            <div className="stats">
                <p>Health: {health}</p>
                <p>Damage: {damage}</p>
                <p>Armour: {armor}</p>
                <p>Class: {botClass}</p>
            </div>
            <p>Catchphrase: {catchphrase}</p>
            <button>{location === 'collection'? 'Add': 'Remove'}</button>
        </div>
    )
}