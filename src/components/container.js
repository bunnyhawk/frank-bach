import React from 'react'

export default ({ children, className }) => (
  <div className={className} style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
)
