import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Posts';
import Landing from './pages/Landing';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import FlyoutNav from './components/FlyoutNav';
import SlideInAuth from './pages/NewSignUp';
import NewLogin from './pages/NewLogin';
import Dashboard from './pages/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';
import PostPage from './pages/Post';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <ChakraProvider>
      <main>
        <Routes>
          <Route path='/posts' element={<Home />} />
          <Route path='/posts/:id' element={<PostPage />} />
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<NewLogin />} />
          <Route path='/sign-up' element={<SlideInAuth />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id/dashboard' element={<Dashboard />} />
          <Route path='/users/:id' element={<UserPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </ChakraProvider>
  );
}
