import { Fruit } from '../../types';
import { ButtonIcon, LinkIcon } from '../../components';
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
  setSelectedFruit: React.Dispatch<React.SetStateAction<Fruit>>;
  handleDelete: (id: number) => Promise<void>;
};

const Table = ({ fruits, setSelectedFruit, handleDelete }: Props) => {
  return (
    <TableContainer role='table'>
      <Head role='row'>
        <ColumnHeader role='columnheader'>Descrição</ColumnHeader>
        <ColumnHeader role='columnheader'>Valor A</ColumnHeader>
        <ColumnHeader role='columnheader'>Valor B</ColumnHeader>
        <ColumnHeaderAction role='columnheader'>Selecionar</ColumnHeaderAction>
        <ColumnHeaderAction role='columnheader'>Alterar</ColumnHeaderAction>
        <ColumnHeaderAction role='columnheader'>Excluir</ColumnHeaderAction>
      </Head>

      <Body role='rowgroup'>
        {fruits.length ? (
          fruits.map(f => (
            <Row
              role='row'
              key={f.id}
            >
              <Cell role='cell'>{f.description}</Cell>
              <Cell role='cell'>{f.valueA}</Cell>
              <Cell role='cell'>{f.valueB}</Cell>

              <CellAction role='cell'>
                <LinkIcon
                  path='/calculate'
                  fruit={f}
                />
              </CellAction>

              <CellAction role='cell'>
                <ButtonIcon
                  icon='edit'
                  onClick={() => setSelectedFruit(f)}
                />
              </CellAction>

              <CellAction role='cell'>
                <ButtonIcon
                  icon='delete'
                  onClick={() => handleDelete(f.id)}
                />
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
