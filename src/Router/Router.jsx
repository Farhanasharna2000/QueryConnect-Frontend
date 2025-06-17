import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Components/Home/Home';
import Login from '../pages/Login/login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';
import MyProfile from '../pages/Dashboard/MyProfile';
import AddQuestion from '../pages/Dashboard/AddQuestion ';
import MyQuestions from '../pages/Dashboard/MyQuestions';
import AllQuestions from '../pages/AllQuestions/AllQuestions';
import QuestionDetails from '../pages/QuestionDetails/QuestionDetails';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
         <Route path='/dashboard' element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }>
          <Route path='profile' element={<MyProfile />} />
          <Route path='add-question' element={<AddQuestion />} />
          <Route path='my-questions' element={<MyQuestions />} />
        </Route>
        <Route path='/all-questions' element={<AllQuestions />} />
        <Route path='/question/:id' element={<QuestionDetails />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
