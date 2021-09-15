import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { Button, LoaderUI, Input } from 'UI';

import toast from 'react-hot-toast';

import css from './LoginPage.module.scss';

export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoading = useSelector(authSelectors.getLoading);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (
            (!email || e.target.email.value.trim() === '') &&
            (!password || e.target.password.trim() === '')
        ) {
            toast.error('Fill in the fields "Email" and "Password"');
            return;
        }

        if (!email || e.target.email.value.trim() === '') {
            toast.error('Field "Email" is empty');
            return;
        }

        if (!password || e.target.password.value.trim() === '') {
            toast.error('Enter your password');
            return;
        }

        if (password.length < 8 || e.target.password.value.length < 8) {
            toast.error('Enter a password of 8 characters');
            return;
        }

        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className={css.form}
                autoComplete="off"
            >
                <label className={css.label}>
                    <span className={css.label_text}>Email</span>
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </label>

                <label className={css.label}>
                    <span className={css.label_text}>Password</span>
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        data-pass
                    />
                </label>

                <Button type="submit">Log in</Button>
                {isLoading && <LoaderUI />}
            </form>
        </div>
    );
}
