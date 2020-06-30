import React, { useCallback } from 'react';

import { Redirect } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import SomeSpinner from '../../components/SomeSpinner';


const SignIn = () => {

    const { signed, signIn, loading } = useAuth();

    const handleSignIn = useCallback( () => {
        signIn();
    }, [signIn]);

    
    if (loading) {
        return (
            <>
                <h1>SignIn</h1>
                <SomeSpinner/>
            </>
        )    
    }


    return (

        <div>
            { signed ? (
                <Redirect to='./user' />
            ) : (
                <>
                    <h1>SignIn</h1>
                    <button onClick={ handleSignIn } >Sign in</button>
                </>
            )}
        </div>
    );
}
export default SignIn;