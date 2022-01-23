import React from 'react';
import { Button } from "react-bootstrap"

const Input = ({ name, placeholder, handleChange, label, autoFocus, type, handleShowPassword }) => (
  <div>
    <input
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      variant="outlined"
      required
      label={label}
      autoFocus={autoFocus}
      type={type}
    />
    {name === 'password' ?
      <Button type="button" onClick={handleShowPassword}>
        {type === 'password' ? "show password" : "hide password"}
      </Button>
      : null}
  </div>
);

export default Input;