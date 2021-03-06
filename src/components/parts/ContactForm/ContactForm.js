import React, { useEffect } from "react";
import { Button, Checkbox, Form, Icon, Input, Message, Segment, TextArea } from "semantic-ui-react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import { Link, Redirect, useLocation } from "react-router-dom";

class ContactForm extends React.Component {
  state = {
    fName: "",
    lName: "",
    emailAddress: "",
    phoneNumber: "",
    contentTextArea: "",
    messageVisible: false,
    messageType: null,
    message: "",
    termCheck: false,
    loading: true,
    redirect: '',
  }

  handleChange = (e, {name, value}) => this.setState({ [name]: value });

  handleDismissMessage = () => {
    this.setState({ 
      messageVisible: false,
      message: ""
    })
  }

  scrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0,0);  
    }, [pathname])
    
    return null;
  }



  submitForm = (e) => {
    e.preventDefault();
    if (this.state.termCheck) {
      emailjs
      .sendForm(
        "redmattr-smtp",
        "template_m07l8yw",
        e.target,
        "user_7DrAEa8YsTB7ON8bn35kq"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            this.setState({
              message: "Your request has been successfully submitted.",
              messageVisible: true,
              messageType: "positive",
            })
          }
        },
        (error) => {
          console.log(error);
        }
      );

      emailjs
      .sendForm(
        "redmattr-smtp",
        "template_9yaazho",
        e.target,
        "user_7DrAEa8YsTB7ON8bn35kq"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            this.setState({
              message: "Your request has been successfully submitted.",
              messageVisible: true,
              messageType: "positive",
            })
          }
        },
        (error) => {
          console.log(error);
        }
      );
        this.setState({
          fName: "",
          lName: "",
          emailAddress: "",
          phoneNumber: "",
          contentTextArea: "",
          redirect: "/opportunities"
        });
    } else {
      this.setState({
        message: "All Fields Marked With A Red Star Are Required.",
        messageVisible: true,
        messageType: "error",
      })
    }
    
    

  };

  render() {
    const {contentTextArea, fName, lName, emailAddress, phoneNumber, messageVisible, message, termCheck, messageType, loading} = this.state

    return (
      <div>
      {this.state.redirect !== '' ? <Redirect to={this.state.redirect}/> : null}
      {messageVisible && message
        ? (
          <div className="contact__message-container">
          <Message 
            floating
            className={messageType}
            compact
            onDismiss={this.handleDismissMessage}
            header={message}
            style={{
              minWidth: "75%",
              maxWidth: "75%",
              position: "fixed",
              marginTop: "-40px",
              textAlign: "center",
              zIndex: 50
            }}
          />
          </div>
        ) : (
          null
        )}
      <div className="contact__main-form-wrapper" style={{display: "flex", flexDirection: "column"}}>

      <Link to="/opportunities" style={{
        marginLeft: "2vw",
        marginTop: "20px",
        fontSize: "24px"
      }}><Icon name="angle left" /> Go Back</Link>

        
      <Segment raised className="contact__main-form-seg" style={{alignSelf: "center"}}>
        
        <Form
          onSubmit={this.submitForm}
          size="big"
          className="contact__form-container"
        >
          <Form.Group widths="equal">
            <Form.Field required>
              <label>First Name</label>
              <Input
                required
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
                required
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
            name="contentTextArea"
            value={contentTextArea}
            onChange={this.handleChange}
            focus
            required
            label="Message"
            rows={10}
            placeholder="How can we help you?"
          />
          <Form.Field required>
            <Form.Checkbox
              required
              inline
              name="termCheck"
              style={{ marginLeft: "15px" }}
              checked={termCheck}
              onChange={() => this.setState({ termCheck: !termCheck })}
              label={{ children: "I agree to the Terms and Conditions" }}
            />
          </Form.Field>
          <Button
            primary
            size="big"
            type="submit"
            content="Submit"
            floated="right"
          />
        </Form>
      </Segment>
      </div>
      </div>
    );
  }
}

export default ContactForm;
