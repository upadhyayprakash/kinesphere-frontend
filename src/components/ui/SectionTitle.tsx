interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  )
}
