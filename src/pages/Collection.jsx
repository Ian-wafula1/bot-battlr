import SortBar from '../components/SortBar';
import useFetch from '../utils/useFetch';
import Filter from '../components/Filter';
import { useState } from 'react';
import sortFilterFunc from '../utils/sortFilterFunc';
import BotCard from '../components/BotCard';
import Loader from '../components/Loader';
import axios from 'axios';

export default function Collection() {
	const { data: bots, loading, error, forceUpdate } = useFetch('http://localhost:8001/bots');
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
		axios.delete(`http://localhost:8001/bots/${id}`);
		forceUpdate();
		setSidebarBot(null);
	}
	return (
		<main>
			<h1>Bot Collection</h1>
			<div className="utilities">
				<SortBar sortValue={sortValue} setSortValue={setSortValue} />
				<Filter filterValue={filterValue} setFilterValue={setFilterValue} />
			</div>
			<div className="bots-container">
				<div className="bots">{sortFilterFunc(bots, sortValue, filterValue, setSidebarBotFunc)}</div>
				{/* {!sidebarBot ? (
					<aside></aside>
				) : (
					<aside style={{ width: width }}>
						
					</aside>
				)} */}
				<aside style={(width=== '0')?{width: width}: null}>
					{!sidebarBot ? null :<BotCard bot={sidebarBot} updateFunc={updateFunc} closeFunc={closeFunc} deleteFunc={deleteFunc} /> }
				</aside>
			</div>
		</main>
	);
}
