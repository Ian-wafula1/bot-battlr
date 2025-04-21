import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import './css/App.css';
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			{useLocation().pathname === '/' ? <Navigate to="/collection" /> : null}
			<NavBar />
			<Outlet />
		</>
	);
}

export default App;
