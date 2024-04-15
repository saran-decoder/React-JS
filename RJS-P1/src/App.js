import { Component } from "react";
import Map from "./Map.js";
import Form from "./Form.js";

class App extends Component {
    render() {
        return (
            <>
                <Form />
                <Map />
            </>
        )
    }
}

export default App;