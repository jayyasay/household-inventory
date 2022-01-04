import React from 'react';
import { Outlet } from "react-router-dom"
import { useForm } from "react-hook-form";
import { signup } from '../firebase/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Signup() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await signup(data);
      reset();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
    <Box>
            <Typography variant="h2" noWrap component="div" sx={{marginTop: '4rem'}}>
            Register now!
            </Typography>
    </Box>
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
            <div className="two fields">
              <div className="field">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "Required",
                    })}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input type="text" name="lastName" placeholder="Last Name"  {...register("lastName", {
                      required: "Required",
                    })} />
                </label>
              </div>
            </div>
            <div className="field">
              <label>
                Email
                <input type="email" name="email" placeholder="Email" {...register("email", {
                      required: "Required",
                    })} />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input type="password" name="password" placeholder="Password" {...register("password", {
                      required: "Required",
                    })} />
              </label>
            </div>
            <button className="ui primary button login" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Signup;