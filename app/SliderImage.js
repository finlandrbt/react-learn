var React = require('react');
import cs from './SliderImage.css';

var SliderImage = React.createClass({
    propTypes: {
        config: React.PropTypes.array.isRequired
    },
    getDefaultProps: function() {
        return {
            config: ["#", "#", "#", "#", "#"]
        };
    },
    componentDidMount: function() {
        var el = this.el = document.createElement('div');
        $(el).on('edslider', {width:"100%",height:"500"});
    },
    render: function() {
        return (
        <div>
        <ul className={cs.mySlideshow} id="mySlideshow">
            <li className={cs.first}>
                <img src={this.props.config[0]} width="330" height="255" />
            </li>
            <li className={cs.second}>
                <img src={this.props.config[1]} className={`${cs.animated} ${cs.fadeInRight}`} />
            </li>
            <li className={cs.third}>
                <img src={this.props.config[2]} className={`${cs.animated} ${cs.fadeInLeft}`} />
            </li>
            <li className={cs.fourth}>
                <img src={this.props.config[3]} className={`${cs.animated} ${cs.fadeInRight}`} />
            </li>
            <li className={cs.fifth}>
                <img src={this.props.config[4]} className={`${cs.animated} ${cs.fadeInLeft}`} />
            </li>
        </ul>
        <script src="js/jquery-1.11.0.min.js"></script>
        <script src="js/jquery.edslider.js"></script>
    </div>
        );
    }
});

module.exports = SliderImage;
