import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';

const Input = styled('input')({
    display: 'none',
  });

function Inventoryv2() {
    const [newItem, setNewItem] = useState([]);
    const [newQuantity, setNewQuantity] = useState([]);

    const onSubmitForm = (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);

      const itemText = formData.get("item");
      const quantityText = formData.get("quantity");

      setNewItem([...newItem, itemText]);
      setNewQuantity([...newQuantity, quantityText]);

    };

    return (
    <>
        <Typography variant="h2" component="div">
        Add new item here!
        </Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex', flexWrap: 'wrap', columnGap: '1rem', alignItems: 'center'
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmitForm}
      >
       
        <TextField id="outlined-basic" label="Item name" name="item" variant="outlined" />
        <TextField id="outlined-number" label="Quantity" name="quantity" type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload Image
        </Button>
        </label>
        <Box
        component="div"
        sx={{flexBasis: '100%', height: 0, margin: 0}}
      ></Box>
        <Button type="submit" variant="contained" color="secondary"  endIcon={<SendIcon />}>
            Send
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
             {newItem.map((item, index) =>
            <TableCell scope="row" key={index}>
              {item}
            </TableCell>
            )}
            {newQuantity.map((quantity, index2) =>
            <TableCell align="right" scope="row" key={index2}>
              {quantity}
            </TableCell>
            )}
          </TableRow>
          
        </TableBody>
        
      </Table>
    </TableContainer>
    </>
    )
}

export default Inventoryv2;