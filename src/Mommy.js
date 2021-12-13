import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Mommy() {
    return (
        <>
        <Box>
            <Typography variant="h2" noWrap component="div" sx={{marginTop: '3rem'}}>
            WE LOVE YOU MOMMY!
            </Typography>
        </Box>
        <Box
        component="img"
        sx={{
          height: '100vh'
        }}
        alt="My Mommy"
        src="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.15752-9/263731678_434515534987125_1996116255126140305_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=8K5BSOZ3w_QAX9HpbjC&_nc_ht=scontent.ffjr1-4.fna&oh=548308a117f3dd866e625068b05fe784&oe=61DDD2FD"
      />
      </>
    )
}