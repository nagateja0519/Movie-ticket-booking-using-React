import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home/home'
import Details from './pages/home/details'
import Book from './pages/home/book'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='movie/:id' element={<Details />}></Route>
          <Route path='movie/:id/movie/book/:id' element={<Book />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
