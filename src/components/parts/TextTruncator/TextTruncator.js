import React from "react";
import { Header, Segment } from "semantic-ui-react";
import "./TextTruncator.css";

class TextTruncator extends React.Component {
    state = {
        content: null,
        loading: true,
        truncate: false,
        truncateContent: true,
        truncateBtnText: "Read More",
        truncatedContentString: "",
    }

    truncate(str) {
        if (str.length > this.props.truncateLength) {
            this.setState({truncate: true})
            return str.substring(0, (this.props.truncateLength - 20)) + "..."
        } else {
            return str;
        }
    }

    toggleTruncate() {
        if (this.state.truncateContent) {
            return this.setState({
                truncateContent: false,
                truncatedContentString: `${this.props.content}`,
                truncateBtnText: "Read Less"
            });
        } else {
            return this.setState({
                truncateContent: true,
                truncatedContentString: this.truncate(this.props.content),
                truncateBtnText: "Read More"
            })
        }
    }

    componentDidUpdate(prevState) {
        if (this.state.content !== this.props.content) {
            this.setState({
                content: this.props.content,
                loading: false,
                truncatedContentString: this.truncate(this.props.content)
            })
        }
    }

    render() {
        const {content, loading, truncate, truncatedContentString} = this.state
        return (
            <Segment placeholder className="text-trun__main-container">
                <p>
                    <span className="app-form__job-desc-span">
                        {truncatedContentString}
                        {"  "}
                        {!loading && truncate ? (
                        <span
                            onClick={() => this.toggleTruncate(this)}
                            className="app-form__job-desc-truncate-btn"
                        >
                            {this.state.truncateBtnText}
                        </span>
                        ) : null}
                    </span>
                </p>
            </Segment>
        )
    }
}

export default TextTruncator;