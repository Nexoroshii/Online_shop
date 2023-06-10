import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = {
        id: 7,
        name: 'Iphone 12 pro',
        price: 2000,
        rating: 5,
        img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg',
    };
    const description = [
        { id: 1, title: 'Option1', description: '5gb' },
        { id: 2, title: 'Option2', description: '6gb' },
        { id: 3, title: 'Option3', description: '7gb' },
        { id: 4, title: 'Option4', description: '8gb' },
        { id: 5, title: 'Option5', description: '9gb' },
    ];
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center "
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64,
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{
                            width: 300,
                            height: 300,
                            fontSize: 32,
                            border: '5px solid lightgray',
                        }}
                    >
                        <h3>From:{device.price}$</h3>
                        <Button variant={'outline-dark'}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Options</h1>
                {description.map((info, index) => (
                    <Row
                        key={info.id}
                        style={{
                            background:
                                index % 2 === 0 ? 'lightgray' : 'transparent',
                            padding: 10,
                        }}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default DevicePage;
