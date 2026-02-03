import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { GoPlus } from "react-icons/go";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export default function ModalComponent({ isOpen, onClose, children }: ModalProps) {
    const [open, setOpen] = React.useState(isOpen);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    return (
        <div>
            <div
                onClick={handleOpen}
                className='min-w-64 p-8 py-20 rounded-md shadow-lg flex justify-center items-center flex-col cursor-pointer hover:scale-105 duration-200 ease-in-out'>
                <GoPlus size={96} color='#808080' />
                <span className='mt-4 text-2xl font-bold uppercase'>Add New Vehicle</span>
            </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className=''
                >
                    <Box sx={style}>
                        {children}
                        
                    </Box>
                </Modal>

            </div>
            );
}
