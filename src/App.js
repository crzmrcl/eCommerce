import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import AboutPage from './components/AboutPage/AboutPage';
import TestimonialPage from './components/TestimonialPage/TestimonialPage';
import BlogPage from './components/BlogPage/BlogPage';
import FeaturedPage from './components/FeaturedPage/FeaturedPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={ <FrontPage /> } />
          <Route  path='/login' element={ <LoginPage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/featured' element={ <FeaturedPage /> } />
          <Route path='/all/products' element={ <ProductsPage /> } />
          <Route path='/testimonial' element={ <TestimonialPage /> } />
          <Route path='/blog' element={ <BlogPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
