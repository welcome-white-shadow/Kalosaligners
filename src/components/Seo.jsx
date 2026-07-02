import { useEffect } from 'react'

const SITE = 'https://kalosaligners.com'

function meta(attr, key, content) {
  if (content == null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function link(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Per-page SEO: sets a unique title, description, canonical, Open Graph,
// Twitter and (optional) JSON-LD for each route so every page is indexed
// separately by Google and understood by AI/GEO crawlers.
export default function Seo({ title, description, path = '/', image = '/images/model.jpg', jsonLd }) {
  const url = SITE + path
  useEffect(() => {
    if (title) document.title = title
    meta('name', 'description', description)
    link('canonical', url)

    meta('property', 'og:title', title)
    meta('property', 'og:description', description)
    meta('property', 'og:url', url)
    meta('property', 'og:image', image.startsWith('http') ? image : SITE + image)

    meta('name', 'twitter:title', title)
    meta('name', 'twitter:description', description)
    meta('name', 'twitter:image', image.startsWith('http') ? image : SITE + image)

    let ld = document.getElementById('page-jsonld')
    if (jsonLd) {
      if (!ld) {
        ld = document.createElement('script')
        ld.type = 'application/ld+json'
        ld.id = 'page-jsonld'
        document.head.appendChild(ld)
      }
      ld.textContent = JSON.stringify(jsonLd)
    } else if (ld) {
      ld.remove()
    }
  }, [title, description, url, image, jsonLd])

  return null
}
