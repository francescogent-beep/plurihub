interface PluriHubMarkProps {
  height?: number
  className?: string
}

export default function PluriHubMark({ height = 20, className = '' }: PluriHubMarkProps) {
  return (
    <svg
      height={height}
      viewBox="3 7 58 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <path
        d="M31.7 33.8L21.8 18.6M32.3 33.8L42.2 18.6M31 34.4L16 31.6M33 34.4L48 31.6"
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="38.5" r="11" fill="currentColor" />
      <circle cx="18" cy="15.5" r="6.3" fill="currentColor" />
      <circle cx="46" cy="15.5" r="6.3" fill="currentColor" />
      <circle cx="11.8" cy="40" r="6.3" fill="currentColor" />
      <circle cx="52.2" cy="40" r="6.3" fill="currentColor" />
    </svg>
  )
}
