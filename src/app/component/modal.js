
import Modal from '@mui/material/Modal';
import { ModalContainer } from './modalStyled';

export default function AddDetailsModal({ open, handleClose, children }) {

    return (
        <Modal
            open={open}
            onClose={() => handleClose(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalContainer spacing={2}>
                {children}
            </ModalContainer>
        </Modal>
    );
}