import type { SVGProps } from 'react'

const FlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <title id="flag-icon">Gastos por partido</title>
    <g clipPath="url(#a)">
      <path d="M4 22.667A.667.667 0 0 1 3.333 22V2a.667.667 0 0 1 1.334 0v20a.667.667 0 0 1-.667.667ZM20.367 2.547a.667.667 0 0 0-.667 0 9.933 9.933 0 0 1-4.087.773 8.733 8.733 0 0 1-3.453-.993 8.534 8.534 0 0 0-3.333-.967A7.267 7.267 0 0 0 6 1.9v1.487a5.867 5.867 0 0 1 2.833-.72c.98.097 1.932.387 2.8.853a9.867 9.867 0 0 0 4 1.107c1.254.004 2.501-.18 3.7-.547v8.553a10.801 10.801 0 0 1-3.72.62 8.734 8.734 0 0 1-3.453-.993 8.533 8.533 0 0 0-3.333-.967A7.268 7.268 0 0 0 6 11.86v1.473a5.865 5.865 0 0 1 2.833-.72c.98.097 1.932.387 2.8.854a9.868 9.868 0 0 0 4 1.106 11.2 11.2 0 0 0 4.667-.913.666.666 0 0 0 .367-.593V3.113a.668.668 0 0 0-.3-.566Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default FlagIcon
