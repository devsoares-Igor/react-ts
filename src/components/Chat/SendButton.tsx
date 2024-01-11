import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


interface SendButton {

}

const SendButtonChat: React.FC<SendButton> = () => {
    return (
        
        <Stack direction="column-reverse" spacing={2}>
            <Button
                endIcon={<SendIcon />}>
            </Button>
        </Stack>
    );
};

export default SendButtonChat
