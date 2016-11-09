import React, {Component} from 'react';
import AnswerRadioInput from './AnswerRadioInput'

class AnswerMultipleChoiceQuestion extends Component {
    constructor(props) {
        super(props);
    }

    renderChoices() {
        return this.props.choices.map(function(choice) {
            return <AnswerRadioInput key={choice.key} title={choice.choice} />
        });
    }

    render() {
        return (
            <div>
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <div>{this.renderChoices()}</div>
            </div>
        );
    }
}

export default AnswerMultipleChoiceQuestion
