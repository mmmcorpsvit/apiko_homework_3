import React from 'react';
// import PropTypes from 'prop-types'

import {Modal, Spinner} from 'react-bootstrap';

export const Loader = () => {
    return (
        <>
            <Modal show={true} centered={true} onHide={()=>{}}>

                <Modal.Body>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>

                    Loading in progress, please wait... don't worry, be happy ^)
                </Modal.Body>


            </Modal>
        </>
    )
};

// export default SpinnerScreen;
