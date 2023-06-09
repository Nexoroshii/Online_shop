import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
//import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">
                    {isLogin ? 'Authorize' : 'Registration'}
                </h2>

                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Input your email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Input your password..."
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? (
                            <div>
                                No account?
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Sign In
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                Have account?
                                <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
                            </div>
                        )}
                        <Button variant={'outline-success'}>
                            {isLogin ? 'Log In' : 'Registration'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
