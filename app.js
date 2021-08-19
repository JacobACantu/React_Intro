// TODO
import React from 'react';

var GroceryListItem = (props) => (
 <ul/>
 {props.items.map((item, i) => 
    <GroceryListItem key={i} item={item} />
  )}
 <ul/>
);

class GroceryListItem extends React.component {
    constuctor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }
    OnListItemHover() {
            this.setState({
                hover: !this.state.hover
    });
}
    render() {

        var style = {
            fontWeight: this.state.hover ? 'bold' : 'normal'
        };

        return (
            <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li> );
    }
}


ReactDOM.render(<GroceryList items={['cucumber','kale']} />, document.getElementById('app'));