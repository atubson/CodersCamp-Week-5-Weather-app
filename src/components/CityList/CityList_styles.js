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
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export const UnorderedList = styled.ul`
  cursor: pointer;
  display: grid;
  grid-row-gap: 10px;
`;

export const ListItem = styled.li`
  display: grid;
  justify-content: flex-end;
  grid-column-gap: 10px;
  grid-template-columns: 2fr 15px 15px;
  grid-template-areas: 'city favbtn delbtn';
  &.selected {
    color: var(--primary3);
  }
`;

export const City = styled.div`
  grid-area: city;
  &:hover {
    color: #0097d6;
  }
`;

export const FavButton = styled.div`
  grid-area: favbtn;
  align-self: center;
`;

export const DelButton = styled.div`
  grid-area: delbtn;
  align-self: center;
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
