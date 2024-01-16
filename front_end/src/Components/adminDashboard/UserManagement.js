import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import HeaderMenu from "./HeaderMenu";

const UserManagement = () => {
  const [isReported, setIsReported] = useState(false);

  const NotReportedTable = () => {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#ID utilisateur</th>
            <th>Pseudo</th>
            <th>Email</th>
            <th>Statut</th>
            <th>Voir plus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Otto</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td></td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  function ReportedTable() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#ID utilisateur signaleur</th>
            <th>#ID utilisateur signalé</th>
            <th>Raison du signalement</th>
            <th>Nombre de signalement</th>
            <th>Voir plus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Otto</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td></td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  return (
    <div>
      <HeaderMenu />
      {!isReported ? <NotReportedTable /> : <ReportedTable />}
    </div>
  );
};

export default UserManagement;
