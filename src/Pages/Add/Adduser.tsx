/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { adduser } from '../../State /Action/Action';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Istate } from '../../Pages/Register/Signup';
import { useNavigate } from 'react-router';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Avatar from '@mui/material/Avatar';
import Logos from '../../Assets/Logo.png';
import './Adduser.css';

const Adduser = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();
  const [addData, setAddData] = useState<Istate>({
    id: uuidv4(),
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setAddData({ ...addData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(adduser(addData));
    navigate('/home');
  };
  return (
    <div className="parent">
      <div className="editbox">
        <div className="avatar">
          <Avatar alt="User Account" src={Logos} sx={{ width: 100, height: 100, margin: -9 }} />
        </div>
        <h1 className="headings">Add User</h1>
        <form style={{ justifyContent: 'center' }}>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <label className="labels">UserName</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
              hiddenLabel
              variant="filled"
              name="name"
              value={addData.name}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <div />
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <label className="labelss">Email</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                )
              }}
              hiddenLabel
              variant="filled"
              name="email"
              value={addData.email}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <div />
          <Button
            className="signUpSubmit"
            variant="contained"
            onClick={handleAdd}
            sx={{ margin: '10px', fontSize: 12 }}>
            Add User
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Adduser;
