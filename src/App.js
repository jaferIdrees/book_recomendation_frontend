import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login'
import BookSearch from './pages/BookSearch';
import MyBooks from './pages/MyBooks';
import BookDetails from './pages/BookDetails';

function App() {
	return (
    <Router>
      <Routes>
        <Route path='/' element={<BookSearch />} />
        <Route path='/signup' element= {<Registration />}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/books/:id' element={<BookDetails />}/>
        <Route path='/users/:id' element={<MyBooks />}/>
      </Routes>
    </Router>
	);
}

export default App;
