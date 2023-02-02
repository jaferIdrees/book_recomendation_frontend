import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login'

function App() {
	return (
    <Router>
      <Routes>
        <Route path='/' element=<p>Main Page</p> />
        <Route path='/signup' element= {<Registration />}/>
        <Route path='/login' element= {<Login />}/>
      </Routes>
    </Router>
	);
}

export default App;
