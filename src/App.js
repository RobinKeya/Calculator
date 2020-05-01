import React, { Component } from 'react';
import ResultComponent from './result';
import KeyPad from './KeyPad';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate(){
        return(
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        );
    };

    reset(){ 
        return(
        this.setState({
            result: ""
        })
        )
    };

    backspace(){
        return(
        this.setState({
            result: this.state.result.slice(0, -1)
        })
        )
    };

    render() {
        return (
            <div>

                <div className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;