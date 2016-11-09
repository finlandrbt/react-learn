import React from 'react';
import {render} from 'react-dom';

import AnswerMultipleChoiceQuestion from './AnswerMultipleChoiceQuestion'

var choices = [{choice: "Answer.1", key: 1}, {choice: "Answer.2", key: 2}]
render(<AnswerMultipleChoiceQuestion choices={choices} label="Question.1" id="Q1" />, document.getElementById('root'));
