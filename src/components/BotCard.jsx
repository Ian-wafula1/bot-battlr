import { useLocation } from 'react-router-dom';

export default function BotCard({ bot }) {
    console.log('reached')
	const { name, avatar_url: avatar, bot_class: botClass, health, damage, armor, catchphrase } = bot;
    const location = useLocation()
	return (
		<div className="card">
			<div className="back-button"></div>
			<h1 className="name">{name}</h1>
			<img src={avatar} alt="Bot avatar" />
			<div className="stats">
				<p>Health: {health}</p>
				<p>Damage: {damage}</p>
				<p>Armour: {armor}</p>
				<p>Class: {botClass}</p>
			</div>
			<p>Catchphrase: {catchphrase}</p>
			<button>{location.pathname === '/collection' ? 'Enlist' : 'Remove'} Bot</button>
		</div>
	);
}
