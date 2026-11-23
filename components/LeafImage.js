// Rounded "leaf" image used beside text in split sections.
// `img` is the base filename in /assets/img; the "-sm" version is served to small screens.
// `style` is applied to the rounded frame, e.g. { aspectRatio: '4/4.4' } for a taller crop.
export default function LeafImage({
  img,
  alt,
  sizes = '(max-width:860px) 100vw, 50vw',
  width = 1400,
  height = 933,
  style,
}) {
  return (
    <div className="media reveal">
      <div className="leaf-img" style={style}>
        <img
          src={`/assets/img/${img}.webp`}
          srcSet={`/assets/img/${img}-sm.webp 760w, /assets/img/${img}.webp 1400w`}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
