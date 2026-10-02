function Mandacaru({ className }) {
  return (
    <svg className={className} viewBox="0 0 152 290" aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M76 290 L76 44" strokeWidth="46" />
        <path d="M76 168 L48 168 Q30 168 30 148 L30 104" strokeWidth="34" />
        <path d="M76 212 L104 212 Q120 212 120 192 L120 154" strokeWidth="32" />
      </g>
    </svg>
  )
}

function Palma({ className }) {
  return <img className={className} src="/assets/folha.png" alt="" aria-hidden="true" />
}

function Sol({ className }) {
  return <img className={className} src="/assets/sol.png" alt="" aria-hidden="true" />
}

export { Mandacaru, Palma, Sol }
