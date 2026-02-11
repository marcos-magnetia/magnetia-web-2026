export function MeshGradientBg() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(circle at 15% 20%, rgba(230,74,88,0.04) 0%, transparent 50%),
          radial-gradient(circle at 85% 75%, rgba(26,26,26,0.03) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(230,74,88,0.02) 0%, transparent 70%),
          #FFFFFF
        `,
      }}
    />
  )
}
