#!/usr/bin/python
# -*- coding: utf-8 -*-
import MeCab as MeeeeeeeCABBBBB
import jaconv
import pandas as pd
import csv


class GenerateRiaLang:
    def __init__(self):
        self.mecab = MeeeeeeeCABBBBB.Tagger()
        with open('NGWord.csv') as f:
            reader = csv.reader(f)
            self.nglist = [row for row in reader]

    def changeria(self, text):
        thepart=''
        line = self.mecab.parse(text)    
        lines = line.split('\n')
        for line in lines:
            feature = line.split('\t')
            if len(feature) == 2: #'EOS'と''を省く
                thepart = feature[1].split(',')

        if thepart[0] == '名詞':
            print('名詞りあだね。')
            return self.noun(text)
        elif thepart[1] == '非自立' or thepart[0] == '助詞':
            print('非自立語りあだね。')
            return self.nonindepend(text,thepart[7])
        elif thepart[0] == '動詞':
            print('動詞りあだね。')
            return self.verb(text)
        elif thepart[0] == '助動詞':
            print('助動詞りあだね。')
            return self.auxverb(text,thepart[7])
        else:
            print(thepart[0]+'りあだね。')
            return (text + 'りあ')
    
    def noun(self, noun_text):
        noun_text = noun_text + 'りあ'
        return noun_text
    
    def verb(self, verb_text):
        verb_text = verb_text + 'りあ'
        return verb_text

    def nonindepend(self, non_text,thepart):
        non_text = non_text.replace(jaconv.kata2hira(thepart),'')
        non_text = non_text + 'りあ'
        return non_text

    def auxverb(self, aux_text, thepart):
        if (jaconv.kata2hira(thepart)) in self.nglist[0]:
            aux_text = aux_text.replace(jaconv.kata2hira(thepart),'')
        aux_text = aux_text + 'りあ'
        return aux_text

if __name__ == "__main__":
    ria = GenerateRiaLang()
    print("りあ！")
    print(ria.changeria(input()))