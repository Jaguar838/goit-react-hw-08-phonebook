import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { Button, Input, LoaderUI } from 'UI';
import toast from 'react-hot-toast';
import css from './RegisterPage.module.scss';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoading = useSelector(authSelectors.getLoading);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
            (!name || e.target.name.value.trim() === '') &&
            (!email || e.target.email.value.trim() === '') &&
            (!password || e.target.password.trim() === '')
        ) {
            toast.error('Fill in the fields "Name", "Email" and "Password"');
            return;
        }

        if (!name || e.target.name.value.trim() === '') {
            toast.error('Field "Name" is empty');
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

        dispatch(authOperations.register({ name, email, password }));
        setName('');
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
                    <span className={css.label_text}>Name</span>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </label>

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
                    />
                </label>

                <Button type="submit">Sign up</Button>

                {isLoading && <LoaderUI />}
            </form>
        </div>
    );
}
