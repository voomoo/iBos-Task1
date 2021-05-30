import { useState } from "react";
import {
  MDBTableBody,
  MDBTableHead,
  MDBTable,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const DataTable = ({ setData, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Data delete logics
  const handleDelete = (index) => {
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  //toggling modal on and off
  const toggleShow = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="data-table">
      <MDBTable striped bordered>
        <MDBTableHead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {" "}
                <MDBBtn
                  color="danger"
                  onClick={() => {
                    toggleShow();
                    setDeleteIndex(index);
                  }}
                >
                  Delete
                </MDBBtn>{" "}
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <MDBModal
        show={showModal}
        getOpenState={(e) => setShowModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Confirm!</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Are you sure you want to delete this item?
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                color="danger"
                onClick={() => {
                  handleDelete(deleteIndex);
                  toggleShow();
                }}
              >
                Yes
              </MDBBtn>
              <MDBBtn color="danger" onClick={toggleShow}>
                No
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default DataTable;
