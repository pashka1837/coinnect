import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	 RouterProvider, createBrowserRouter,
} from 'react-router-dom';
import Landing from './Pages/Landing.tsx';
import Hero from './Components/Hero/Hero.tsx';
import Feautures from './Components/Feautures/Feautures.tsx';
import ErrorComp from './Components/ErrorComp/ErrorComp.tsx';
import Login from './Components/Auth/Login.tsx';
import Signup from './Components/Auth/Signup.tsx';
import Tech from './Components/Tech/Tech.tsx';
import Contacts from './Components/Contacts/Contacts.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
		errorElement: <ErrorComp />,
		children: [
			{
				path: '/',
				element: <Hero />,
			},
			{
				path: 'features',
				element: <Feautures />,
			},
			{
				path: 'tech',
				element: <Tech />,
			},
			{
				path: 'contacts',
				element: <Contacts />,
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
