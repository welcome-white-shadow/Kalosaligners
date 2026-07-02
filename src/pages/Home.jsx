import Seo from '../components/Seo.jsx'
import HeroLead from '../components/HeroLead.jsx'
import LogoStrip from '../components/LogoStrip.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Smiles from '../components/Smiles.jsx'
import SmilePreview from '../components/SmilePreview.jsx'
import Issues from '../components/Issues.jsx'
import Pricing from '../components/Pricing.jsx'
import Kit from '../components/Kit.jsx'
import Gallery from '../components/Gallery.jsx'
import Guarantee from '../components/Guarantee.jsx'
import Comparison from '../components/Comparison.jsx'
import VsAligners from '../components/VsAligners.jsx'
import Experts from '../components/Experts.jsx'
import Testimonials from '../components/Testimonials.jsx'
import WhyKalos from '../components/WhyKalos.jsx'
import ShareBrand from '../components/ShareBrand.jsx'
import BlogTeaser from '../components/BlogTeaser.jsx'
import FAQ from '../components/FAQ.jsx'

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Kalos Aligners | Invisible Clear Teeth Aligners in India"
        description="Comfortable, virtually invisible clear aligners by expert orthodontists. Mild cases from ₹25,000 with no-cost EMI. Book a free 3D smile scan with Kalos."
      />
      <HeroLead />
      <LogoStrip />
      <HowItWorks />
      <Smiles />
      <SmilePreview />
      <Issues />
      <Pricing />
      <Kit />
      <Gallery />
      <Guarantee />
      <Comparison />
      <VsAligners />
      <Experts />
      <Testimonials />
      <WhyKalos />
      <ShareBrand />
      <BlogTeaser />
      <FAQ />
    </>
  )
}
