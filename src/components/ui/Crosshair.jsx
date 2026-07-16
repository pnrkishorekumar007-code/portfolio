const POSITION_CLASSES = {
  tl: 'bp-cross-tl',
  tr: 'bp-cross-tr',
  bl: 'bp-cross-bl',
  br: 'bp-cross-br',
}

export default function Crosshair({ position = 'tl', className = '' }) {
  return <div className={`bp-cross ${POSITION_CLASSES[position]} ${className}`} aria-hidden="true" />
}
