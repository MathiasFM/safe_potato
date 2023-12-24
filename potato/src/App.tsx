import './App.css'
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from './pages/HomePage';
import { NoPage } from './pages/NoPage';
import { Header } from './components/Header/Header';
import { MemberPage } from './pages/MemberPage';
import { GuestPage } from './pages/GuestPage';


const queryClient = new QueryClient();

function App() {

	return (
		<QueryClientProvider client={queryClient}>
				<CssBaseline />
				<BrowserRouter>
					<Box height={"50vh"} display={'flex'} flexDirection={'column'}>
						<Header />
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/member-login' element={<MemberPage />} />
							<Route path='/guest' element={<GuestPage />} />
							<Route path='*' element={<NoPage />} />
						</Routes>
				</Box>
				</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App
