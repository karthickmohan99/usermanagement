/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Table, Button, Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getuser } from '../../State /Action/Action';
import { useNavigate } from 'react-router';
import Popup from '../../Components/Popup';

export interface EditData {
  email: string;
  id: number | string;
  name: string;
  password: string;
  i: number;
}
const Home = () => {
  const dispatch: any = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state: any) => state.allreducer.user);

  console.log(user, 'Homeuseselector');
  const [userDatas, setUserDatas] = useState<string | number>('0');
  const [showModal, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);

  //delete onClick
  const onDelete = (e: React.MouseEvent<HTMLElement>, userData: string | number): void => {
    e.preventDefault();
    setShow(true);
    setUserDatas(userData);
  };

  //edit onClick
  const handleEdit = (userData: EditData) => {
    console.log(userData, 'type of userdata');
    navigate(`/Modals/${userData.id}`);
  };

  //add onClick
  const onAdd = () => {
    navigate('/add');
  };

  useEffect(() => {
    dispatch(getuser());
    setTimeout(() => {
      dispatch(getuser());
    }, 60000);
  }, [dispatch, navigate]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Navbar>
      <div>
        <h1 style={{ textAlign: 'center' }}> welcome Home </h1>

        <Table striped bordered hover data-testid="table">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>user ID</th>
              <th>name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.length > 0 &&
              user.map((userData: EditData, i: number) => {
                return (
                  <tr key={userData.i}>
                    <td>{i + 1}</td>
                    <td>{userData.id}</td>
                    <td>{userData.name}</td>
                    <td>{userData.email}</td>
                    <td>
                      <Button
                        onClick={() => {
                          handleEdit(userData);
                        }}
                        variant="dark"
                        data-testid="editid"
                        id="editbutton"
                        className="classedit">
                        Edit
                      </Button>
                    </td>

                    <td>
                      <Button
                        onClick={(e) => {
                          onDelete(e, userData.id);
                        }}
                        variant="danger"
                        data-testid="deleteFn"
                        id="deletebutton"
                        className="classdelete">
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <Button onClick={onAdd} className="addButton" variant="info">
          Add user
        </Button>
        {showModal && <Popup shows={showModal} onHides={handleClose} datas={userDatas} />}
      </div>
    </>
  );
};
export default Home;
