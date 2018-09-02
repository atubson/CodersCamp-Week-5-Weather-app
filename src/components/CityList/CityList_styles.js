import styled from 'styled-components';

export const Container = styled.div`
  font-size: var(--font-xl);
  width: 300px;
  height: 441px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 20px;
  border: 3px solid #0097d6;
  border-radius: 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 10px;
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    height: 10px;
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    background-color: #555;
  }
`;

export const UnorderedList = styled.ul`
  cursor: pointer;
  padding: 20px;
`;

export const ListItem = styled.li`
  display: grid;
  justify-content: flex-end;
  grid-gap: 10px;
  grid-template-columns: 2fr 25px 25px;
  grid-template-rows: 35px;
  grid-template-areas: 'city favbtn delbtn';
  &.selected {
    color: var(--primary3);
  }
`;

export const City = styled.div`
  grid-area: city;
  &:hover {
    color: var(--primary3);
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
