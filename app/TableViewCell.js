var React = require('react');
import style from "./TableViewCell.css"

var TableViewCell = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        img: React.PropTypes.string.isRequired,
        link: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            name: "undefined",
            title: "no title",
            desc: "no desc",
            img: "http://"
        }
    },
    onClicked: function(link) {
        alert("a");
        //window.location = link;
    },
    render: function() {
        return (<a href={this.props.link}><div>
                <img src={this.props.img} />
                <div className={style.title}>{this.props.title}</div>
                <div className={style.desciptor}>{this.props.desc}</div>
                <hr size="1" />
                </div></a>
        );
    }
});

module.exports = TableViewCell;
