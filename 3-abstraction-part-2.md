## The beauty and joy of computing (BJC)  
**Dan Garcia**

# Lecture 3
## Abstraction II

- Don't be afraid to learn on the job
- Never ask for permission unless it's would be reckless not
- Don't burn yourself out, exercise
- Learn as much as you can, it's hard and it takes work


**Abstraction: Numbers**
- Number bases: including  binary and decimal, are used for reasoning about digital data
- Bits represent binary data using base two digits: zero and one
- Hexadecimal, or base-16: use for colors in images
- Different bases help in reasoning about digital data; digital dta is stored in bits

- N bits = 2^N things, 8 bits = 1 Byte
- 0b1101 (0b is indicator of binary) in binary, convert to decimal; sum of each number mul. to 2^index = 13 
- 0xA5 (0x is indicator of Hex) in hexadecimal, convert to decimal: sum of each nu mul. to 16^index = 165
- Highest in Hex is FF, untill you go to the next one: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
- Short smallest to largest: 0b1010 < 11 < 0xC (10<11<12)

**Abstraction: Base Conversion**
- Convert from decimal to binary
- Convert from decimal to hexadecimal
- Convert from binary <=> hex

Quiz: why do we use different bases?
a) Binary is used by computers, since transistors are bistable (at two values)
b) Hex is used by humans for encoding binary information because it's 4 times more efficient (number of chars)
c) Decimal because we have 10 fingers
d) The fact that computers use binary is below our level of abstraction
e) All of the above
==> Correct: E

**Abstraction: Power, Limitations**
- A combination of abstractions is used to represent digital data
- At the lowest level, all digital dta are represented by bits (bits can represent anything!)
- Bits are grouped to represent higher-level abstractions including numbers and characters
	* Logical values: false is 0, true is 1
	* Colors: red is 00, green is 01, blue is 10
	* Characters: 00000 is 'a', 00001 is 'b'
- Higher-level abstractions such as IP packets, images, and audio files are comprised of groups of bits that represent different parts of the abstractions

Detail removal often comes at a cost: removing detail isn't universally a positive thing, the simplification often takes out the subtlete aspects of the original

**Overflow and Roundoff**
Overflow: when the number of represented things exceeds digits allocated for it
Roundoff error: when the true real number can't be stored exactly given the encoding due to the fixed number of bits (sometimes this errro accumulates causing problems)
