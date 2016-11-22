var React = require('react');
var ReactDOM = require('react-dom');
var TableView = React.createFactory(require('./TableView'));
var SliderImage = React.createFactory(require('./SliderImage'));

var imgUrl = "https://wpimg.wallstcn.com/92/45/08/80.jpg?imageView2/1/w/190/h/188/q/75";
var tableViewConfig = [
    {title: "title1", desc: "desc1", img: imgUrl, link: "http://www.baidu.com/"},
    {title: "title2", desc: "desc2", img: imgUrl, link: "http://www.sina.com/"},
    {title: "title3", desc: "desc3", img: imgUrl, link: "#"},
    {title: "title4", desc: "desc4", img: imgUrl, link: "#"}
];

var sliderConfig = [
    "https://wpimg.wallstcn.com/fd/76/65/moren23.png!index.discussion",
    "https://wpimg.wallstcn.com/2c/7a/be/moren19.png!index.discussion",
    "https://wpimg.wallstcn.com/e7/4e/fa/moren22.png!index.discussion",
    "https://wpimg.wallstcn.com/73/e9/1e/moren12.png!index.discussion",
    "https://wpimg.wallstcn.com/5f/4d/6d/moren32.png!index.discussion"
]

/*
ReactDOM.render(
    React.createElement(TableView, {"config": tableViewConfig}),
    document.getElementById('body')
);
*/

ReactDOM.render(
    React.createElement(SliderImage, {"config": sliderConfig}),
    document.getElementById('body')
);
