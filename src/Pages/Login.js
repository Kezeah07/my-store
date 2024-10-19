import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage, loggedIn } = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  // Redirect after successful login
  useEffect(() => {
    if (loggedIn) {
      navigate('/landing');
    }
  }, [loggedIn, navigate]);

  return (
    
    <div className="container mt-5">
      <h1 className="text-center">Login</h1>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            id="username"
            type="text"
            className={`form-control ${formik.errors.username ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('username')}
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  
  );
};

export default Login;
