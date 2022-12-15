import axios from 'axios';
import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../style/Login.css"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const login = async (e) => {
        e.preventDefault();
        axios.get("http://localhost:8000/users").then(({data}) => {
            const user = data.find(
                (x) => x.email === email && x.password === password
            );
            if (user) {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Login',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  localStorage.setItem("id", user.id)
                  history.push("/");
                  window.location.reload();
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'email atau password tidak valid',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        });
    };

  return (
    <div className="kotak_login">
    <h1 className="mb-5">login</h1>
    <Form onSubmit={login} method="POST">
        <div className="mb-3">
            <Form.Label>
                <strong>Username or email addres</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
                <Form.Control 
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
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
        <i class="fas fa-sign-in-alt"></i>  Login
        </button><br /><br />
          <center>
            <a href="/register">Register</a>
            <span >Jika belum memiliki akun</span>
            </center>           
    </Form>
</div>
  );
}
