import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import AlignerAudience from './pages/AlignerAudience.jsx'
import PricingPage from './pages/PricingPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPost from './pages/BlogPost.jsx'
import LegalPage from './pages/LegalPage.jsx'
import CheckEligibility from './pages/CheckEligibility.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
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
  )
}
