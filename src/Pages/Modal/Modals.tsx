/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Logos from '../../Assets/Logo.png';
import { putuser } from '../../State /Action/Action';
import './Model.css';
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

export interface UseData<T> {
  email: T;
  name: T;
}
type stringTab = UseData<string>;
const Modals = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const [state, setState] = useState<stringTab>({ name: '', email: '' });
  const [edituser, setEdituser] = useState<stringTab>({
    name: state.name,
    email: state.email
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setEdituser({ ...edituser, [e.target.name]: e.target.value });
  };

  const { id } = useParams();
  console.log({ id });

  const dynamicEdit = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getuser/${id}`)

      .then((res) => {
        console.log(res.data.data, 'edit');
        setState(res.data.data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  };

  useEffect(() => {
    dynamicEdit();
  }, [id]);

  useEffect(() => {
    if (state) {
      setEdituser(state);
    }
  }, [state]);

  const handleUpdate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(putuser(edituser, id as string));
    navigate('/home');
  };

  return (
    <div className="parent">
      <div className="editbox">
        <div className="avatar">
          <Avatar alt="User Account" src={Logos} sx={{ width: 100, height: 100, margin: -9 }} />
        </div>
        <h1 className="headings">Edit user</h1>
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
              placeholder="usertName"
              hiddenLabel
              variant="filled"
              name="name"
              value={edituser.name}
              onChange={handleChange}
              margin="normal"
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
              placeholder="Enter your mail"
              variant="filled"
              name="email"
              value={edituser.email}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <div />
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Button
              sx={{ margin: '10px', fontSize: 12 }}
              className="signUpSubmit"
              variant="contained"
              size="small"
              onClick={handleUpdate}>
              Save Changes
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Modals;
