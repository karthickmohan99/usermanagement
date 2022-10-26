import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modals from '../Pages/Modal/Modals';
import Lazyloader from '../Utils/LazyLoading/Lazyloader';
import PrivateRouting from '../Utils/PrivateRouting/PrivateRouting';

const Signup = Lazyloader(() => import('../Pages/Register/Signup'), <h1>loading..</h1>);
const Login = Lazyloader(() => import('../Pages/Login/Login'), <h1>loading..</h1>);
const Home = Lazyloader(() => import('../Pages/Home/Home'), <h1>loading..</h1>);
const Add = Lazyloader(() => import('../Pages/Add/Adduser'), <h1>loading..</h1>);

const Routing = (
  <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<Add />} />
      <Route
        path="/home"
        element={
          <PrivateRouting>
            <Home />
          </PrivateRouting>
        }
      />
      <Route path="/modals/:id" element={<Modals />} />
    </Routes>
  </Router>
);
export default Routing;
