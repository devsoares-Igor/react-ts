
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import { StyledLetterAvatars } from './styles';

export default function LetterAvatars() {
    return (
        <StyledLetterAvatars>
            <Stack direction="row" spacing={1}  >
                <Avatar sx={{ bgcolor: deepPurple[500] }}>IG</Avatar>
            </Stack>
        </StyledLetterAvatars>
    );
}
