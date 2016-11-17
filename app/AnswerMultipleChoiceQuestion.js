var React = require('react');
var uniqueId = require('lodash-node/modern/utility/uniqueId');
var AnswerRadioInput = React.createFactory(require('./AnswerRadioInput'));

var AnswerMultipleChoiceQuestion = React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        choices: React.PropTypes.array.isRequired,
        onCompleted: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            id: uniqueId('multiple-choice-'),
            value: this.props.value
        };
    },
    handleChanged: function(value) {
        this.setState({value: value});
        this.props.onCompleted(value);
    },
    renderChoices: function() {
        return this.props.choices.map(function(choice, i) {
            return AnswerRadioInput({
                key: i,
                id: "choice-" + i,
                name: this.state.id,
                label: choice,
                value: choice,
                checked: this.state.value === choice,
                onChanged: this.handleChanged
            });
        }.bind(this));
    },
    render: function() {
        return (
            <div>
                <label>
                {this.props.label}
                </label>
                <div>
                {this.renderChoices()}
                </div>
            </div>
        );
    }
});

module.exports = AnswerMultipleChoiceQuestion;
