import React from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import './styles.css';


const Layout = ({ children }) => {

    const { signed, user } = useAuth();

    return (

        <div className='layout'>
            <header>
                
                <div>
                    <Link to='./'>Home</Link>
                    <Link to='./dashboard'>Dashboard</Link>
                </div>
                
                { signed
                    ? <Link to='./user' >{ user.name }</Link>
                    : <Link to='./signin'>sign in</Link>
                }
            
            </header>
            
            <main>
            
                { children }
            
            </main>
        </div>
    )
}

export default Layout;