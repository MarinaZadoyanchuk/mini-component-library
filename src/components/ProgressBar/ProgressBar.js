/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size, label = 'Loading...', max = 100 }) => {
  return (
    <ProgressBase
      value={value}
      max={max}
      aria-label={label}
      size={size}
    ></ProgressBase>
  );
};

const SIZES_STYLE_MAP = {
  small: `
    --height: 8px;
    --padding: 0px;
    --border-radius: 4px;
    --value-border-radius: 4px;
  `,
  medium: `
    --height: 12px;
    --padding: 0px;
    --border-radius: 4px;
    --value-border-radius: 4px;
  `,
  large: `
    --height: 24px;
    --padding: 4px;
    --border-radius: 8px;
    --value-border-radius: 4px;
  `,
};

const ProgressBase = styled.progress`
  ${({ size = 'medium' }) => SIZES_STYLE_MAP[size]}

  appearance: none;
  height: var(--height);
  width: 370px;
  max-width: 100%;
  box-sizing: border-box;

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--border-radius);
    padding: var(--padding);
  }

  &::-webkit-progress-value {
    background-color: blue;
    border-radius: ${({ value, max = 100 }) =>
      value < max
        ? 'var(--value-border-radius) 0 0 var(--value-border-radius)'
        : 'var(--value-border-radius)'};
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
