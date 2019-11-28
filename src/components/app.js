import React from "react";
import View from "./view";
import ModalComponent from "./modal";

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
            modalIsOpen: false,
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.incrementTime = this.incrementTime.bind(this);
        this.decrementTime = this.decrementTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeAndRestart = this.closeAndRestart.bind(this);
    }

    time() {
        const ref = setInterval(() => {
            if (this.state.time === 0) {
                clearInterval(ref);
                this.openModal();
            } else if (this.state.running === false) {
                clearInterval(ref);
            } else {
                this.setState(prefState => ({
                    time: prefState.time - 1,
                }));
            }
        }, 1000);
    }

    toggleTimer() {
        if (this.state.running === false) {
            this.setState(() => ({
                running: true,
            }));
            this.time();
            document.querySelector(".toggle").innerText = "stop";
        } else {
            this.setState(() => ({
                running: false,
            }));
            document.querySelector(".toggle").innerText = "start";
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
            time: prevState.prevTime,
            running: false,
        }));
    }

    openModal() {
        this.resetTimer();
        this.setState({
            modalIsOpen: true,
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
        });
    }

    closeAndRestart() {
        this.closeModal();
        this.toggleTimer();
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
                    openModal={this.openModal}
                />{" "}
                <ModalComponent
                    isOpen={this.state.modalIsOpen}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    restartTimer={this.closeAndRestart}
                />
            </div>
        );
    }
}
