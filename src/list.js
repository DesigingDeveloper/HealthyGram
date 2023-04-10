import React, { Component } from "react"; 
import { Card, Input, Form } from "semantic-ui-react"; 
import Layout from "../components/Layout"; 
import record from "../src/record"; 
import { Router } from "../routes"; 
class RecordsList extends Component { 
  state = { 
    search: "", 
  }; 
  static async getInitialProps() { 
    const allRecords = await record.methods.getPatients().call(); 
    return { allRecords }; 
  } 
  renderRecords() { 
    const items = this.props.allRecords.map((address) => { 
      return { 
        header: address, 
        description: <a href={`/record/${address}`}>View Record</a>, 
        fluid: true, 
      }; 
    }); 
    //Add all records to card group 
    return <Card.Group items={items} />; 
  } 
  onSearch = async (event) => { 
    event.preventDefault(); //prevent browser from submitting form to back end server 
    Router.pushRoute(`/record/${this.state.search}`); 
  }; 
  render() { 
    return ( 
      <Layout> 
        <div> 
          <Form onSubmit={this.onSearch}> 
            <Form.Field> 
              <Input 
                fluid 
                action={{ icon: "search" }} 
                placeholder="Search..." 
                onChange={(event) => 
                  this.setState({ search: event.target.value }) 
                } 
              /> 
              <br /> 
            </Form.Field> 
          </Form> 
          <h2>Medical Records List</h2> 
          {this.renderRecords()} 
        </div> 
      </Layout> 
    ); 
  } 
} 
export default RecordsList;