var React = require("react");
var uniqueId = require('lodash-node/modern/utility/uniqueId');

var AnswerRadioInput = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        onChanged: React.PropTypes.func.isRequired
    },
    handleChanged: function(e) {
        var sel = e.target;
        var checked = sel.checked;
        this.setState({checked: checked});
        if (checked) {
            this.props.onChanged(this.props.value);
        }
    },
    getDefaultProps: function() {
        return {
            id: null,
            checked: false
        }
    },
    getInitialState: function() {
        var id = this.props.id ? this.props.id : uniqueId('radio-');
        return {
            checked: !!this.props.checked,
            id: id,
            name: id
        };
    },
    render: function() {
        return (
            <div>
            <label htmlFor={this.state.id}>
                <input type="radio" 
                    htmlFor={this.props.id}
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.value}
                    checked={this.state.checked}
                    onChange={this.handleChanged}
                />
            {this.props.label}
            </label>
            </div>
        );
    }
});

module.exports = AnswerRadioInput;
