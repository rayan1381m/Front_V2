import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const AddGamePage: React.FC = () => {
  const [gameName, setGameName] = useState("");
  const [gamePrice, setGamePrice] = useState("");
  const [gameDescription, setGameDescription] = useState("");

  const [error, setError] = useState<string | null>(null);

  const handleGameNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(event.target.value);
  };

  const handleGamePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGamePrice(event.target.value);
  };

  const handleGameDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGameDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/games", {
        name: gameName,
        likes: 0,
        comments: gameDescription,
        price: gamePrice,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log(`Game with name ${gameName} created successfully!`);
        setGameName("");
        setGamePrice("");
        setGameDescription("");
      } else {
        throw new Error("Failed to create Game. Please try again.");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add Game
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Game Name"
          variant="outlined"
          value={gameName}
          onChange={handleGameNameChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Game Price"
          variant="outlined"
          type="number"
          value={gamePrice}
          onChange={handleGamePriceChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Game Description"
          variant="outlined"
          type="text"
          value={gameDescription}
          onChange={handleGameDescriptionChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Create Game
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

export default AddGamePage;
