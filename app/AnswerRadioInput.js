import React, {Component} from 'react';
import styles from './AnswerRadioInput.css'

class AnswerRadioInput extends Component {
    constructor(props) {
        super(props);
        this.state = {checked: this.props.checked}
    }
    handleChanged(e) {
        var checked = e.target.checked;
        this.setState({checked: checked});
        if (checked) {
            this.props.onChanged(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.id} className={styles.radio}>
                <input type="radio"
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.value}
                    defaultChecked={this.state.checked} 
                    onChange={this.handleChanged.bind(this)} />
                &nbsp;{this.props.title}
                </label>
            </div>
        );
    }
};

export default AnswerRadioInput
