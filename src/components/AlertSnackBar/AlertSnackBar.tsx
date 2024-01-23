import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';



import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={5} ref={ref} variant="filled" {...props} />;
});

interface SnackButtonProps {
    text: string;
    type?: "error" | "warning" | "info" | "success";
    open: boolean;
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

const CustomizedSnackbars: React.FC<SnackButtonProps> = ({ text, type, open, handleClose }) => {
    return (
        <Stack>
            <Snackbar
                open={open}
                autoHideDuration={2000}  // Adjust the duration as needed
                onClose={handleClose}
                onClick={() => handleClose()}
            >
                <Alert
                    onClose={handleClose}
                    severity={type}
                >
                    {text}
                </Alert>
            </Snackbar>
        </Stack>
    );
};

export default CustomizedSnackbars;
