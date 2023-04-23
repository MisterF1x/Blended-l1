import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatDate } from 'helpers/formatDate';
import PropTypes from 'prop-types';

const tableHeaders = ['№', 'price', 'amount', 'date'];



export const CryptoHistory = ({ items }) => {
  return <BaseTable>
      <THead>
        <tr>
          {tableHeaders.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </tr>
      </THead>

  <tbody>
    {
      items.map(( {id, price, amount, date }, idx)=>(
        <Tr key={id}>
        <Td>{ idx + 1 }</Td>
        <Td>{ price }</Td>
        <Td>{ amount }</Td>
        <Td>{ formatDate(date) }</Td>
      </Tr>
      ))
    }
 
  </tbody>
</BaseTable>
};

CryptoHistory.protoTypes = {
items: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
})
).isRequired
};
