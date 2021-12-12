import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
  
  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3">
          Foods
        </Typography>
        <Typography variant="p" sx={{fontSize: '5rem'}}>
          24
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3">
          Drinks
        </Typography>
        <Typography variant="p" sx={{fontSize: '5rem'}}>
          10
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card3 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3">
          Recipes
        </Typography>
        <Typography variant="p" sx={{fontSize: '5rem'}}>
          35
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  
  export default function OutlinedCard() {
    return (
        <>
      <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '2rem', alignItems: 'stretch', width: 'auto' }}>
        <Card variant="outlined" sx={{width: '100%'}}>{card1}<Button variant="contained" sx={{margin: '1rem'}}>See all</Button>
        </Card>
        <Card variant="outlined" sx={{width: '100%'}}>{card2}<Button variant="contained" sx={{margin: '1rem'}}>See all</Button></Card>
        <Card variant="outlined" sx={{width: '100%'}}>{card3}<Button variant="contained" sx={{margin: '1rem'}}>See all</Button></Card>
      </Box>
      </>
    );
  }