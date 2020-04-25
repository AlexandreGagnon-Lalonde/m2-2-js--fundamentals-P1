// 1. Output: "Hello world!"
const input = "Hi World"
const output = input.replace('Hi', 'Hello') + '!';

// 2. Output: "I am old!"
const input2 = "I am 23 years old!"
const output2 = input2.slice('I am ', 5) + input2.slice(input2.length - 4);

// 3. Output: ["how", "are", "you", "yesterday?"]
const input3 = "How are you today?"
const output3 = input3.toLowerCase().replace('today', 'yesterday').split(' ');