import PyPDF2
import re
# creating a pdf file object
pdfFileObj = open('main.pdf', 'rb')
	
# creating a pdf reader object
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
	
# printing number of pages in pdf file
# print(pdfReader.numPages)
	
# creating a page object
pageObj = pdfReader.getPage(0)
	
# extracting text from page
	
# closing the pdf file object
names = set()
for i in range(pdfReader.numPages):
    pageObj = pdfReader.getPage(i)

    sentences = pageObj.extractText().split("\n")
    pattern = r'[0-9]'
    for sentence in sentences:
        if "Dr " in sentence:
            sentence = sentence.rsplit('Dr', 1)[-1]
            if "Clinic" in sentence or "&" in sentence or "Family" in sentence:
                continue
            # print(sentence)
            print(sentence)
            names.add(sentence.strip())

print(len(names))

f = open("doctors.txt", "w")
for name in names:
    f.write(name + '\n')
f.close()
pdfFileObj.close()