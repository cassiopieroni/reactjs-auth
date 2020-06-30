import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from './contexts/auth';

import Layout from './Layout';
import Routes from './Routes/';


function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Layout>
					<Routes />
				</Layout>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
