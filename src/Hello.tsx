import React, {FC, useState} from 'react';
import {css} from '@emotion/css';

const styles = {
  root: css`
    border: 1px solid red
  `,
  text: (color: string) => css`
    color: ${color}
  `
}
type Props = {};

export const Hello: FC<Props> = ({}) => {
  const [color, setColor] = useState<string>('')

  return <div className={styles.root}>
    <div className={styles.text('red')}>Red</div>
    <div className={styles.text('blue')}>Blue</div>
    <div className={styles.text(color)}>
      Input: <input type={'text'} value={color} onChange={event => setColor(event.target.value)}/>
    </div>
  </div>;
}
