import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login'
import BookSearch from './pages/BookSearch';

function App() {
	return (
    <Router>
      <Routes>
        <Route path='/' element={<BookSearch />} />
        <Route path='/signup' element= {<Registration />}/>
        <Route path='/login' element= {<Login />}/>
      </Routes>
    </Router>
	);
}

export default App;
