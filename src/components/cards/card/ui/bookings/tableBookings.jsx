import Table from 'react-bootstrap/Table';

function BookingsTable({ bookings }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };
  return (
    <>
      <div className="table">
        <Table striped bordered hover size="sm" className="my-0">
          <thead>
            <tr>
              <th>Bookings</th>
              <th>From</th>
              <th>To</th>
              <th>Guests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{formatDate(item.dateFrom)}</td>
                <td>{formatDate(item.dateTo)}</td>
                <td>{item.guests}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default BookingsTable;
