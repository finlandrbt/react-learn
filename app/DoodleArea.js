import React, {Component} from 'react';

class DoodleArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<canvas ref="mainCanvas" >abc</canvas>);
    }

    componentDidMount() {
        var canvasNode = this.refs.mainCanvas
        console.log(canvasNode.innerHTML);
    }
}

export default DoodleArea
