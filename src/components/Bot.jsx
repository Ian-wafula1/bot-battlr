export default function Bot({index, bot, setSidebarBot}) {
    const {name, avatar_url: avatar, bot_class: botClass, health, damage, armor} = bot

    return (
        <div onClick={() => setSidebarBot(bot)}>
            <p>{index}</p>
            <img src={avatar} alt="Bot avatar" />
            <p>{name}</p>
            <p>Class: {botClass}</p>
            <div><div className="health"></div>{health}</div>
            <div><div className="damage"></div>{damage}</div>
            <div><div className="armor"></div>{armor}</div>
        </div>
    )
}