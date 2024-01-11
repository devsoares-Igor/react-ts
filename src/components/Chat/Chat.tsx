import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendButtonChat from './SendButton';
import { ChatContainer, ButtonPoss  } from './Styles';


export default function ChatTextFields() {
  return (
    <ChatContainer>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 0, width: '80%' },
          }}
          noValidate
          autoComplete="on"
        >
        <TextField
          id="filled-multiline-flexible"
          label="Mensagem"
          multiline
          placeholder="Digite a mensagem"
          maxRows={2}
          variant="filled"
        />
    </Box>
    <ButtonPoss>
      <SendButtonChat/>
      </ButtonPoss>
  </ChatContainer>
  );
}
