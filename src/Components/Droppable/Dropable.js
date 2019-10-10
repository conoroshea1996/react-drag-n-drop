import React from 'react';
import PropTypes from 'prop-types';

class Draggable extends React.Component {

    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        console.log(data);
        e.target.appendChild(document.getElementById(data));
    }
    allowDrop = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }

}
Draggable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}


export default Draggable;
