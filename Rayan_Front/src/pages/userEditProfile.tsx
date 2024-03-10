import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const UserEditProfile: React.FC = () => {
  const [userNewName, setUserNewName] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirmation password
  const [error, setError] = useState<string | null>(null);

  const handleNewUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserNewName(event.target.value);
  };

  const handleAdminPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (userNewPassword !== confirmPassword) {
      setError("Passwordnot confirm");
      return;
    }

    try {
      const username = localStorage.getItem("username");
      if (!username) {
        throw new Error("Username not found. Please log in again.");
      }

      const response = await axios.put(
        `http://localhost:3000/users/${username}`,
        {
          name: userNewName,
          password: userNewPassword,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        console.log("Profile updated successfully!");
        setUserNewName("");
        setUserNewPassword("");
        setConfirmPassword(""); // Clear the confirmation password field
        // Optionally, update the local storage with the new username if it was changed
        localStorage.setItem("username", userNewName);
      } else {
        throw new Error("Failed to update profile. Please try again.");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="New Username"
          variant="outlined"
          value={userNewName}
          onChange={handleNewUsernameChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="New Password"
          variant="outlined"
          type="password"
          value={userNewPassword}
          onChange={handleAdminPasswordChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Confirm Password"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Edit Info
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

export default UserEditProfile;
