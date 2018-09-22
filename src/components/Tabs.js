import React from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 8px;
`
const Tab = styled.div`
  border-radius: ${props => props.side === "left" ? "4px 0 0 4px" : "0 4px 4px 0" };
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-color: #D0D2D6;
  border-width: ${props => props.side === "left" ? "1px .5px 1px 1px" : "1px 1px 1px .5px" };
  border-style: solid;
  padding: 8px;
  background-color: ${props => props.selected === true ? "#D0D2D6" : "#fff" }
`

class Tabs extends React.Component {
  state = {
    selected: "left"
  }

  selectTab = (side, tab) => {
    this.setState({ selected: side })
    this.props.changeTab(tab)
  }

  render() {
    let { selected } = this.state;
    return(
      <TabContainer>
        <Tab side="left" selected={selected === "left"} onClick={() => this.selectTab("left", "credit")}>
          <img className="tabIcon" src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-dark.svg" alt="Credit Card"/>
          <p>Credit card</p>
        </Tab>
        <Tab side="right" selected={selected === "right"} onClick={() => this.selectTab("right", "loan")}>
          <img className="tabIcon" src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-light.svg" alt="Money Bag"/>
          <p>Term loan</p>
        </Tab>
      </TabContainer>
    )
  }
}

export default Tabs;
