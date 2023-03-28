import styled from '@emotion/styled';
import { ButtonMain } from 'src/variables/mixins';

export const _LocationsRoot = styled.section`
  margin-left: 3.3rem;
`;

export const _LocationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.6rem 0 1.8rem;
`;

export const _Title = styled.h1`
  margin: 0;
  font-family: 'Montserrat', Roboto, Arial, sans-serif;
  font-weight: 800;
  font-size: 3.6rem;
  line-height: 2.9rem;
  color: #000000;
`;

export const _Button = styled(ButtonMain)`
  position: relative;
  cursor: pointer;
  margin-right: 3.1rem;
`;
