import React from 'react';
import { Route, Routes } from "react-router-dom";
// internal
import BackToTop from '../components/BackToTop';
import AnimateMouse from '../components/common/AnimateMouse';
import ContextProvider from '../components/context/ContextProvider';
import Home from '../components/Home/Home';
import About from '../components/Pages/About/About';
import Blog from '../components/Pages/Blog/Blog';
import BlogDetails from '../components/Pages/BlogDetails/BlogDetails';
import ContactUs from '../components/Pages/ContactUs/ContactUs';
import FAQ from '../components/Pages/FAQ/FAQ';
import MosquitoControl from '../components/Pages/MosquitoControl/MosquitoControl'
import Portfolio from '../components/Pages/Portfolio/Portfolio';
import PortfolioDetails from '../components/Pages/PortfolioDetails/PortfolioDetails';
import Price from '../components/Pages/Price/Price';
import Service from '../components/Pages/Service/Service';
import ServiceDetails from '../components/Pages/ServiceDetails/ServiceDetails';
import TeamDetails from '../components/Pages/TeamDetails/TeamDetails';
import TeamPage from '../components/Pages/TeamPage/TeamPage';
import CockroachControl from '../components/Pages/CockroachControl/CockroachControl';
import AntsControl from '../components/Pages/AntsControl/AntsControl';
import BugControl from '../components/Pages/BugControl/BugControl';

const AppNavigation = () => {
  return (
    <ContextProvider>
      <AnimateMouse/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/price" element={<Price/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/cockroach-control" element={<CockroachControl />} />
        <Route path="/mosquito-control" element={<MosquitoControl />} />
        <Route path="/ants-control" element={<AntsControl />} />
        <Route path="/bug-control" element={<BugControl />} />

      </Routes>
      <BackToTop/>
    </ContextProvider>
  );
};

export default AppNavigation;