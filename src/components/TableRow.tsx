// Core
import React, { FC } from "react";

// Types
import { UserData } from "../typespaces/UserData";

interface TableRowProps {
  user: UserData;
}

const TableRow: FC<TableRowProps> = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.title}</td>
      <td>{user.body}</td>
    </tr>
  );
};

export default TableRow;
