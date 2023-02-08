import './App.css';
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from '../src/authContext/AuthContext'
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Login from './components/Login/Login.js'
import Register from './components/Register/Register.js'
import Details from './components/Details/Details.js'
import Create from './components/Create/Create.js'
import Edit from './components/Edit/Edit.js'
import MyBooksPage from './components/MyBooksPage/MyBooksPage.js'
import Logout from './components/Logout/Logout';

function App() {
  const [user, setUser] = useLocalStorage('user', {
    _id: '',
    email: '',
    accessToken: '',
  })

  const onLoginOrRegister = (authData) => {
    setUser(authData)
  }

  const logoutHandler = () => {
    setUser({
      _id: '',
      email: '',
      accessToken: '',
    })
  }
  return (
    <AuthContext.Provider value={{ onLoginOrRegister, logoutHandler }}>

      <div id="root">
        <Header email={user.email} />
        <main id="site-content">

          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/details/:id' element={<Details user={user} />} />
            <Route path='/create' element={<Create user={user} />} />
            <Route path='/edit/:id' element={<Edit user={user} />} />
            <Route path='/my-books-page' element={<MyBooksPage user={user} />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>

        </main>

        <footer id="site-footer">
          <p>@OnlineBooksLibrary</p>
        </footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;