import { useState, useRef, useEffect } from 'react'

const WHATSAPP = '918888507223'
const WA_TEXT = encodeURIComponent(
  "Hi Kalos! 👋 I just tried the smile preview and I'd love my personalised aligner plan. (I'll attach my smile photo here.)"
)
const waLink = `https://wa.me/${WHATSAPP}?text=${WA_TEXT}`
const AFTER_FILTER = 'brightness(1.14) contrast(1.12) saturate(1.12)'

export default function SmilePreview() {
  const [img, setImg] = useState(null)
  const [stage, setStage] = useState('idle') // idle | camera | scanning | done
  const [camErr, setCamErr] = useState(false)
  const fileRef = useRef(null)
  const videoRef = useRef(null)
  const streamRef = useRef(null)

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop())
      streamRef.current = null
    }
  }

  useEffect(() => {
    if (stage !== 'camera') return
    setCamErr(false)
    let active = true
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { setCamErr(true); return }
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' }, audio: false })
      .then((s) => {
        if (!active) { s.getTracks().forEach((t) => t.stop()); return }
        streamRef.current = s
        if (videoRef.current) { videoRef.current.srcObject = s; videoRef.current.play().catch(() => {}) }
      })
      .catch(() => setCamErr(true))
    return () => { active = false; stopStream() }
  }, [stage])

  useEffect(() => () => stopStream(), [])

  const startProcess = (dataUrl) => {
    setImg(dataUrl)
    setStage('scanning')
    setTimeout(() => setStage('done'), 2800)
  }

  const onFile = (e) => {
    const f = e.target.files && e.target.files[0]
    if (!f) return
    const reader = new FileReader()
    reader.onload = () => startProcess(reader.result)
    reader.readAsDataURL(f)
  }

  const capture = () => {
    const v = videoRef.current
    if (!v || !v.videoWidth) return
    const c = document.createElement('canvas')
    c.width = v.videoWidth
    c.height = v.videoHeight
    c.getContext('2d').drawImage(v, 0, 0)
    stopStream()
    startProcess(c.toDataURL('image/jpeg', 0.92))
  }

  const reset = () => {
    stopStream()
    setImg(null)
    setStage('idle')
    if (fileRef.current) fileRef.current.value = ''
  }

  const downloadPreview = () => {
    if (!img) return
    const image = new Image()
    image.onload = () => {
      const w = image.width, h = image.height
      const gap = Math.round(w * 0.03), pad = Math.round(h * 0.09)
      const c = document.createElement('canvas')
      c.width = w * 2 + gap
      c.height = h + pad
      const ctx = c.getContext('2d')
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, c.width, c.height)
      ctx.drawImage(image, 0, 0, w, h)
      ctx.filter = AFTER_FILTER
      ctx.drawImage(image, w + gap, 0, w, h)
      ctx.filter = 'none'
      ctx.fillStyle = '#7C1D2C'
      ctx.font = `bold ${Math.round(w * 0.06)}px Georgia, serif`
      ctx.textBaseline = 'middle'
      ctx.fillText('Before', 14, h + pad / 2)
      ctx.fillText('After (Simulated)', w + gap + 14, h + pad / 2)
      ctx.textAlign = 'right'
      ctx.fillText('Kalos aligners', c.width - 14, h + pad / 2)
      const a = document.createElement('a')
      a.href = c.toDataURL('image/png')
      a.download = 'kalos-smile-preview.png'
      a.click()
    }
    image.src = img
  }

  return (
    <section className="preview bg-alt" id="preview">
      <div className="container preview__inner">
        <div className="preview__copy">
          <span className="eyebrow">Orthodontist-led smile preview</span>
          <h2>See your new smile in 30 seconds</h2>
          <p>
            Scan with your camera or upload a selfie for a simulated smile preview —
            then get your personalised plan on WhatsApp from our experts.
          </p>
          <ul className="preview__list">
            <li>✓ Free, no obligation</li>
            <li>✓ Reviewed by certified orthodontists</li>
            <li>✓ Your photo stays private — processed on your device</li>
          </ul>

          {stage === 'idle' && (
            <div className="preview__opts">
              <button className="btn btn-accent btn-lg" onClick={() => setStage('camera')}>📷 Scan with camera</button>
              <button className="btn btn-outline btn-lg" onClick={() => fileRef.current && fileRef.current.click()}>Upload selfie</button>
            </div>
          )}

          {stage === 'done' && (
            <div className="preview__actions">
              <a className="btn btn-primary btn-lg" href={waLink} target="_blank" rel="noopener noreferrer">Get my plan on WhatsApp</a>
              <button className="btn btn-outline" onClick={downloadPreview}>Download preview</button>
              <button className="btn btn-ghost" onClick={reset}>Try again</button>
            </div>
          )}

          <input ref={fileRef} type="file" accept="image/*" hidden onChange={onFile} />
        </div>

        <div className="preview__visual">
          <div className="preview__stage">
            {stage === 'idle' && (
              <button className="preview__drop" onClick={() => setStage('camera')}>
                <span className="preview__drop-icon">📷</span>
                <strong>Scan your smile</strong>
                <small>Use your camera or upload a photo</small>
              </button>
            )}

            {stage === 'camera' && (
              <div className="preview__cam">
                {camErr ? (
                  <div className="preview__camerr">
                    <p>Camera not available or blocked.</p>
                    <button className="btn btn-accent" onClick={() => fileRef.current && fileRef.current.click()}>Upload a photo instead</button>
                    <button className="btn btn-ghost" onClick={reset}>Cancel</button>
                  </div>
                ) : (
                  <>
                    <video ref={videoRef} playsInline muted />
                    <span className="preview__camring" />
                    <div className="preview__cambar">
                      <button className="preview__shutter" onClick={capture} aria-label="Capture photo" />
                      <button className="btn btn-ghost preview__camcancel" onClick={reset}>Cancel</button>
                    </div>
                  </>
                )}
              </div>
            )}

            {stage === 'scanning' && img && (
              <div className="preview__scan">
                <img src={img} alt="Your smile" />
                <span className="preview__scanline" />
                <span className="preview__scantext">Analysing your smile…</span>
              </div>
            )}

            {stage === 'done' && img && (
              <div className="preview__ba">
                <figure>
                  <img src={img} alt="You now" />
                  <figcaption>You now</figcaption>
                </figure>
                <figure className="preview__afterimg">
                  <img src={img} alt="Simulated smile" />
                  <figcaption>Simulated ✨</figcaption>
                </figure>
              </div>
            )}
          </div>
          <span className="preview__caption">
            Simulated brighter, whiter preview — your actual teeth alignment is shown in your orthodontist’s 3D plan.
          </span>
        </div>
      </div>
    </section>
  )
}
