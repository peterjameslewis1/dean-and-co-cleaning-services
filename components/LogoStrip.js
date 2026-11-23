// "Trusted by" client logo strip.
// --k scales each logo so they look visually balanced; "dark" logos get a dark tile behind them.
const LOGOS = [
  { src: 'centaur', alt: 'Centaur Housing', w: 311, h: 120, k: 1 },
  { src: 'ls6', alt: 'LS6 Rentals', w: 794, h: 120, k: 0.5, className: 'dark' },
  { src: 'horton', alt: 'Horton Housing', w: 234, h: 120, k: 1.05 },
  { src: 'hizzy', alt: 'Hizzy Properties', w: 205, h: 120, k: 1.6, className: 'dark hizzy' },
  { src: 'arkleboyce', alt: 'ArkleBoyce', w: 563, h: 120, k: 0.56 },
  { src: 'canopy', alt: 'Canopy', w: 314, h: 120, k: 0.8 },
  { src: 'garethvance', alt: 'Gareth Vance Salon', w: 989, h: 160, k: 0.62, className: 'dark' },
  { src: 'ultima', alt: 'Ultima Cleaning Academy', w: 120, h: 120, k: 1.25 },
  { src: 'cliffehouse', alt: 'Cliffe House Day Nursery', w: 315, h: 120, k: 1.1 },
  { src: 'cub', alt: 'Cub, the modern nursery', w: 728, h: 270, k: 1.05 },
]

export default function LogoStrip() {
  return (
    <section className="section tight logos-sec" aria-labelledby="trusted-h">
      <div className="wrap">
        <h2 id="trusted-h" className="logos-h">
          Trusted by
        </h2>
        <ul className="logo-strip reveal">
          {LOGOS.map((l) => (
            <li key={l.src} style={{ '--k': l.k }} className={l.className}>
              <img
                src={`/assets/img/logos/${l.src}.webp`}
                alt={l.alt}
                width={l.w}
                height={l.h}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
