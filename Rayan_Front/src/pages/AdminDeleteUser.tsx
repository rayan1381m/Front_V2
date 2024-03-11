import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const AdminDeleteUser = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
    setError('');
  };

  const handleDeleteUser = async (event: any) => {
    event.preventDefault();

    try {
      await axios.delete(`http://localhost:3001/users/name/${username}`);
      console.log("User deleted successfully");
      setUsername('');
      setError('');
    } catch (error: any) {
      console.error("Error:", error.message);
      setError("Internal server error");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Delete User
      </Typography>
      <form onSubmit={handleDeleteUser}>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Delete User
        </Button>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default AdminDeleteUser;
