import './App.css';
import { Routes, Route } from 'react-router-dom'
import { getUserData } from './api/util'
import Header from './components/Header/Header.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Login from './components/Login/Login.js'
import Register from './components/Register/Register.js'
import Details from './components/Details/Details.js'
import Create from './components/Create/Create.js'
import Edit from './components/Edit/Edit.js'
import MyBooksPage from './components/MyBooksPage/MyBooksPage.js'
import { logout } from './api/user';
import Logout from './components/Logout/Logout';

function App() {
  const user = getUserData()
  return (
    <div id="root">
      <Header user={user} />
      <main id="site-content">

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details' element={<Details />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/my-books-page' element={<MyBooksPage />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>

      </main>

      <footer id="site-footer">
        <p>@OnlineBooksLibrary</p>
      </footer>
    </div>
  );
}

export default App;
