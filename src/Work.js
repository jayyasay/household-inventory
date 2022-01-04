import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Work() {
    return (
        <>
        <Box>
            <Typography variant="h2" noWrap component="div" sx={{marginTop: '3rem'}}>
            WE LOVE YOU MOMMY AND NEYTIBOY!
            </Typography>
        </Box>
        <Box
        component="img"
        sx={{
          height: '100vh'
        }}
        alt="My Mommy and Neytiboy"
        src="https://scontent.ffjr1-3.fna.fbcdn.net/v/t1.15752-9/s1080x2048/267560370_1118023055601423_8433026391075861069_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=NqGqLmry73gAX875Y9k&tn=66B2YvYg38xxk3gw&_nc_ht=scontent.ffjr1-3.fna&oh=03_AVLtKz7eezri0bCU_1CUge_6KlGa-wss6MNR6jOZle0WOg&oe=61EBF659"
      />
      </>
    )
}