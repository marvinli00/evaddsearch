import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from "./logo.svg";
import {Form, InputGroup, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const searchField = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    padding: "10px",
    margin: "auto",

}

const sectionTitle = {
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '20px',
}

const container = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
}

const inputText = {
    width: "200px",
    margin: "10px",
    fontSize: "12px",
}

const inputText2 = {
    width: "200px",
    margin: "10px",
    fontSize: "14px",
    color: "grey",
}

const inputText3 = {
    width: "200px",
    margin: "10px",
    fontSize: "14px",
    color: "dark",
}

const selectInput = {
    fontSize: "14px",
    margin: "10px",
    width: "200px",
    color: "grey",
}

const submitButton = {
    marginTop: "20px",
    backgroundColor: "#87bdd8",
    border: '0px',
}

const reminderText = {
    marginTop: "40px",
}


function App() {
    // const [style, setStyle] = useState("inputText2");
    // const changeStyle = () => {
    //     console.log("you just clicked");
    //     setStyle("inputText3");
    // };
    return (

            <div style={searchField}>
                <Form>
                    <Form.Group controlId="formBasicInput">
                        <div style={sectionTitle}>
                            <Form.Label>Please input keywords (not required): </Form.Label>
                        </div>
                        <div style={container}>
                            <Form.Control style={inputText} type="pubmedID" placeholder="PubMed ID" />
                            <Form.Control style={inputText} type="gene" placeholder="Gene Name (e.g. GAPDH)" />
                            <Form.Control style={inputText} type="pubmedID" placeholder="Author's Lastname (e.g. Webster)" />
                            <Form.Control style={inputText} type="gene" placeholder="Disease (e.g. Melanoma)" />
                        </div>

                        {/*<Form.Text className="text-muted">*/}
                        {/*    Can put any comment, instructions, etc.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <div style={sectionTitle}>
                            <Form.Label>Please select EV isolation technique (not required): </Form.Label>
                        </div>
                        <div style={container}>
                            <Form.Check style={inputText2} type="checkbox" label="Ultracentrifugation"/>
                            <Form.Check style={inputText2} type="checkbox" label="Density Gradient" />
                            <Form.Check style={inputText2} type="checkbox" label="Size Exclusion Chromatography" />
                            <Form.Check style={inputText2} type="checkbox" label="Ultrafiltration" />

                        </div>

                        {/*<Form.Text className="text-muted">*/}
                        {/*    Can put any comment, instructions, etc.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <div style={container}>
                            <Form.Group controlId="formBasicCheckbox">
                                <div style={sectionTitle}>
                                    <Form.Label>Please select (not required): </Form.Label>
                                </div>
                                <div style={container}>
                                    <Form.Select style={selectInput} aria-label="Default select example">
                                        <option>Disease</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Select style={selectInput} aria-label="Default select example">
                                        <option>Fluid Source</option>
                                        <option value="1">Cell culture media</option>
                                        <option value="2">Plasma</option>
                                        <option value="3">Saliva</option>
                                        <option value="3">Urine</option>
                                    </Form.Select>
                                    <Form.Select style={selectInput} aria-label="Default select example">
                                        <option>DNA Analysis Method</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Select style={selectInput} aria-label="Default select example">
                                        <option>Publication Year</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>

                                </div>
                                <Form.Text className="text-muted" style={reminderText}>
                                    Please input at least one field from above
                                </Form.Text>


                            </Form.Group>
                        </div>

                    </Form.Group>

                    <Button style={submitButton} variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>




   /*     <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div> */
    );
}

ReactDOM.render(

    <App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
