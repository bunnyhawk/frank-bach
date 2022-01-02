import React from 'react';

import styles from './sun.module.css';

const Sun = () => {
  return (
    <div className={[styles.sunWrapper, 'mr-2 inline-block'].join(' ')}>
      <img className="sun" src="/sun_symbol.png" alt="an illustrative sun" />
    </div>
  );
}

export default Sun
