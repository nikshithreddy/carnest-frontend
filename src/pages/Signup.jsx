// src/pages/SignupPage.js
import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Box,
  Grid,
  Alert,
} from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/users/signup/', {
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.username,
        email: formData.email,
        phone_number: formData.phoneNumber,
        password: formData.password,
      });
      navigate('/login'); // Redirect to login page after successful signup
    } catch (err) {
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up for Carnest
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 ,}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formData.firstName}
                onChange={handleChange}
                sx={{
                    '& .MuiInputLabel-root': { color: 'grey' }, // Change the label color here
                    '& .MuiInputLabel-root.Mui-focused': { color: '#ff6436' }, // Label color when focused
                  }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                sx={{
                    '& .MuiInputLabel-root': { color: 'grey' }, // Change the label color here
                    '& .MuiInputLabel-root.Mui-focused': { color: '#ff6436' }, // Label color when focused
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
                sx={{
                    '& .MuiInputLabel-root': { color: 'grey' }, // Change the label color here
                    '& .MuiInputLabel-root.Mui-focused': { color: '#ff6436' }, // Label color when focused
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                    '& .MuiInputLabel-root': { color: 'grey' }, // Change the label color here
                    '& .MuiInputLabel-root.Mui-focused': { color: '#ff6436' }, // Label color when focused
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                sx={{
                    '& .MuiInputLabel-root': { color: 'grey' }, // Change the label color here
                    '& .MuiInputLabel-root.Mui-focused': { color: '#ff6436' }, // Label color when focused
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                sx={{
                    '& .MuiInputLabel-root': { color: 'grey' }, // Change the label color here
                    '& .MuiInputLabel-root.Mui-focused': { color: '#ff6436' }, // Label color when focused
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{
                    '& .MuiInputLabel-root': { color: 'grey' }, // Change the label color here
                    '& .MuiInputLabel-root.Mui-focused': { color: '#ff6436' }, // Label color when focused
                  }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 ,backgroundColor: '#ff6436'}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;