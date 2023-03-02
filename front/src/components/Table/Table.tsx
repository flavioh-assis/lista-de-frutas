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
  setSelectedFruit: React.Dispatch<React.SetStateAction<Fruit>>;
  handleDelete: (id: number) => Promise<void>;
};

const Table = ({ fruits, setSelectedFruit, handleDelete }: Props) => {
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
                <ButtonIcon
                  icon='link'
                  onClick={() => console.log('link')}
                />
              </CellAction>

              <CellAction>
                <ButtonIcon
                  icon='edit'
                  onClick={() => setSelectedFruit(f)}
                />
              </CellAction>

              <CellAction>
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
