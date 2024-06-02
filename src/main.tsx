import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	 RouterProvider, createBrowserRouter,
} from 'react-router-dom';
import Layout from './Pages/Layout.tsx';
import NotFound from './Pages/NotFound/NotFound.tsx';
import Login from './Pages/Auth/Login.tsx';
import Signup from './Pages/Auth/Signup.tsx';
import Contacts from './Pages/Contact/Contacts.tsx';
import Home from './Pages/Home/Home.tsx';
import About from './Pages/About/About.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'contact',
				element: <Contacts />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'signup',
				element: <Signup />,
			},
	  ],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
