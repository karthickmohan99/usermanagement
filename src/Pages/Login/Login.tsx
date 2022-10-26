/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './Login.css';

import { useNavigate } from 'react-router';
import { Formik } from 'formik';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { adduserlogin } from '../../State /Action/Action';

export interface Istates {
  email: string;
  password: string;
}

const Login = () => {
  //const [datas,setDatas]=useState<Istates>()
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required(),
    password: Yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      )
      .required()
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={schema}
      onSubmit={(data) => {
        console.log('clicked 1', data);
        dispatch(adduserlogin(data, navigate));
      }}>
      {(formik) => {
        return (
          <div className="container">
            <div>
              <img
                className="image"
                style={{}}
                src="https://miro.medium.com/max/1043/1*uMxwajzG5l3n2x7_izXdHw.png"
                alt=""
              />
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="Container">
                  <h1>Login</h1>
                  <div className="pb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your Email"
                      style={{ marginLeft: '40px' }}
                      className="inputBox"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <p className="errorMesg" data-testid="email-error">
                      {formik.touched.email && formik.errors.email}
                    </p>
                  </div>
                  <div className="pb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter a Password"
                      style={{ marginLeft: '10px' }}
                      className="inputBox"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <p className="errorMesg" data-testid="pw-error">
                      {formik.touched.password && formik.errors.password}
                    </p>
                  </div>
                  <div className="pb-2">
                    <button className="btn btn-dark  font-weight-bold ">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Login;
