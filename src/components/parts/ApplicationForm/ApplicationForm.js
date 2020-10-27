import React from "react";
import "./ApplicationForm.css";
import {
  Segment,
  Button,
  Divider,
  Form,
  Input,
  TextArea,
  Checkbox,
  Loader,
  Dimmer,
} from "semantic-ui-react";
import { isValidPhoneNumber } from "react-phone-number-input";
import emailjs from "emailjs-com";

class ApplicationForm extends React.Component {
  state = {
    truncate: false,
    truncatedDesc: true,
    truncatedDescString: "",
    truncateBtnText: "Read More",
    listingId: "",
    jobTitle: "",
    fName: "",
    lName: "",
    emailAddress: "",
    phoneNumber: undefined,
    applicationTextArea: "",
    termCheck: false,
    loading: true,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  truncate(str) {
    if (str.length > 500) {
      this.setState({ truncate: true });
      return str.substring(0, 460) + "...";
    } else {
      return str;
    }
  }

  toggleTruncate() {
    if (this.state.truncatedDesc) {
      return this.setState({
        truncatedDesc: false,
        truncatedDescString: `${this.props.jobDesc}`,
        truncateBtnText: "Read Less",
      });
    } else {
      return this.setState({
        truncatedDesc: true,
        truncatedDescString: this.truncate(this.props.jobDesc),
        truncateBtnText: "Read More",
      });
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "redmattr-smtp",
        "template_qpfqvv8",
        e.target,
        "user_7DrAEa8YsTB7ON8bn35kq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );

    this.setState({
      listingId: "",
      fName: "",
      lName: "",
      emailAddress: "",
      phoneNumber: "",
      applicationTextArea: "",
      termCheck: false,
    });
  };

  componentDidUpdate(prevState) {
    if (
      prevState.jobTitle !== this.props.jobTitle &&
      prevState.jobDesc !== this.props.jobDesc
    ) {
      this.setState({
        jobTitle: this.props.jobTitle,
        truncatedDescString: this.truncate(this.props.jobDesc),
        loading: false,
        listingId: `${this.props.listingId}`,
      });
    }
  }

  render() {
    const {
      loading,
      truncate,
      listingId,
      jobTitle,
      fName,
      lName,
      emailAddress,
      phoneNumber,
      applicationTextArea,
      termCheck,
    } = this.state;

    return (
      <div className="app-form__main-content-wrapper">
        <h1 style={{ minHeight: "36px" }} className="apply__job-title-header">
          {this.props.jobTitle}
        </h1>
        <Dimmer.Dimmable dimmed={loading}>
          <Segment
            style={{ minHeight: "90.5px" }}
            loading={loading}
            inverted={loading}
            secondary
          >
            <p>
              <span className="app-form__job-desc-span">
                {this.state.truncatedDescString}
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
        </Dimmer.Dimmable>
        <Divider className="app-form__info-divider" />
        <Form
          onSubmit={this.submitForm}
          size="big"
          className="app-form__form-container"
        >
          <Form.Field>
            <Input type="hidden" name="listingId" value={listingId} />
          </Form.Field>

          <Form.Field>
            <Input type="hidden" name="jobTitle" value={jobTitle} />
          </Form.Field>

          <Form.Group widths="equal">
            <Form.Field required>
              <label>First Name</label>
              <Input
                name="fName"
                value={fName}
                placeholder="First Name"
                onChange={this.handleChange}
                focus
              />
            </Form.Field>

            <Form.Field required>
              <label>Last Name</label>
              <Input
                name="lName"
                value={lName}
                placeholder="Last Name"
                onChange={this.handleChange}
                focus
              />
            </Form.Field>
          </Form.Group>
          <Form.Field required>
            <label>Email</label>
            <Input
              name="emailAddress"
              type="email"
              value={emailAddress}
              placeholder="Email"
              onChange={this.handleChange}
              focus
            />
          </Form.Field>

          <Form.Field
            control={Input}
            focus
            required
            placeholder="Phone Number"
            label="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          />

          <Form.Field
            control={TextArea}
            name="applicationTextArea"
            value={applicationTextArea}
            onChange={this.handleChange}
            focus
            required
            label="About You"
            rows={10}
            placeholder="Why would you be a good addition to our Wicked Family?"
          />
          <Form.Field
            style={{ marginLeft: "15px" }}
            control={Checkbox}
            checked={termCheck}
            onChange={() => this.setState({ termCheck: !termCheck })}
            label={{ children: "I agree to the Terms and Conditions" }}
          />
          <Button
            primary
            size="big"
            type="submit"
            content="Submit"
            floated="right"
          />
        </Form>
      </div>
    );
  }
}

export default ApplicationForm;
