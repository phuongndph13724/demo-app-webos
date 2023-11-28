/* eslint-disable */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import IntroPage  from '../../views/Intro';
import AboutPage from '../../views/AboutPage';
import ProductList from '../../views/ProductList';
import HomePage from '../../views/HomePage';

const routerElement = createRoutesFromElements(
  <Route path="/">
    <Route 
      index 
      element={<HomePage />} />
    <Route
      path="product"
      element={<ProductList />}
    />
    <Route
      path="about"
      element={<AboutPage />}
    />
    
    <Route
      path="intro"
      element={<IntroPage />}
    />
</Route>,
)

export const router = createBrowserRouter(
  routerElement
)