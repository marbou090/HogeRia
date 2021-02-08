#!/usr/bin/python
# -*- coding: utf-8 -*-
import MeCab as MeeeeeeeCABBBBB

class GenerateRiaLang:

    def __init__(self):
        self.mecab = MeeeeeeeCABBBBB.Tagger()

    def changeria(self, text):
        thepart=''
        line = self.mecab.parse(text)    
        lines = line.split('\n')
        for line in lines:
            feature = line.split('\t')
            if len(feature) == 2: #'EOS'と''を省く
                thepart = feature[1].split(',')[0]

        if thepart == '名詞':
            print('名詞りあだね。')
            return self.noun(text)
        elif thepart == '動詞':
            print('動詞りあだね。')
            return self.verb(text)
        else:
            print(thepart+'りあだね。')
            return (text + 'りあ')
    
    def noun(self, noun_text):
        noun_text = noun_text + 'りあ'
        return noun_text
    
    def verb(self, verb_text):
        verb_text = verb_text + 'りあ'
        return verb_text

if __name__ == "__main__":
    ria = GenerateRiaLang()
    print("りあ！")
    print(ria.changeria(input()))