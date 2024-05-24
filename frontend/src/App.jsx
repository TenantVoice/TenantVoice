import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Posts/Posts';
import Landing from './pages/Landingpage';
import NotFoundPage from './pages/NotFoundPage';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users/Users';
import UserPage from './pages/Users/User';
import FlyoutNav from './components/FlyoutNav';
import SlideInAuth from './pages/Signup';
import NewLogin from './pages/login';
import Dashboard from './pages/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';
import PostPage from './pages/Posts/Post';
import DataVisuals from './pages/DataVisualization';


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
          <Route path='/users/:id/profile' element={<Dashboard />} />
          <Route path='/users/:id' element={<UserPage />} />
          <Route path='*' element={<NotFoundPage />} />
          {/* //adding data route */}
          <Route path='/Data' element={<DataVisuals />} />
        </Routes>
      </main>
    </ChakraProvider>
  );
}
