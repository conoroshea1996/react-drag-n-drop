import React from 'react';
import PropTypes from 'prop-types';

class Draggable extends React.Component {

    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    }

    noallowDrop = (e) => {
        e.stopPropagation()
    }

    render() {
        return (
            <div id={this.props.id} draggable='true' onDragStart={this.drag} onDragOver={this.noallowDrop} style={this.props.style}>
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