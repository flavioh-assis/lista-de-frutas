import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: solid 1px #d9d9d9;
  transition: 0.5s;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 4px 10px -5px rgba(0, 0, 0, 0.75);
  /* padding: 5px; */
`;

export const Head = styled.div`
  display: flex;
  /* padding: 5px 0; */
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
  /* background: lightGrey; */
  /* border: 1px solid black; */
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

  /* background: aquamarine; */

  :last-of-type {
    border: none;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 5px; */
  /* background: green; */
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  :nth-of-type(even) {
    background: #ddd;
  }
  /* padding: 5px; */
  /* background: red; */
  /* border: 1px solid black; */
  /* background: #1976d2; */
  /* color: white; */
  /* border-color: #1565c0; */
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
  /* background: aqua; */
  /* border: 2px solid black; */
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
  /* background: aquamarine; */
  /* flex: 1; */

  /* border: 2px solid black; */
`;
