import React, { useState, useEffect, useContext } from "react";
import { useNavigate ,useLocation} from "react-router-dom";
import { Header } from "../components/header";
import { PriceCard } from "../components/priceCard";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
// import MyContext from './MyContext';

import { db, storage } from "../firebase";
import MyContext from "../context/MyContext";
// import {  deleteObject } from "firebase/storage";

const Home = (props) => {
  const [validated, setValidated] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");
  const [cities, setcities] = useState([]);
  const [url, seturl] = useState("");
  const location = useLocation()
  const { sharedState, setSharedState, value, setvalue,user,logout } = useContext(MyContext);


  console.log("====home user===+>",location.state.id)








  const handleSubmit = async (event) => {
    const docRef = await addDoc(collection(db, "cities"), {
      firstname: firstname,
      lastname: lastname,
      username: username,
      city: city,
      state: state,
      zip: zip,
      createdAt: serverTimestamp(),
    });
    getData();
  };

  const deleteDate = async (id) => {
    await deleteDoc(doc(db, "cities", id));
    getData();
  };

  const getData = async () => {
    const q = query(collection(db, "cities"));
    var newArr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      data.id = doc.id;
      newArr.push(data);

      // doc.data() is never undefined for query doc snapshots
      console.log(data);
    });

    setcities(newArr);
  };

  useEffect(() => {
    getData();
  }, []);

  const uploadFile = (e) => {
    var file = e.target.files[0];
    // const storage = getStorage();

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          seturl(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  console.log("===========>", cities);

  const deleteImg = () => {
    // Create a reference to the file to delete
    const desertRef = ref(storage, "images/rivers.jpg");

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };
  return (
    <div>
      
      <Header title="Home Page" />
      <br />
      <br />

      <img src={url} height={100} width={100} />
      <Container>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" onChange={(e) => uploadFile(e)} />
        </Form.Group>
        <Button onClick={() => deleteImg()}>Delete</Button>
        <Container onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setcity(e.target.value)}
                type="text"
                placeholder="City"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                value={state}
                onChange={(e) => setstate(e.target.value)}
                placeholder="State"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                value={zip}
                onChange={(e) => setzip(e.target.value)}
                placeholder="Zip"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
        </Container>
        <br />
        <br />

        <Container>
          <h1>Results:{cities.length}</h1>
          {cities.map((val, i) => {
            return (
              <ListGroup style={{ marginBottom: 20 }}>
                {console.log(val)}
                <ListGroup.Item>First Name:{val.firstname}</ListGroup.Item>
                <ListGroup.Item>Last Name:{val.lastname}</ListGroup.Item>
                <ListGroup.Item>Username :{val.username}</ListGroup.Item>
                <ListGroup.Item>City:{val.city}</ListGroup.Item>
                <ListGroup.Item>State:{val.state}</ListGroup.Item>
                <ListGroup.Item>Zipcode:{val.zip}</ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger" onClick={() => deleteDate(val.id)}>
                    Delete
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </Container>
      </Container>
    </div>
  );
};

export default Home;

// class Home extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return <div>hello world kaslkjfasfj</div>;
//   }
// }

// export default Home
