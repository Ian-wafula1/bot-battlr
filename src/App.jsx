import { Navigate, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
	
	return (
		<>
			<NavBar />
			{useLocation().pathname === '/'? <Navigate to='/collection' />: null }
			<Outlet />
		</>
	);
}

export default App;
