import React from "react";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className={"container"} id={"timer"}>
                <div className={"row"}>
                    <div
                        className={"col l8 offset-l2 m8 offset-m2 s12 center"}
                        id={"clock"}>
                        <div className={"row valign-wrapper"}>
                            <div className={"col l10 m8 s6"} id={"time"}>
                                {this.props.displayTime}
                            </div>
                            <div className={"col l2 m4 s6"} id={"buttons"}>
                                <button
                                    className={
                                        "waves-effect waves-light btn-large toggle"
                                    }
                                    type={"button"}
                                    onClick={this.props.startTimer}>
                                    {"Start"}
                                </button>
                                <button
                                    className={
                                        "waves-effect waves-light btn-large"
                                    }
                                    type={"button"}
                                    onClick={this.props.incrementTime}>
                                    {"+"}
                                </button>
                                <button
                                    className={
                                        "waves-effect waves-light btn-large"
                                    }
                                    type={"button"}
                                    onClick={this.props.decrementTime}>
                                    {"-"}
                                </button>
                                <button
                                    className={
                                        "waves-effect waves-light btn-large"
                                    }
                                    type={"button"}
                                    onClick={this.props.resetTimer}>
                                    {"Reset"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <button
                        className={"waves-effect waves-light btn-small trigger"}
                        type={"button"}
                        onClick={this.props.openModal}>
                        {"Trigger Modal \n (for testing purposes)"}
                    </button>
                </div>
            </div>
        );
    }
}
