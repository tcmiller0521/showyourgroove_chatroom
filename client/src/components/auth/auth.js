import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { userSignIn, userSignUp } from '../../actions/auth';
import Input from './input';

const initialState = { username: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const [formData, setFormData] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setFormData(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const user = JSON.parse(localStorage.getItem('profile'));

    const removePassword = () => {
        for (var i=0; i< user.length; i++) {
            var user = JSON.parse(user[i]);
            if (user.password === 3) {
                user.splice(i, 1);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(userSignUp(formData, history.push('/profile')));
        } else {
            dispatch(userSignIn(formData, history.push('/profile')));
        }
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div>
            <h3>{isSignup ? 'Sign up' : 'Sign in'}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    {isSignup && (
                        <>
                            <Input name="username" placeholder="Username" label="Username" handleChange={handleChange} autoFocus />
                        </>
                    )}
                    <Input name="email" placeholder="Email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" placeholder="Password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name="confirmPassword" placeholder="Confirm Password" label="Repeat Password" handleChange={handleChange} type="password" />}
                </div>

                <button type="submit">
                        {isSignup ? 'Sign Up' : 'Sign In'}
                </button>

                <div>
                    <div>
                        <button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Auth;