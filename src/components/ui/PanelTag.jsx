export default function PanelTag({ index, label, tone = 'ink', className = '' }) {
  const toneClasses =
    tone === 'paper'
      ? 'border-paper/40 text-paper'
      : 'border-ink/30 text-ink'

  return (
    <div
      className={`bp-readout inline-flex items-center gap-2 border ${toneClasses} rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.15em] ${className}`}
    >
      <span className="text-orange font-semibold">{index}</span>
      <span className="opacity-70">{label}</span>
    </div>
  )
}
