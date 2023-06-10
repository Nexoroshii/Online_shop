import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import CreatingBrand from '../components/modals/CreatingBrand';
import CreatingDevice from '../components/modals/CreatingDevice';
import CreatingType from '../components/modals/CreatingType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={'outline-dark'}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Add type
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Add brand
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Add device
            </Button>
            <CreatingBrand
                show={brandVisible}
                onHide={() => setBrandVisible(false)}
            />
            <CreatingDevice
                show={deviceVisible}
                onHide={() => setDeviceVisible(false)}
            />
            <CreatingType
                show={typeVisible}
                onHide={() => setTypeVisible(false)}
            />
        </Container>
    );
};

export default Admin;
