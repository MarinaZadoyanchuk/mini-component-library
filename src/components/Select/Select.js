import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange} label={label}>
        {children}
      </NativeSelect>
      <DispayedValue>
        <span>{displayedValue}</span>
        <StyledIcon id='chevron-down' size={24} />
      </DispayedValue>
    </SelectWrapper>
  );
};

export default Select;

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  isolation: isolate;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;


const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  width: 100%;
  inset: 0;
  appearance: none;
  z-index: 1;
  cursor: pointer;
`;

const DispayedValue = styled.div`
  color: inherit;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  white-space: nowrap;

  ${NativeSelect}:focus + & {
    outline: 5px solid ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 10px;
  color: inherit;
`;

