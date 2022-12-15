import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Form, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Register() {
    const  [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const addRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/users" ,{
                username: username,
                password: password
            });
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              setTimeout(() => {
              window.location.reload("/login");
              }, 1000);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="kotak_login">
    <h1 className="mb-5">Register</h1>
    <Form onSubmit={addRegister} method="POST">
        <div className="mb-3">
            <Form.Label>
                <strong>Username</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
                <Form.Control 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </InputGroup>
        </div>
        <div className="mb-3">
            <Form.Label>
                <strong>Password</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
                <Form.Control 
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />    
            </InputGroup>
        </div>
        <button variant="primary" type="submit" className="mx-1 button btn">
            Register
        </button><br /><br />
          <center>
            <a href="/login">Login</a>
            <span >Jika belum memiliki akun</span>
            </center>           
    </Form>
</div>
  )
}
