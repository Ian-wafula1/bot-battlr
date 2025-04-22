import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function BotCard({ bot, updateFunc, closeFunc, deleteFunc }) {
	const { name, avatar_url: avatar, bot_class: botClass, health, damage, armor, catchphrase,id } = bot;
	const location = useLocation();
	const endpoint = location.pathname === '/collection' ? 'bots' : 'enlisted';
	function enlistBot() {
		try {
			axios.delete(`http://localhost:8001/${endpoint}/${bot.id}`);
			axios.post(`http://localhost:8001/${endpoint == 'bots' ? 'enlisted' : 'bots'}`, bot);
		} catch (error) {
			console.log(error);
		} finally {
			updateFunc();
		}
	}

	return (
		<>
			<div className="back-button" onClick={() => closeFunc(id)}></div>
			<div className="delete" onClick={() => deleteFunc(id)}></div>
			<h1 className="name">{name}</h1>
			<img src={avatar} alt="Bot avatar" />
			<div className="stats">
				<p>Health: {health}</p>
				<p>Damage: {damage}</p>
				<p>Armour: {armor}</p>
				<p>Class: {botClass}</p>
			</div>
			<p>Catchphrase: <span>{catchphrase}</span></p>
			<button onClick={enlistBot}>{location.pathname === '/collection' ? 'Enlist' : 'Remove'} Bot</button>
		</>
	);
}
