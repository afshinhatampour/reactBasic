import {Component} from "react";

class Counter extends Component {
    static defaultProps = {
        startAt: 0,
        countBy: 1
    }

    constructor(props) {
        super(props);
        this.state = {
            counter: props.startAt
        };
    }

    countUp() {
        console.log('up')
        this.setState({counter: this.state.counter + this.props.countBy})
    }

    countDown() {
        console.log('down')
        this.setState({counter: this.state.counter - this.props.countBy})
    }

    render() {
        return (
            <>
                <p>Start at: {this.props.startAt}</p>
                <p>Count by: {this.props.countBy}</p>
                <h4>{this.state.counter}</h4>
                <button className="btn btn-primary" onClick={() => this.countUp()}>Count up</button>
                <button className="btn btn-danger" onClick={() => this.countDown()}>Count down</button>
            </>
        );
    }
}

export default Counter;