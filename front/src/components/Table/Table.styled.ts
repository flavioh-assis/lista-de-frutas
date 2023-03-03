import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: 0.5s;

  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 4px 10px -5px rgba(0, 0, 0, 0.75);
`;

export const Head = styled.div`
  display: flex;
  background: #4147ff;
  color: #fff;
  border-radius: 6px 6px 0 0;
`;

export const ColumnHeader = styled.div`
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;

  margin: 10px 0;
  padding: 0 10px;
  font-weight: bold;
  border-right: 1px solid #fff;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  background: #4147ff;

  padding: 1rem 0;
  font-weight: bold;
  border-radius: 0 0 6px 6px;
`;

export const ColumnHeaderAction = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  min-width: 5rem;
  margin: 10px 0;
  padding: 0 5px;
  border-right: 1px solid #fff;
  font-weight: bold;

  :last-of-type {
    border: none;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  :nth-of-type(even) {
    background: #eee;
  }
`;

export const RowEmpty = styled(Row)`
  padding: 10px;
`;

export const Cell = styled.div`
  display: flex;
  flex: 4;
  align-items: center;

  margin: 10px 0;
  padding: 0 10px;
  border-right: 1px solid grey;
`;

export const CellAction = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  min-width: 5rem;
  margin: 10px 0;
  padding: 0 5px;
  border-right: 1px solid grey;

  :last-of-type {
    border: none;
  }
`;
