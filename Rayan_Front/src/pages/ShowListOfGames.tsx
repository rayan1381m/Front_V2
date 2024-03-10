import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Game {
  id: number;
  name: string;
  likes: number;
  comments: string;
  price: number;
}

const ShowListOfGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get<Game[]>("http://localhost:3000/games");
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Likes</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game) => (
            <TableRow key={game.id}>
              <TableCell>{game.id}</TableCell>
              <TableCell>{game.name}</TableCell>
              <TableCell>{game.likes}</TableCell>
              <TableCell>{game.comments}</TableCell>
              <TableCell>{game.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowListOfGames;
