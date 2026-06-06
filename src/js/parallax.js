import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {

    ScrollTrigger.matchMedia({

      '(min-width: 769px)': () => {
        gsap.to('.logo', {
          scale: 0.82,
          opacity: 0.85,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: '150px top',
            scrub: 1,
          },
        })
      },
    })

    gsap.utils.toArray('.news-card').forEach((card) => {
      const img = card.querySelector('.news-card-img')

      gsap.from(card, {
        y: 50,
        opacity: 0,
        scale: 0.92,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      if (img) {
        gsap.from(img, {
          scale: 1.2,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    })

    gsap.utils.toArray('.nav-button').forEach((btn, i) => {
      gsap.from(btn, {
        y: 25,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        delay: i * 0.03,
        scrollTrigger: {
          trigger: btn.parentElement,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
  })
})
