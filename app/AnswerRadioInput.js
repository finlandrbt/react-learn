import React, {Component} from 'react';

class AnswerRadioInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>
                <input type="radio"
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.value}
                    checked={this.props.checked} />
                &nbsp;{this.props.title}
                </label>
            </div>
        );
    }
};

export default AnswerRadioInput
