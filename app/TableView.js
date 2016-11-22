var React = require('react');
var TableViewCell = React.createFactory(require('./TableViewCell'));

var TableView = React.createClass({
    propTypes: {
        config: React.PropTypes.array.isRequired
    },
    getDefaultProps: function() {
        return {
            config: [{
                name: "undefined",
                title: "undefined",
                desc: "undefined",
                img: "http://",
                link: "#"
            }]
        };
    },
    renderChoices: function() {
        return this.props.config.map(function(cell, i) {
            return TableViewCell({
                key: i,
                name: "cell-"+i,
                title: cell.title,
                desc: cell.desc,
                img: cell.img,
                link: cell.link
            });
        }.bind(this));
    },
    render: function() {
        return (
            <div>
            {this.renderChoices()}
            </div>
        );
    }
});

module.exports = TableView;
