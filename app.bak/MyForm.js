var React = require('react');
var ReactDom = require('react-dom');

var MyForm = React.createClass({
    getInitialState: function() {
        return {
            helloTo: "Hello World!"
        };
    },
    handleChange: function(event) {
        this.setState({
            helloTo: event.target.value
        });
    },
    submitHandler: function(event) {
        event.preventDefault();
        alert(this.state.helloTo);
        //var helloTo = this.refs.helloTo.value;
        //alert(helloTo);
    },
    render: function() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.helloTo} ref="helloTo" onChange={this.handleChange} />
                <br />
                <button type="submit">Speak</button>
            </form>
        );
    }
});

module.exports = MyForm;
