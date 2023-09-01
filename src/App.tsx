import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Album from './pages/Album';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />

      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
