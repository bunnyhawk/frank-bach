import React from 'react'

export default ({ children, className, isNarrow }) => (
  <div className={[className, 'mx-auto'].join(' ')} style={{ maxWidth: isNarrow ? 830 : 1258 }}>
    {children}
  </div>
)
