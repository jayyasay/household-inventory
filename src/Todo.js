import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Input = styled('input')({
    display: 'none',
  });

function Todo () {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!item || !quantity) return;
    //     setItem('');
    //     setQuantity("");
    // }

    const submitValue = (e) => {
        e.preventDefault();
        const inventory = {
            'Item' : item,
            'Quantity' : quantity
        }
        console.log(inventory);
    }

    const createData = (item, quantity, image) => {
        return { item, quantity, image };
    }
    const rows = [
        createData(`${item}`, `${quantity}`, 6.0)
        ];

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
        onSubmit={submitValue}
      >
       
        <TextField value={item} id="outlined-basic" label="Item name" variant="outlined" onChange={(e) => setItem(e.target.value)} />
        <TextField
          value={quantity || ''}
          id="outlined-number"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setQuantity(e.target.value)}
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
        <Button type="submit" variant="contained" color="secondary" endIcon={<SendIcon />}>
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
          {rows.map((row) => (
            <TableRow
              key={row.item}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}

export default Todo;