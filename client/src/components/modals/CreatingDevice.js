import React, { useContext, useState } from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index';

const CreatingDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };
    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Choose a type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map((type) => (
                            <Dropdown.Item key={type.id}>
                                {type.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Choose a brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map((brand) => (
                            <Dropdown.Item key={brand.id}>
                                {brand.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className="mt-3"
                    placeholder="Input name of device"
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Input price of device"
                    type="number"
                />
                <Form.Control className="mt-3" type="file" />
                <hr />
                <Button variant={'outline-dark'} onClick={addInfo}>
                    Add new option
                </Button>
                {info.map((i) => (
                    <Row className="mt-2" key={i.number}>
                        <Col md={4}>
                            <Form.Control placeholder="Input name of option" />
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder="Input value of option" />
                        </Col>
                        <Col md={4}>
                            <Button
                                onClick={() => removeInfo(i.number)}
                                variant={'outline-danger'}
                            >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={onHide}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatingDevice;
