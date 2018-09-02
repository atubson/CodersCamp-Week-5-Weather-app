import styled from 'styled-components';

export const Container = styled.div`
  padding: var(--space-lg);
  font-size: var(--font-xl);
  font-family: var(--mainFont);
  font-weight: var(--medium);
  color: var(--text1);
  width: 30%;
  height: 100%;
  float: right;
  border-radius: 15px;
  position: absolute;
  right: 0;
  overflow-y: auto;
  border: 3px solid rgba(0, 151, 214, 0.6);
  background-color: rgba(255, 255, 255, 0.6);
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
    color: #0097d6;
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
