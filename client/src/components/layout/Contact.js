import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [succesMsg, setSuccessMsg] = useState(null);

  const submitHandle = e => {
    e.preventDefault();
    axios
      .post("/api/contact", {
        name,
        email,
        message,
      })
      .then(res => {
        setSuccessMsg("Your message has been sent! Thanks for contacting us.");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(err =>
        setSuccessMsg("Something went wrong! Message couldn't send")
      );
  };

  return (
    <div className='my-5 py-5'>
      {succesMsg && <h3 className='text-center '>{succesMsg}</h3>}
      <div className='container mb-3'>
        <div className='well well-sm'>
          <Row>
            <Col sm={12} md={6} className='contact-form-img'>
              <Image
                src='assets/green.jpeg'
                thumbnail
                style={{ height: 400, width: 400 }}></Image>
            </Col>
            <Col sm={12} md={6} className='contact-form'>
              <h2>
                <strong>Contact Us</strong>
              </h2>
              <form onSubmit={submitHandle} className='mt-4'>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Name'
                    required
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='Email'
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <textarea
                  cols='30'
                  rows='3'
                  className='form-control'
                  placeholder='Message'
                  required
                  onChange={e => setMessage(e.target.value)}></textarea>
                <button className='btn btn-block btn-lg btn-outline-primary text-uppercase mt-3'>
                  Send
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
