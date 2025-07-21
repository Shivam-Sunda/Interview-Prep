import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';

import HERO_IMG from '../assets/hero-img.png';
import { APP_FEATURES } from '../utils/data';

import Modal from '../components/Modal';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const openModal = (page = 'login') => {
    setCurrentPage(page);
    setOpenAuthModal(true);
  };

  return (
    <>
      {/* ---------- HERO ---------- */}
      <div className="min-h-full w-full bg-[#FFFCEF]">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-amber-200/20 blur-[65px]" />

        <div className="relative z-10 mx-auto container px-4 pt-6 pb-[200px]">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            <div className="text-xl font-bold text-black">
              Interview Prep AI
            </div>

            <button
              className="rounded-full bg-gradient-to-r from-[#FF9324] to-[#E99A4B] px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black hover:text-white"
              onClick={() => openModal('login')}
            >
              Login / Sign Up
            </button>
          </header>

          {/* Hero Body */}
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 w-full pr-4 md:mb-0 md:w-1/2">
              <div className="mb-2 flex items-center">
                <span className="flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-[13px] font-semibold text-amber-600">
                  <LuSparkles /> AI powered
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-medium leading-tight text-black">
                Ace Interviews with <br />
                <span className="animate-text-shine bg-[radial-gradient(circle,_#FF9324_0%,_#FCD768_100%)] bg-clip-text bg-[length:200%_200%] font-semibold text-transparent">
                  AI‑Powered
                </span>{' '}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="mb-6 text-[17px] text-gray-900 md:mr-20">
                Get role‑specific questions, expand answers whenever you need
                them, dive deeper into concepts, and organize everything your
                way. From preparation to mastery – your ultimate interview
                toolkit is here.
              </p>

              <button
                className="rounded-full bg-black px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-yellow-100 hover:text-black"
                onClick={() => openModal('signup')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="-mt-36 flex items-center justify-center relative z-10">
        <img src={HERO_IMG} alt="Hero" className="w-[80vw] rounded-lg" />
      </section>

      {/* ---------- FEATURES ---------- */}
      <div className="w-full bg-[#FFFCEF]">
        <div className="container mx-auto px-4 pt-10 pb-20">
          <h2 className="mb-12 text-center text-2xl font-medium">
            Features That Make You Shine
          </h2>

          <div className="flex flex-col items-center gap-8">
            {/* first three */}
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
              {APP_FEATURES.slice(0, 3).map((f) => (
                <FeatureCard key={f.id} {...f} />
              ))}
            </div>
            {/* last two */}
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
              {APP_FEATURES.slice(3).map((f) => (
                <FeatureCard key={f.id} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="mt-5 bg-gray-50 p-5 text-center text-sm text-gray-500">
        All rights reserved
      </footer>

      {/* ---------- AUTH MODAL ---------- */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => setOpenAuthModal(false)}
        hideHeader
      >
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
        {currentPage === 'signup' && <Signup setCurrentPage={setCurrentPage} />}
      </Modal>
    </>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="rounded-xl border border-amber-100 bg-[#FFFEF8] p-6 shadow transition hover:shadow-lg">
    <h3 className="mb-3 text-base font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;
