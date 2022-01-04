import React from 'react';
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

class AddItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: '',
        quantity: ''
      },
      items: []
    }
  }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState(prevState => ({
        item: {...prevState.item, [name]: value}
      }));
    };

    handleSubmit = e => {
      e.preventDefault();
      if (this.state.item.name.length === 0 || this.state.item.quantity.length === 0) {
        return;
      }
      this.setState(prevState => ({
        items: [...prevState.items, prevState.item],
        item: { name: '', quantity: '' }
      }));
    };

  render() {
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
        onSubmit={this.handleSubmit}
      >
       
        <TextField id="outlined-basic" label="Item name" name="name" variant="outlined" onChange={this.handleChange} value={this.state.item.name || ''} />
        <TextField id="outlined-basic" label="Quantity" type="number" name="quantity" variant="outlined" onChange={this.handleChange} value={this.state.item.quantity || ''} />
        <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        {/* <Button variant="contained" component="span">
          Upload Image
        </Button> */}
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
            <TableCell>Quantity</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.items.map((item, index) =>
          <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={index}
        >
           
          <TableCell>
            {item.name}
          </TableCell>

          <TableCell>
            {item.quantity}
          </TableCell>
          
        </TableRow>
        )}
      </TableBody>
      </Table>
    </TableContainer>
    </>
    );
}
}

export default AddItem;