// Core
import { FC, useState } from "react";

// Components
import TableRow from "./TableRow";

// Types
import { UserData } from "../typespaces/UserData";

interface UserTableProps {
  data: UserData[];
}

const Table: FC<UserTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;
  const lastRecordIndex = currentPage * recordsPerPage;
  const firstRecordIndex = lastRecordIndex - recordsPerPage;
  const currentRecords = data.slice(firstRecordIndex, lastRecordIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(data.length / recordsPerPage) }).map(
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  index + 1 === currentPage ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Table;
