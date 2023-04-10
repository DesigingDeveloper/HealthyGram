import React, { Component } from "react";
import { Menu,Dropdown } from "semantic-ui-react";
import web3 from "../scripts/web3";
import { Router } from "../routes";
//Header that is used in all pages
export default class MenuBar extends Component {
  onClickedPatient = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  };
  onClickedDoctor = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  };
  render() {
    return (
      <Menu size="large" inverted>
        <a href="/">
          <Menu.Item className="item">Home</Menu.Item>
        </a>
        <Menu.Menu position="right">
          <a href="/dashboard">
            <Menu.Item className="item">Dashboard</Menu.Item>
          </a>
          <a href="/list">
            <Menu.Item className="item">Records List</Menu.Item>
          </a>
          <Dropdown item text="Doctor">
            <Dropdown.Menu>
              <Dropdown.Item>
                <a
                  href="/"
                  style={{ color: "black" }}
                  onClick={this.onClickedDoctor}
                >
                  View Profile
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/edit-doctor" style={{ color: "black" }}>
                  Edit Profile
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/make-appointment" style={{ color: "black" }}>
                  Make Appointment
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/edit-appointment" style={{ color: "black" }}>
                  Update Appointment
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Patient">
            <Dropdown.Menu>
              <Dropdown.Item>
                <a
                  href="/"
                  style={{ color: "black" }}
                  onClick={this.onClickedPatient}
                >
                  View Profile
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/edit-patient" style={{ color: "black" }}>
                  Edit Profile
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/approve-doctor" style={{ color: "black" }}>
                  Allow Access
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/revoke-doctor" style={{ color: "black" }}>
                  Revoke Access
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Register">
            <Dropdown.Menu>
              <Dropdown.Item>
                <a href="/register-patient" style={{ color: "black" }}>
                  Patient
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/register-doctor" style={{ color: "black" }}>
                  Doctor
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}
