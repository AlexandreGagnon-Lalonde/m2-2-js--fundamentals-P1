# 2.2.1 - JavaScript String Methods

---

## Methods

All data types in JS support methods.

Methods are properties that can be _called._

Methods can be _native_ (built into the language), or created by the programmer.

---

## .toString()

Every data type has a `toString` method.

Sometimes it's more useful than others.

---

## Common String Methods and Properties

Strings have a bunch of methods and properties that will be immediately useful. 😉

- `.length`
- `.replace()`
- `.slice()`
- `.includes()`
- `split()`
- `indexOf()`

📝 None of these methods **mutate** the string; strings are **immutable**.
📝 They return a new version of the string which you can then work with as you like.

---

### [`.length`](https://www.w3schools.com/jsreF/jsref_length_string.asp)

`.length` is a property that holds the # of characters in the string.

```js
// Example
const sentiment = 'I love programming';
sentiment.length;
```

---

### [`.replace()`](https://www.w3schools.com/jsreF/jsref_replace.asp)

The `.replace()` method replaces a specified value with another value in a string.

It takes 2 parameters, the value to replace and the new value.

```js
// Example
const sentiment = 'I love programming';
```

---

### [`.slice()`](https://www.w3schools.com/jsreF/jsref_slice_string.asp)

`.slice()` extracts a part of a string and returns the extracted part in a new string.

- The method takes 2 parameters: the start position, and the end position.

```js
// Example
const sentiment = 'I love programming';
```

---

### [`.includes()`](https://www.w3schools.com/jsref/jsref_includes.asp)

The `.includes()` method tells us if a string includes another string

```js
// Example
let sentence = "Let's have a pizza party!";
```

---

### [`.split()`](https://www.w3schools.com/jsreF/jsref_split.asp)

The `.split()` method "split" a string into an array of _substrings_.

```js
// Example
const truth = 'The greatest teacher, failure is.';
```

---

### [`.indexOf()`](https://www.w3schools.com/jsreF/jsref_indexof.asp)

The `.indexOf()` method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

```js
// Example
let yodaSpeak = 'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.';
```

_Why would JavaScript decide to return `-1` instead of some other value? like `0`?_

---

# Exercises

Turn an input string into another string

---

```js
const input = 'I am a really long sentence, look how many words I have!';

// output: "sentence, look how"
```

---

### Let's do this in groups!

We'll test the **breakout rooms** feature 😀

---

```js
const input = 'Hi World';

// output: "Hello world!"
```

```js
const input = 'I am 23 years old!';

// output: "I am old!"
```

```js
const input = 'How are you today?';

// output: ["how", "are", "you", "yesterday?"]
```

---

## More String Methods here...

https://www.w3schools.com/jsreF/jsref_obj_string.asp
