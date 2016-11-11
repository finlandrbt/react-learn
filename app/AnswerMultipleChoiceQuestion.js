import React, {Component} from 'react';
import AnswerRadioInput from './AnswerRadioInput'

class AnswerMultipleChoiceQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }

    handleChanged(value) {
        var obj = document.getElementById(value);
        console.log(obj);
    }

    renderChoices(handle) {
        return this.props.choices.map(function(choice) {
            return <AnswerRadioInput 
                id={choice.value}
                name={choice.name} 
                value={choice.value} 
                key={choice.key} 
                title={choice.choice} 
                checked={choice.checked} 
                onChanged={handle} />
        });
    }

    render() {
        return (
            <div>
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <div>{this.renderChoices(this.handleChanged.bind(this))}</div>
            </div>
        );
    }
}

export default AnswerMultipleChoiceQuestion
