import React from "react";
import View from "./view";

const format = time => {
    let timeStr = "";
    const zero = "0";
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (seconds < 10) {
        timeStr = `${minutes}:${zero}${seconds}`;
    } else {
        timeStr = `${minutes}:${seconds}`;
    }

    return timeStr;
};
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevTime: 1500,
            time: 1500,
            running: false,
            message: "This is a message",
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.incrementTime = this.incrementTime.bind(this);
        this.decrementTime = this.decrementTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    time() {
        const ref = setInterval(() => {
            if (this.state.time <= 0 || this.state.running === false) {
                clearInterval(ref);
            } else {
                this.setState(prefState => ({
                    time: prefState.time - 1,
                }));
            }
        }, 1000);
    }

    toggleTimer() {
        const running = this.state.running;
        if (running === false) {
            this.setState(() => ({
                running: true,
            }));
            this.time();
        } else if (running === true) {
            this.setState(() => ({
                message: "Please stay focused",
            }));
        }
    }
    incrementTime() {
        if (this.state.running === false) {
            this.setState(prefState => ({
                time: prefState.time + 300,
                prevTime: prefState.prevTime + 300,
            }));
        }
    }
    decrementTime() {
        if (this.state.running === false) {
            if (this.state.time > 300) {
                this.setState(prefState => ({
                    time: prefState.time - 300,
                    prevTime: prefState.prevTime - 300,
                }));
            }
        }
    }
    resetTimer() {
        this.setState(prevState => ({
            running: false,
            time: prevState.prevTime,
        }));
    }

    render() {
        return (
            <div>
                <View
                    displayTime={format(this.state.time)}
                    startTimer={this.toggleTimer}
                    incrementTime={this.incrementTime}
                    decrementTime={this.decrementTime}
                    resetTimer={this.resetTimer}
                />{" "}
            </div>
        );
    }
}
