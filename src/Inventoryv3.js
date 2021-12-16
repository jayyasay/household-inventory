import React, { Component } from 'react';
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
    this.state = { items: [], item: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
       
        <TextField id="outlined-basic" label="Item name" name="item" variant="outlined" onChange={this.handleChange}
            value={this.state.text || ''} />
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
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      <AddNewItemList items={this.state.items} />
      </TableBody>
      </Table>
    </TableContainer>
    </>
      )
    }

    handleChange(e) {
      this.setState({ text: e.target.value })
    }

    handleSubmit(e) {
      e.preventDefault();
      if(this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }

  class AddNewItemList extends React.Component {
    render() {
      return (
        <>
        {this.props.items.map((item) =>
            <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={item.id}
          >
             
            <TableCell scope="row">
              {item.text}
            </TableCell>
            
          </TableRow>
          )}
        </>
      )
    }
  }

export default AddItem;