import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	 RouterProvider, createBrowserRouter,
} from 'react-router-dom';

// Const Layout = lazy(async () => import('./Pages/Layout.tsx'));
const NotFound = lazy(async () => import('./Pages/NotFound/NotFound.tsx'));
const Login = lazy(async () => import('./Pages/Auth/Login.tsx'));
const Signup = lazy(async () => import('./Pages/Auth/Signup.tsx'));
// Const Contacts = lazy(async () => import('./Pages/Contact/Contacts.tsx'));
const Home = lazy(async () => import('./Pages/Home/Home.tsx'));
const About = lazy(async () => import('./Pages/About/About.tsx'));
// Const Loading = lazy(async () => import('./Components/Loading/Loading.tsx'));

import Layout from './Pages/Layout.tsx';
// Import NotFound from './Pages/NotFound/NotFound.tsx';
// import Login from './Pages/Auth/Login.tsx';
// import Signup from './Pages/Auth/Signup.tsx';
import Contacts from './Pages/Contact/Contacts.tsx';
// Import Home from './Pages/Home/Home.tsx';
// import About from './Pages/About/About.tsx';
import Loading from './Components/Loading/Loading.tsx';

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
		<Suspense fallback={<Loading/>}>
			<RouterProvider router={router} />
		</Suspense>

	</React.StrictMode>,
);
