import React, {useState} from 'react';
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
import { InputForm } from "./InventoryHook";
import DisplayList from "./InventoryDisplay";

const Input = styled('input')({
    display: 'none',
  });

function Inventory() {
    const [inputState, setInputState] = useState({});

    const onSubmitForm = () => {
        setInputState({
        item: `${inputs.item}`,
        quantity: `${inputs.quantity}`
        });
    };

    const { inputs, handleInputChange, handleSubmit } = InputForm(onSubmitForm);

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
        onSubmit={handleSubmit}
      >
       
        <TextField value={inputs.item} id="outlined-basic" label="Item name" name="item" variant="outlined" onChange={handleInputChange}
        />
        <TextField value={inputs.quantity} id="outlined-number" label="Quantity" name="quantity" type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleInputChange}
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
        <DisplayList inputs={inputState} />
      </Table>
    </TableContainer>
    </>
    )
}

export default Inventory;