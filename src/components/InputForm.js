import { useState } from "react";

import {
  MDBBtn,
  MDBValidation,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const InputForm = ({ setData, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });

  //changing the state of the form value on input change
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  //toggling modal on and off
  const toggleShow = () => {
    setShowModal(!showModal);
  };

  //adding new data onClick
  const onClick = () => {
    //checking if email exists
    // if email exists returns the email value else undefined.
    let emailExists = data.find((item) => item.email === formValue.email);
    if (
      formValue.name &&
      formValue.email &&
      formValue.email.includes("@") &&
      !emailExists
    ) {
      setData([...data, formValue]);
    }

    //if email exists or emailExists is not undefined show modal as warning.
    if (emailExists !== undefined) {
      toggleShow();
    }
  };

  return (
    <div>
      <MDBValidation className="row g-3 input-form" noValidate>
        <div className="col-md-5 mt-4 mb-4">
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              Name
            </span>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              value={formValue.name}
              onChange={onChange}
            />
            <div className="invalid-feedback">Please enter a name.</div>
          </div>
        </div>
        <div className="col-md-5 mt-4 mb-4">
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              value={formValue.email}
              onChange={onChange}
            />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
        </div>
        <MDBBtn
          onClick={onClick}
          type="submit"
          className="col-md-2 my-btn mt-4 mb-4"
          color="success"
        >
          Add
        </MDBBtn>
      </MDBValidation>
      <MDBModal
        show={showModal}
        getOpenState={(e) => setShowModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Email exists!</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              This email already exists, Please choose another one.
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="danger" onClick={toggleShow}>
                OK
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default InputForm;
