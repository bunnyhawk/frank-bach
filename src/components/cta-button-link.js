import React from 'react';
import { Link } from 'gatsby'

const CtaButtonLink = ({ text, to, className, ...rest }) => {
  return (
    <Link
      to={to}
      className={["text-white font-bold text-sm bg-blu px-5 py-3 mb-20", className].join(' ')}
      {...rest}
    >
      { text}
    </Link>
  );
}

export default CtaButtonLink;