import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const AddAdminPage: React.FC = () => {
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAdminNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdminName(event.target.value);
  };

  const handleAdminPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdminPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/users", {
        name: adminName,
        isAdmin: true,
        password: adminPassword,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log("Admin created successfully!");
        setAdminName("");
        setAdminPassword("");
      } else {
        throw new Error("Failed to create admin. Please try again.");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add Admin
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Admin Name"
          variant="outlined"
          value={adminName}
          onChange={handleAdminNameChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Admin Password"
          variant="outlined"
          type="password"
          value={adminPassword}
          onChange={handleAdminPasswordChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Create Admin
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

export default AddAdminPage;
