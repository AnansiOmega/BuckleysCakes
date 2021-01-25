import React, { useState } from 'react'
import {
    FormGroup,
    Form,
    Input,
    Label,
    Row,
    Col
  } from "reactstrap";
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

export const OrderForm = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')

    const handleChange = (e) => {
        switch(e.target.name){
            case 'name':
                setName(e.target.value)
            break;
            case 'number':
                setNumber(e.target.value)
            break;
            case 'email':
                setEmail(e.target.value)
            break;
            case 'body':
                setBody(e.target.value)
            break;
            default:
            return
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        setName('')
        setNumber('')
        setEmail('')
        setBody('')
      }



    return (
        <>
            <Form onSubmit={sendEmail} style={{ width: '700px', marginTop: '20px', paddingBottom: '20px' }}>
                <Row>
                    <Col md="7">
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                placeholder="First & Last"
                                name='name'
                                value={name}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md='5'>
                        <FormGroup>
                            <Label>Phone Number</Label>
                            <Input
                                placeholder="+1(123) - 123 - 1234"
                                name='number'
                                value={number}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                placeholder="name@example.com"
                                name='email'
                                value={email}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Input
                                className="form-control-alternative"
                                placeholder="Please mention any specifications you'd like"
                                rows="10"
                                type="textarea"
                                name='body'
                                value={body}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Input type='submit'></Input>
            </Form>
        </>
    );
}