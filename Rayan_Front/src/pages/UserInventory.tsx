import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Game {
  id: number;
  name: string;
  likes: number;
  comments: string;
  price: number;
}

const UserInventory: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const username = localStorage.getItem("username");
        if (username) {
          const response = await axios.get<Game[]>(`http://localhost:3000/users/${username}/games`);
          setGames(response.data);
        }
      } catch (error) {
        console.error("Error fetching user's games:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Likes</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game) => (
            <TableRow key={game.id}>
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

export default UserInventory;
