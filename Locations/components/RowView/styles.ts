import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from 'src/variables/variables';

export const _TableHeaderRow = css`
  height: 100%;
  display: grid;
  grid-template-columns: 7% 15% 16% 13.2% 17.1% 11.8% 11.7% 7.4%;
`;

export const _TableRow = styled.div`
  composes: ${_TableHeaderRow};
  height: auto;
  min-height: 7rem;
  border-bottom: 1px solid #e5e5e5;
  padding: 0.8rem 0;
  color: #626262;
  background: rgba(255, 255, 255, 0.5);
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

export const _LocationsName = styled.div`
  font-weight: 900;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${colors.main};
  text-transform: uppercase;
  word-break: break-word;
`;

export const _Code = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2rem;
  word-break: break-word;
  width: 100%;
`;

export const _Address = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  word-wrap: break-word;
  width: 100%;
`;

export const _Name = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8rem;
  word-break: break-word;
`;

export const _Phone = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  word-break: break-word;
`;

export const _CommentText = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  word-break: break-word;
`;

export const _TableIcons = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const _IconDelete = styled.div`
  cursor: pointer;
`;

export const _TableCellCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
