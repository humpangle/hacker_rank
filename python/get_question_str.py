import os


def get_question_str(path: str):
    path = os.path.join(os.path.dirname(__file__), '../questions', path)
    file = open(path)
    string = file.read().strip()
    file.close()
    return string
