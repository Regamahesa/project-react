import React, { useState } from 'react'
import "../style/Navbar.css";
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function NavigationBar() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");
  const [image, setImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const history = useHistory();

    const addFood = async (e) => {
      e.preventDefault();

      try {
        await axios.post("http://localhost:8000/daftarMakanan", {
          name: name,
          deskripsi: deskripsi,
          harga: harga,
          image: image
        })
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          window.location.reload();
          }, 1000)
      } catch (error) {
        console.log(error)
      }
    }

    const logout = () => {
        window.location.reload();
        localStorage.clear();
        history.push("/login");
      };
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid  navbar">
    <a className="navbar-brand">GaFood <i class="fas fa-store-alt"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/menu">Menu</a>
        </li>
        {localStorage.getItem("id") !== null ? (
                <>
                <li className="nav-item">
                <button className="nav-link" onClick={handleShow} style={{border: "none", backgroundColor:"aquamarine"}}>Tambah Makanan</button>
              </li>
              <li className="nav-item logout">
                <a className="btn" onClick={logout}>
                <i class="fas fa-sign-out-alt"></i> Logout
                </a>
              </li>
                </>
              ) : (
                <li className="nav-item login">
                  <a className="btn" href="/login">
                  <i class="fas fa-sign-in-alt"></i> Login
                  </a>
                </li>
              )}
      </ul>
    </div>
  </div>
</nav>




<Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Food</Modal.Title>   
        </Modal.Header>
        <form onSubmit={addFood} method="POST">
          <Modal.Body>
            <div className="mb-3">
              <Form.Label>
                <strong>Nama makanan</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control placeholder="Massukkan nama makanan" value={name} onChange={(e) => setName(e.target.value)} />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Deskripsi</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control placeholder="Massukkan Deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Harga</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control placeholder="Massukkan Harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Image</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control placeholder="Massukkan url image" value={image} onChange={(e) => setImage(e.target.value)} />
              </InputGroup>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary">tambah</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}
