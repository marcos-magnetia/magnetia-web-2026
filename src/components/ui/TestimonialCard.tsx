import type { TestimonialData } from '@/lib/constants'

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrellas">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#E64A58">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialCard({ text, name, role, company }: TestimonialData) {
  return (
    <div className="w-[340px] md:w-[400px] flex-shrink-0 p-7 border border-magnetia-black/[0.06] bg-white flex flex-col gap-4">
      <Stars />
      <p className="text-[15px] text-magnetia-black/80 leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-magnetia-black/[0.04]">
        <div className="w-10 h-10 rounded-full bg-magnetia-red/10 flex items-center justify-center text-xs font-bold text-magnetia-red">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-magnetia-black/40">{role}, {company}</p>
        </div>
      </div>
    </div>
  )
}
