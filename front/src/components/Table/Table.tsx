import { Fruit } from '../../types';
import { ButtonIcon } from '../../components';
import {
  Body,
  Cell,
  CellAction,
  ColumnHeader,
  ColumnHeaderAction,
  Head,
  Row,
  RowEmpty,
  TableContainer,
} from './Table.styled';

type Props = {
  fruits: Fruit[];
};

const Table = ({ fruits }: Props) => {
  return (
    <TableContainer role='table'>
      <Head role='rowgroup'>
        <ColumnHeader role='columnheader'>Descrição</ColumnHeader>
        <ColumnHeader role='columnheader'>Valor A</ColumnHeader>
        <ColumnHeader role='columnheader'>Valor B</ColumnHeader>
        <ColumnHeaderAction role='columnheader'>Selecionar</ColumnHeaderAction>
        <ColumnHeaderAction role='columnheader'>Alterar</ColumnHeaderAction>
        <ColumnHeaderAction role='columnheader'>Excluir</ColumnHeaderAction>
      </Head>

      <Body>
        {fruits.length ? (
          fruits.map(f => (
            <Row key={f.id}>
              <Cell>{f.description}</Cell>

              <Cell>{f.valueA}</Cell>

              <Cell>{f.valueB}</Cell>

              <CellAction>
                <ButtonIcon icon='link' />
              </CellAction>

              <CellAction>
                <ButtonIcon icon='edit' />
              </CellAction>

              <CellAction>
                <ButtonIcon icon='delete' />
              </CellAction>
            </Row>
          ))
        ) : (
          <RowEmpty>Nenhuma fruta cadastrada</RowEmpty>
        )}
      </Body>
    </TableContainer>
  );
};

export default Table;

