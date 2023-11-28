import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels, { } from '@enact/sandstone/Panels';
import { Routes, Route, HashRouter } from 'react-router-dom';
import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';

import './attachErrorHandler';
import css from './App.module.less';
import MainLayout from '../components/Layouts/MainLayout';
import NotFound from '../components/errors/NotFound';
import ErrorBoundary from '../components/errors/ErrorBoundary';
import MainPanel from '../views/homes/MainPanel';
import Product from '../views/products/Product';
import ProductDetail from '../views/products/ProductDetail';
import Intro from '../views/intros/Intro';
import Login from '../views/auths/Login';
import { FncGlobalContext } from '../utils/contexts/GlobalContext';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RtcContext } from '../utils/contexts/RtcContext';
import { isAuthenticate } from '../utils/cookies/GetCookies';
import PropTypes from 'prop-types';
import TabsWithRoutes from '../components/Layouts/TabLayout';
import Infomation from '../views/infos/UserInfo';
import UserProfile from '../components/users/UserProfile';
import UserDirectory from '../components/users/UserDirectory';
import UserHistoryCall from '../components/users/UserHistoryCall';

const App = SpotlightRootDecorator(kind({
	name: 'App',
	propTypes: {
		token: PropTypes.object
	},
	defaultProps: {
		token: isAuthenticate(),
	},
	styles: {
		css,
		className: 'app'
	},
	computed: {
	},

	render: (props) => {
		return (
			<HashRouter>
				<ToastContainer
					closeButton={false}
					icon={false}
					toastClassName={
						"flex items-center w-auto delay-0 duration-300 rounded-md cursor-pointer"
					}
					bodyClassName={() =>
						"flex items-center text-sm w-auto font-white font-med block whitespace-nowrap"
					}
					autoClose={1000}
				></ToastContainer>

				<FncGlobalContext>
					<Panels {...props}>
						<ErrorBoundary>
							<Routes>
								<Route path="/" element={props.token?.accessToken ? <MainLayout><TabsWithRoutes /></MainLayout> : null}>
									{
										props.token?.accessToken ? <Route index element={<RtcContext><MainPanel /></RtcContext>} /> : <Route index element={<Login />} />
									}
									<Route path="product" element={<Product />} />
									<Route path="product/:id" element={<ProductDetail />} />
									<Route path="intro" element={<Intro />} />
									<Route path="*" element={<NotFound />} />
								</Route>
								<Route path='/information' element={<Infomation />}>
									<Route index element={<UserProfile />} />
									<Route path="directory" element={<UserDirectory />} />
									<Route path="history" element={<UserHistoryCall />} />
								</Route>
							</Routes>
						</ErrorBoundary>
					</Panels>
				</FncGlobalContext>
			</HashRouter>
		)
	}
}));

const MySandstoneApp = ThemeDecorator(App);
export default MySandstoneApp;