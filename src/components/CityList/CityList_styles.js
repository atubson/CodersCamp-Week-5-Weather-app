import styled from 'styled-components';

export const Container = styled.div`
  margin: var(--space-lg);
  font-size: var(--font-xl);
  color: ${props => (props.color === 'default' ? 'var(--text1)' : 'var(--primary2)')};
  width: 300px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const UnorderedList = styled.ul`
  cursor: pointer;
`;

export const ListItem = styled.li`
  display: grid;
  justify-content: flex-end;
  grid-gap: 10px;
  grid-template-columns: 2fr 25px 25px;
  grid-template-rows: 25px;
  grid-template-areas: 'city favbtn delbtn';
`;

export const City = styled.div`
  grid-area: city;
  &:hover {
    color: var(--grey1);
  }
`;

export const FavButton = styled.div`
  grid-area: favbtn;
`;

export const DelButton = styled.div`
  grid-area: delbtn;
`;

export const IHeart = styled.i`
  color: var(--grey2);
  font-size: var(--font-lg);
  &:hover {
    color: var(--error);
  }
  &.fas {
    color: var(--error);
  }
`;

export const ITrash = styled.i`
  color: var(--grey2);
  font-size: var(--font-lg);
  &:hover {
    color: var(--grey1);
  }
`;
