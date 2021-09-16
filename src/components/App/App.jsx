import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import AppBar from 'components/AppBar';
import { Layout, LoaderUI } from 'UI';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() =>
    import('../../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
    import('../../pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const NotFoundPage = lazy(() =>
    import('../../pages/NotFoundView' /* webpackChunkName: "not-found-page" */),
);
const LoginPage = lazy(() =>
    import('../../pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const PhonebookPage = lazy(() =>
    import(
        '../../pages/PhonebookPage' /* webpackChunkName: "phonebook-page" */
    ),
);

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(authSelectors.getLoading);

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        !isLoading && (
            <>
                <AppBar />

                <Layout>
                    <Suspense fallback={<LoaderUI />}>
                        <Switch>
                            <PublicRoute path="/" exact>
                                <HomePage />
                            </PublicRoute>

                            <PublicRoute
                                path="/register"
                                redirectTo="/contacts"
                                restricted
                            >
                                <RegisterPage />
                            </PublicRoute>

                            <PublicRoute
                                path="/login"
                                redirectTo="/contacts"
                                restricted
                            >
                                <LoginPage />
                            </PublicRoute>

                            <PrivateRoute path="/contacts" redirectTo="/login">
                                <PhonebookPage />
                            </PrivateRoute>

                            <Route component={NotFoundPage} />
                        </Switch>
                    </Suspense>

                    <Toaster autoClose={3000} position="top-center" />
                </Layout>
            </>
        )
    );
}

export default App;
