import React from 'react';
import { Link } from 'gatsby'

const CtaButtonLink = ({ text, to, className, ...rest }) => {
  return (
    <Link
      to={to}
      className={["text-white hover:text-white focus:text-white active:text-white font-bold text-sm bg-blu hover:bg-darkBlu focus:bg-darkBlu active:bg-darkBlu px-5 py-3", className].join(' ')}
      {...rest}
    >
      { text}
    </Link>
  );
}

export default CtaButtonLink;