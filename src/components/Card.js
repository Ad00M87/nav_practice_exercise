import React from 'react';
import Tabs from './Tabs';
import List from './List';
import Flash from './Flash';
import data from '../data.json';

class Card extends React.Component {
  state = {
    tabDisplay: "credit"
  }

  changeTab = (tabName) => {
    this.setState({ tabDisplay: tabName })
  }

  render() {
    let { tabDisplay } = this.state;
    return(
      <div className="Card">
        <Tabs changeTab={this.changeTab} />
        { tabDisplay === "credit" ?
          <div>
            <Flash text={data.message.response} result={data.message.result} />
            <List items={data.list_items}/>
          </div>
          :
          <h1>Under Construction</h1>
        }
      </div>
    )
  }
}

export default Card
