export default function ReadoutBar({ items, className = '' }) {
  return (
    <div
      className={`bp-readout flex flex-wrap items-center gap-x-4 gap-y-1 text-[9px] md:text-[10px] uppercase opacity-60 ${className}`}
    >
      {items.map(({ label, value }, i) => (
        <span key={label}>
          {label}: <span className="font-semibold">{value}</span>
          {i < items.length - 1 && <span className="mx-3 opacity-40">|</span>}
        </span>
      ))}
    </div>
  )
}
