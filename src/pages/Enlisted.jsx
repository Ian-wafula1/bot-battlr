import SortBar from '../components/SortBar';
import useFetch from '../utils/useFetch';
import Filter from '../components/Filter';
import { useState } from 'react';
import sortFilterFunc from '../utils/sortFilterFunc';
import BotCard from '../components/BotCard';
import Loader from '../components/Loader';
import axios from 'axios';
import { API_URL } from '../constants/utility';

export default function Enlisted() {
	const { data: bots, loading, error, forceUpdate } = useFetch(`${API_URL}/api/enlisted`);
	const [sortValue, setSortValue] = useState('name');
	const [filterValue, setFilterValue] = useState('All');
	const [sidebarBot, setSidebarBot] = useState(null);
	const [width, setWidth] = useState('45rem');

	if (loading) {
		return <Loader />;
	}
	if (error) {
		return <div className="error">Fetch error!</div>;
	}
	function updateFunc() {
		setSidebarBot(null);
		forceUpdate();
	}
	function closeFunc() {
		setSidebarBot(null);
		setWidth('0');
	}
	function setSidebarBotFunc() {
		setSidebarBot(this);
		setWidth('45rem');
	}
	function deleteFunc(id) {
		axios.delete(`${API_URL}/api/bots/${id}`);
		forceUpdate();
		setSidebarBot(null);
	}
	return (
		<main>
			<h1>Enlisted</h1>
			<div className="utilities">
				<SortBar sortValue={sortValue} setSortValue={setSortValue} />
				<Filter filterValue={filterValue} setFilterValue={setFilterValue} />
			</div>
			<div className="bots-container">
				<div className="bots">{sortFilterFunc(bots, sortValue, filterValue, setSidebarBotFunc)}</div>
				<aside style={width === '0' ? { width: width } : null}>{!sidebarBot ? null : <BotCard bot={sidebarBot} updateFunc={updateFunc} closeFunc={closeFunc} deleteFunc={deleteFunc} />}</aside>
			</div>
		</main>
	);
}
