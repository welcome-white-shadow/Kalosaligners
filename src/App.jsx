import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

// Code-split the rest so the first load (landing page) stays small & fast.
const AlignerAudience = lazy(() => import('./pages/AlignerAudience.jsx'))
const PricingPage = lazy(() => import('./pages/PricingPage.jsx'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const LegalPage = lazy(() => import('./pages/LegalPage.jsx'))
const CheckEligibility = lazy(() => import('./pages/CheckEligibility.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
      <Routes>
        {/* Wizard is full-screen (no nav/footer chrome) */}
        <Route path="/check-eligibility" element={<CheckEligibility />} />

        {/* Everything else shares the Navbar + Footer layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aligners/adults" element={<AlignerAudience audience="adults" />} />
          <Route path="/aligners/teens" element={<AlignerAudience audience="teens" />} />
          <Route path="/aligners/kids" element={<AlignerAudience audience="kids" />} />
          <Route path="/aligners" element={<Navigate to="/aligners/adults" replace />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<LegalPage slug="privacy-policy" />} />
          <Route path="/terms-of-service" element={<LegalPage slug="terms-of-service" />} />
          <Route path="/refund-policy" element={<LegalPage slug="refund-policy" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
