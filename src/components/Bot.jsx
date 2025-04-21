export default function Bot({index, bot}) {
    const {name, avatar_url: avatar, bot_class: botClass, health, damage, armor} = bot
    return (
        <div>
            <p>{index}</p>
            <img src={avatar} alt="Bot avatar" />
            <p>{name}</p>
            <p>{botClass}</p>
            <div><div className="health"></div>{health}</div>
            <div><div className="damage"></div>{damage}</div>
            <div><div className="armor"></div>{armor}</div>
        </div>
    )
}