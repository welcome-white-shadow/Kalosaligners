import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import FloatingCTA from './FloatingCTA.jsx'
import ChatBot from './ChatBot.jsx'
import ScrollToTop from './ScrollToTop.jsx'

const REVEAL_SELECTORS = [
  '.section-head', '.why-card', '.smile-card', '.issue-card', '.how-card',
  '.expert-card', '.review-card', '.journey-step', '.pricing__card',
  '.compare__table', '.emi__card', '.about-story__card', '.guarantee__inner',
  '.preview__copy', '.preview__visual', '.phero__copy', '.phero__art',
].join(',')

function useScrollReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = Array.from(document.querySelectorAll(REVEAL_SELECTORS))
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    els.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.transitionDelay = `${Math.min((i % 4) * 70, 210)}ms`
    })
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

export default function Layout() {
  useScrollReveal()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
      <ChatBot />
    </>
  )
}
