import React from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        bottom: "auto",
        right: "auto",
        padding: "3rem",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");
export default class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={"modal"}>
                <Modal
                    isOpen={this.props.isOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}>
                    <div className={"modal-content center"}>
                        <div>{"End of Pomodoro"}</div>
                        <button
                            className={"waves-effect waves-light btn-small"}
                            type={"button"}
                            onClick={this.props.restartTimer}>
                            {"Restart timer"}
                        </button>
                        <button
                            className={"waves-effect waves-light btn-small"}
                            type={"button"}
                            onClick={this.props.closeModal}>
                            {"Close"}
                        </button>
                    </div>
                </Modal>
            </div>
        );
    }
}
