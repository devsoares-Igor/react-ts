import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import LoginTextField from '../../components/Field/InputField';
import MyButton from '../../components/Button/Button';
import { Image } from '../../components/image/index';
import fullLogo from '../../assets/image/full.png';
import AnimatedBackground from '../../components/background/background';
import CustomizedSnackbars from '../../components/AlertSnackBar/AlertSnackBar';
import { LoginPageContainer, LoginForm } from './styles';

// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAAu1sQLO69Rid27K_OvICRL1GCLSBuOTA",
    authDomain: "real-82320.firebaseapp.com",
    projectId: "real-82320",
    storageBucket: "real-82320.appspot.com",
    messagingSenderId: "571178950004",
    appId: "1:571178950004:web:30e69820b7612061d62021",
    measurementId: "G-1KGBKEHV3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthLoginFirebase: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const navigate = useNavigate();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        setEmailError('');
        setPasswordError('');
        setLoginError('');

        if (!email.trim()) {
            setEmailError('Campo Email obrigatorio');
            return;
        }

        if (!password.trim()) {
            setPasswordError('Campo senha obrigatorio');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;

            if (user) {
                console.log('User signed in:', user);
                navigate('/main');
            } else {
                setLoginError('Erro ao Altenticar, verifique a credencial e tente novamente!');
            }
        } catch (error) {
            console.error('Error signing in:', error);

            if (error instanceof Error && 'code' in error) {
                const errorCode = (error as { code: string }).code;

                if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
                    setLoginError('Invalid email or password');
                } else {
                    setLoginError('Erro ao Altenticar, verifique a credencial e tente novamente!');
                }

                // Open the Snackbar with the error message
                setOpenSnackbar(true);
            }
        }
    };

    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    return (
        <AnimatedBackground>
            <LoginPageContainer>
                <Image src={fullLogo} alt="logo" width="200px" />
                <LoginForm onSubmit={handleSignIn}>
                    <LoginTextField
                        label="Email"
                        type="email"
                        placeholder="Entre com o email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                    />
                    <LoginTextField
                        label=" Senha"
                        type="password"
                        placeholder="Entre com a senha "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError}
                    />

                    <MyButton
                        type="submit"
                        text="Login"
                    />

                   

                </LoginForm>
            </LoginPageContainer>
            <CustomizedSnackbars
                        text={loginError}
                        type="error"
                        open={openSnackbar}
                        handleClose={handleCloseSnackbar}
                    />
        </AnimatedBackground>
        
    );
};

export default AuthLoginFirebase;
