import { FieldError } from 'react-hook-form';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Input } from 'src/variables/mixins';
import { colors } from 'src/variables/variables';

type TableInputProps = {
  noValid?: FieldError;
};

export const TableHeaderRow = css`
  height: 100%;
  display: grid;
  grid-template-columns: 7% 15% 16% 13.2% 17.1% 11.8% 11.7% 7.4%;
`;

export const _TableRowForm = styled.form`
  composes: ${TableHeaderRow};
  height: auto;
  min-height: 7rem;
  border-bottom: 1px solid #e5e5e5;
  padding: 8px 0;
  color: #626262;
  &:last-child {
    border-bottom: none;
  }
`;

export const _TableCell = styled.div`
  display: flex;
  align-items: center;
  padding-right: 3rem;
  &:last-child {
    padding-right: 0;
  }
`;

export const _TableIcons = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const _TableIconsAdd = styled(_TableIcons)`
  padding: 0 2rem;
`;

export const _IconEdit = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const IconDelete = styled.div`
  cursor: pointer;
`;

export const _IconCrossDelete = styled(IconDelete)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const _IconCheck = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  margin-left: 0.6rem;
`;

export const _TableCellCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const _InputContainer = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
`;

export const _TableInput = styled(Input)<TableInputProps>`
  font-family: Roboto, Arial, sans-serif;
  width: 100%;
  padding: 0;
  position: relative;
  border-color: ${(props) => (props.noValid ? '#D13239' : '#E5E5E5')};
`;

export const _LocationsNameInput = styled(_TableInput)`
  font-weight: 900;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${colors.main};
  text-transform: uppercase;
  word-break: break-word;
`;

export const _CodeInput = styled(_TableInput)`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2rem;
`;

export const _AddressInput = styled(_TableInput)`
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

export const _NameInput = styled(_TableInput)`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8rem;
`;

export const _PhoneInput = styled(_TableInput)`
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const _CommentTextInput = styled(_TableInput)`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const _InputValid = styled.div`
  position: absolute;
  bottom: -4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: #d13239;
  border-radius: 3px;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  white-space: nowrap;
  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    left: 50%;
    background: #d13239;
    height: 1.2rem;
    width: 1.2rem;
    transform: rotate(45deg) translate(-120%, -50%);
  }
`;
