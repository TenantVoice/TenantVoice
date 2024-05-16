import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import FlyoutNav from './components/FlyoutNav';
import SlideInAuth from './pages/NewSignUp';
import NewLogin from './pages/NewLogin';


export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
    {/* // changed this from SiteHeadingAndNav to FlyOut  */}

    <main>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Landing />} />
        {/* // changed to NewLogin vv */}
        <Route path='/login' element={<NewLogin />} />
        {/* vv changed from SignUpPage to SlideinAuth vv */}
        <Route path='/sign-up' element={<SlideInAuth />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </>;
}
