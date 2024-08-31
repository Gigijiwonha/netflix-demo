import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/Homepage/Homepage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

// Home /
// Movies (Search Bar) /movies/q?=
// Detail Page /movies/:id
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path='movies'>
            <Route index element={<MoviePage/>}/>
            <Route path=':id' element={<MovieDetailPage/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
