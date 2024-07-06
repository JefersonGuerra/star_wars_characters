import { HTMLAttributes } from 'react'
export default function LoadingRing({ border, ...props }: Props) {
  return (
    <div>
      <div {...props}>
        <div className={border}></div>
        <div className={border}></div>
        <div className={border}></div>
        <div className={border}></div>
      </div>
    </div>
  )
}

interface Props extends HTMLAttributes<HTMLElement> {
  border?: string
}