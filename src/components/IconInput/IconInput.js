import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder, id }) => {
  return (
    <InputWrapper size={size} width={width}>
      <InputLabel for={id}>
        <Icon id={icon} {...SIZES_ICON_STYLE_MAP[size]} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </InputLabel>
      <NativeInput placeholder={placeholder} id={id} size={size} />
      <FocusOutilne />
    </InputWrapper>
  );
};

const SIZES_WRAPPER_STYLE_MAP = {
  small: css`
    --font-size: ${14 / 16}rem;
    --line-height: 1rem;
    --padding-left: 24px;
  `,
  large: css`
    --font-size: ${18 / 16}rem;
    --line-height: ${21 / 16}rem;
    --padding-left: 36px;
  `,
};

const NativeInput = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  font-weight: 700;
  max-width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  ${({ size = 'small' }) => SIZES_WRAPPER_STYLE_MAP[size]};
  border-bottom: 1px solid ${COLORS.black};
  width: fit-content;
  width: ${({ width }) => `${width}px`};
  padding: 4px 0;
  padding-left: var(--padding-left);
  font-size: var(--font-size);
  line-height: var(--line-height);
  color: ${COLORS.gray700};
  isolation: isolate;

  &:hover {
    color: ${COLORS.black};
  }
`;

const SIZES_ICON_STYLE_MAP = {
  small: {
    size: 16,
  },
  large: {
    size: 24,
  },
};

const InputLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: 4px;
`;

const FocusOutilne = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  ${NativeInput}:focus + & {
    border-radius: 2px;
    outline: 2px solid #4374cb;
    outline-offset: 2px;
  }
`;

export default IconInput;
