import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, setError, selectUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import Container from '../Components/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { successMessage, errorMessage } = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      surname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        dispatch(setError("Passwords do not match."));
        return;
      }
      
      dispatch(registerUser(values));
      navigate('/login');
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
      }

      if (!values.surname) {
        errors.surname = 'Required';
      } else if (values.surname.length > 20) {
        errors.surname = 'Must be 20 characters or less';
      }

      if (!values.username) {
        errors.username = 'Required';
      } else if (values.username.length > 9) {
        errors.username = 'Must be 9 characters or less';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more';
      } else if (!/[A-Z]/.test(values.password) || !/[!@#$%^&*]/.test(values.password)) {
        errors.password = 'Must contain at least one uppercase letter and one special character';
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
      }

      return errors;
    },
  });

  return (
    <Container>
    <div className="container mt-5">
      <h1 className="text-center">Register</h1>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            id="firstName"
            type="text"
            className={`form-control ${formik.errors.firstName ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('firstName')}
          />
          {formik.errors.firstName && <div className="invalid-feedback">{formik.errors.firstName}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Surname</label>
          <input
            id="surname"
            type="text"
            className={`form-control ${formik.errors.surname ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('surname')}
          />
          {formik.errors.surname && <div className="invalid-feedback">{formik.errors.surname}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            id="username"
            type="text"
            className={`form-control ${formik.errors.username ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('username')}
          />
          {formik.errors.username && <div className="invalid-feedback">{formik.errors.username}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            type="password"
            className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('password')}
          />
          {formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            className={`form-control ${formik.errors.confirmPassword ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.errors.confirmPassword && <div className="invalid-feedback">{formik.errors.confirmPassword}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
    </Container>
  );
};

export default Home;

