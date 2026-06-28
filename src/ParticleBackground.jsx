import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -1000, y: -1000 })
  const particles = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let w, h

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    function initParticles() {
      const count = Math.min(80, Math.floor((w * h) / 15000))
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.5 + 0.5,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)

      const p = particles.current
      const mx = mouse.current.x
      const my = mouse.current.y

      for (let i = 0; i < p.length; i++) {
        const a = p[i]
        a.x += a.vx
        a.y += a.vy

        if (a.x < 0 || a.x > w) a.vx *= -1
        if (a.y < 0 || a.y > h) a.vy *= -1

        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(129, 140, 248, 0.4)'
        ctx.fill()

        for (let j = i + 1; j < p.length; j++) {
          const b = p[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(129, 140, 248, ${(1 - dist / 130) * 0.2})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }

        const dxm = a.x - mx
        const dym = a.y - my
        const distm = Math.sqrt(dxm * dxm + dym * dym)

        if (distm < 200) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(129, 140, 248, ${(1 - distm / 200) * 0.5})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    function onMove(e) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    function onLeave() {
      mouse.current.x = -1000
      mouse.current.y = -1000
    }

    resize()
    initParticles()
    draw()

    window.addEventListener('resize', () => {
      resize()
      initParticles()
    })
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

export default ParticleBackground
