import React from 'react';

const Modal = ({ contentModal, hide }) => {
    return (
        <div className="modal-overlay">
            <div className='modal-wrapper'>
                <div className='modal'>
                    <span className="text">{contentModal}</span>
                    <span className="close-modal" onClick={hide}>X</span>
                </div>
            </div>
        </div>
    );
};

export default Modal;
