import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, List } from 'semantic-ui-react'

class App extends Component {
  state = {
    values: []
  }

  componentDidMount(){
    this.setState({
      values: [{id: 1, name: 'Value 101'}, {id: 1, name: 'Value 102'}]
    })
  }
  render() {
    return (
      <div>
        <Header as='h2' icon='plug' content='Activities' />
        <List>
            {this.state.values.map((value: any) => (
              <List.Item>{value.name}</List.Item>
            ))}
        </List>
        
      </div>
    );
  }
}

export default App;
