import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const SearchGame: React.FC = () => {
  const [gameName, setGameName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [gameInfo, setGameInfo] = useState<any | null>(null); // State to hold game information

  const handleGameNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:3000/games/name/${gameName}`
      );

      if (response.status === 200) {
        console.log(`Game with name ${gameName} found!`);
        setGameInfo(response.data); // Set the game information received from the backend
        setGameName("");
      } else {
        throw new Error("Failed to Find. Please try again.");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleAddToInventory = async () => {

  };
  

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Game
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Find it
        </Button>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </form>
      {gameInfo && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Game Information:</Typography>
          <Typography>{`Name: ${gameInfo.name}`}</Typography>
          <Typography>{`Price: ${gameInfo.price}`}</Typography>
          <Typography>{`Description: ${gameInfo.comments}`}</Typography>
          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => handleAddToInventory()}
          >
            Add to Inventory
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SearchGame;
