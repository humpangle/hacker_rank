import sys
import pytest

from get_question_str import get_question_str
from balanced_brackets import is_matched


def get_questions(path: str):
    return map(str.strip, get_question_str('balanced-brackets/' + path).split('\n')[1:])


def get_answers(path: str):
    return [x.strip() for x in
            get_question_str('balanced-brackets/' + path).split('\n')]


def test_1():
    numbers = [18, 20]
    questions = [get_questions('input{}.txt'.format(x)) for x in numbers]
    answers = [get_answers('output{}.txt'.format(x)) for x in numbers]
    for qss, ass in zip(questions, answers):
        for question, answer in zip(qss, ass):
            print(question, answer, is_matched(question) == answer)
            assert is_matched(question) == answer


if __name__ == "__main__":
    pytest.main(sys.argv)
