import React from 'react'
import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 5px 2px 5px;
  border-top: 1px solid #D0D2D6;
`

class List extends React.Component {

  showList = (items) => {
    return(
      <div className="List">
        { items.map( (item, i) => (
          <ListItem key={i}>
            <p className="listText">Personal {item.name}</p>
            <p className="listText">{item.value}</p>
          </ListItem>
        ))}
      </div>
    )
  }

  render(){
    const { items } = this.props;
    return(
      <div>
        <h3>Here’s what issuers are looking for</h3>
        { this.showList(items) }
        <hr className="horizontalRule"/>
      </div>
    )
  }
}

export default List;
