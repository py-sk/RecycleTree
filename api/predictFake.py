from os import path

class ModelPredictFake():
    def __init__(self, filename):
        self.filename = filename

    def predict(self):
        return ['Metal', 'Metal Can or Container', "Yes", "If there is any residue."]

if __name__=='__main__':
    print(1)
