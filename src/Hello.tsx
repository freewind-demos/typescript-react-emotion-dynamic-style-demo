import { css } from '@emotion/css';
import React, { FC, useState } from 'react';

const styles = {
  hello: (baseFontSize: number) => css`
    background-color: #EEEEEE;
    font-size: ${baseFontSize * 2}px
  `
}

export const Hello: FC = () => {
  const [baseSize, setBaseSize] = useState(10)

  return <div >
    <div className={styles.hello(baseSize)}>Text</div>
    <button onClick={() => setBaseSize(n => n + 1)}>Increase Size</button>
  </div>;
}
