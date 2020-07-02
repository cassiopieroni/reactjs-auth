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
            <div className='loading'>
                <h1>SignIn Page</h1>
                <SomeSpinner/>
            </div>
        )    
    }


    return (

        <div>
            { signed ? (
                <Redirect to='./user' />
            ) : (
                <>
                    <h1>SignIn Page</h1>
                    <button onClick={ handleSignIn } >Sign in</button>
                </>
            )}
        </div>
    );
}
export default SignIn;