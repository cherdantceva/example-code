import styled from '@emotion/styled';

export const _TableLocationsRoot = styled.div`
  height: calc(100vh - 17rem);
  padding-top: 5.8rem;
`;

export const _TableLocationsHeader = styled.div`
  height: 4rem;
`;

export const _TableHeaderRow = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 7% 15% 16% 13.2% 17.1% 11.8% 11.7% 7.4%;
`;

export const _TableHeaderItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #626262;
`;

type TableContainerProps = {
  isEmpty: boolean;
};

export const _TableContainer = styled.div<TableContainerProps>`
  border-top: ${(props) => (props.isEmpty ? 'none' : '1px solid #e5e5e5')};
  border-radius: 0.8rem;
  margin-right: 0.5rem;
  height: 100%;
  max-height: calc(100% - 4rem);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  scrollbar-width: none;
`;

type TableBodyProps = {
  isEmpty: boolean;
};

export const _TableBody = styled.div<TableBodyProps>`
  border: ${(props) => (props.isEmpty ? 'none' : '1px solid #e5e5e5')};
  border-top: none;
  border-radius: 0.8rem;
`;
