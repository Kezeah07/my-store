import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  surname: '',
  username: '',
  email: '',
  password: '',
  successMessage: '',
  errorMessage: '',
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { firstName, surname, username, email, password } = action.payload;
      state.firstName = firstName;
      state.surname = surname;
      state.username = username;
      state.email = email;
      state.password = password;
      state.successMessage = "Registration successful! You can now log in.";
      state.errorMessage = '';
      state.loggedIn = false; // Reset loggedIn on registration
    },
    loginUser: (state, action) => {
      const { username} = action.payload;
      if (username === state.username) {
        state.loggedIn = true;
        state.successMessage = "Login successful!";
        state.errorMessage = '';
      } else {
        state.errorMessage = "Invalid username.";
      }
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { registerUser, loginUser, setError } = userSlice.actions;
export const selectUser = (state) => state.user; 
export default userSlice.reducer;
