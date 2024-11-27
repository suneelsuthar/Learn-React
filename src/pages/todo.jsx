import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyContext from "../context/MyContext";

const Todo = () => {
  const [todos, settodos] = useState([]);
  const [text, settext] = useState("");
  const [show, setShow] = useState(false);
  const [newtext, setnewtext] = useState("");
  const [selected, setselected] = useState();
  const {} = useContext(MyContext);

  const getlist = () => {
    fetch("https://dummyjson.com/todos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settodos(data.todos);
      });
  };

  useEffect(() => {
    getlist();
  }, []);

  const addItem = () => {
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: text,
        completed: true,
        userId: 1,
      }),
    })
      .then((res) => {
        console.log("item added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateItem = () => {
    /* updating completed status of todo with id 1 */
    fetch(`https://dummyjson.com/todos/${selected.id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: true,
        todo: newtext,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    setShow(false);
  };
  const deleteItem = (id) => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log("deleted succesfully"));
  };

  const updateSelected = (value) => {
    selected.todo = value;
    setselected({ ...selected });
  };
  return (
    <div>
      <br />

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <InputGroup>
          <InputGroup.Text id="basic-addon1">TODO</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            size="lg"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </InputGroup>
        <Button
          variant="primary"
          style={{ width: 140, height: 50 }}
          onClick={() => addItem()}
        >
          Add item
        </Button>
      </div>

      <br />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>UserID</th>

            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((val, i) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.todo}</td>
                <td>{val.completed ? "Completed" : "Pending"}</td>
                <td>{val.userId}</td>
                <td>
                  {" "}
                  <Button
                    variant="primary"
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      setselected(val);
                      setShow(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => deleteItem(val.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <InputGroup>
              <InputGroup.Text id="basic-addon1">TODO</InputGroup.Text>
              <Form.Control
                placeholder="Enter value here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                size="lg"
                value={selected?.todo}
                onChange={(e) => {
                  selected.todo = e.target.value;
                  setselected({ ...selected });
                }}
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateItem()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Todo;
