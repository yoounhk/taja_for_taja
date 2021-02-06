import logo from './logo.svg';
import './App.css';
import React from 'react';
import KeystrokeSound from './keySound.mp3';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyPressed: '',
            keys: []
        };
    }

    componentDidMount() {
        document.onkeydown = this.onKeyDown;
    }

    onKeyDown = (e) => {
        let strokeSound = new Audio(KeystrokeSound);
        console.log(strokeSound);
        strokeSound.play();
        if (e.key === 'Backspace') {
            this.setState(current => (
                {
                    keyPressed : '',
                    keys : current.keys.slice(0, -1)
                }
            ))
        } else {
            let keys = this.state.keys;
            if (e.key === 'Enter') keys.push('\n');
            else {
                keys.push(e.key);
                this.setState({keyPressed: e.key});
                this.setState({keys: keys});
            }
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Type Anything.
                    </p>
                    <div>{this.state.keys.join('')}</div>
                </header>
            </div>
        );
    }

}

export default App;
