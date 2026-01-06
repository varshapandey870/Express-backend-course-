# Node.js Events Module – Quick Notes

## What is the Events module?

**Definition:** The Events module in Node.js is a core module that allows us to create, listen, and handle custom events in an asynchronous way. It provides the **EventEmitter** class to manage events.

> No installation required (core module)

---

## How to use Events module

```js
const events = require('events');
const eventEmitter = new events.EventEmitter();
```

---

## Important Events Module Methods

### 1. `emitter.on(eventName, listener)`

**Definition:** Adds a listener function for the specified event.

```js
eventEmitter.on('greet', () => {
  console.log('Hello World!');
});
```

---

### 2. `emitter.emit(eventName[, ...args])`

**Definition:** Triggers the specified event and calls all listeners attached to it.

```js
eventEmitter.emit('greet'); // Output: Hello World!
```

---

### 3. `emitter.once(eventName, listener)`

**Definition:** Adds a one-time listener for the event. It is invoked only the first time the event is fired.

```js
eventEmitter.once('greetOnce', () => {
  console.log('Hello for the first time!');
});
```

---

### 4. `emitter.removeListener(eventName, listener)`

**Definition:** Removes a specific listener from the event.

```js
const listener = () => console.log('Hello!');
eventEmitter.on('greet', listener);
eventEmitter.removeListener('greet', listener);
```

---

### 5. `emitter.removeAllListeners([eventName])`

**Definition:** Removes all listeners for the specified event. If no event is specified, removes all listeners for all events.

```js
eventEmitter.removeAllListeners('greet');
```

---

### 6. `emitter.listeners(eventName)`

**Definition:** Returns an array of listener functions for the specified event.

```js
console.log(eventEmitter.listeners('greet'));
```

---

## Example Program

```js
const events = require('events');
const eventEmitter = new events.EventEmitter();

// Listener for 'start' event
eventEmitter.on('start', () => {
  console.log('The start event has been triggered');
});

// Emit the event
eventEmitter.emit('start');
```

---

## Why Events module is used?

* To handle **asynchronous events**
* To create **custom events** in Node.js
* Essential for **server-side applications**
* Used in **real-time applications** like chat apps, notifications, etc.

---

## Interview Tip ⭐

> **Events module is a core Node.js module used to create and handle custom events using the EventEmitter class, enabling asynchronous event-driven programming.**

# Node.js Event Module Notes

## Event Module

Node.js provides the **`events` module** to work with events. It allows us to create, listen to, and handle custom events using the `EventEmitter` class.

### Importing EventEmitter

```js
const EventEmitter = require('events');
```

### Creating an EventEmitter instance

```js
var eventEmitter = new EventEmitter();
```

* This instance allows registering listeners and emitting events.

### Registering Listeners

Listeners are functions that execute when an event is emitted.

```js
var fun1 = (msg) => {
    console.log("Message from fun1: " + msg);
};

var fun2 = (msg) => {
    console.log("Message from fun2: " + msg);
};

// Register listeners
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);
```

* `on(eventName, listener)` adds a listener.
* `fun1` is added **twice**, `fun2` once.

### Removing a Listener

```js
// Removes one occurrence of fun1
eventEmitter.removeListener('myEvent', fun1);
```

* Removes only **one instance** of `fun1`. Remaining listeners: `[fun1, fun2]`.

### Emitting an Event

```js
eventEmitter.emit('myEvent', "Event occurred");
```

* Triggers all listeners registered for `myEvent`.
* Output:

```
Message from fun1: Event occurred
Message from fun2: Event occurred
```

### Removing All Listeners

```js
eventEmitter.removeAllListeners('myEvent');
```

* Removes **all listeners** for `myEvent`.

### Emitting Event After Removing All Listeners

```js
eventEmitter.emit('myEvent', "Event occurred");
```

* Nothing happens since no listeners remain.

### Complete Example Code

```js
const EventEmitter = require('events');

// Initializing event emitter instances
var eventEmitter = new EventEmitter();

var fun1 = (msg) => {
    console.log("Message from fun1: " + msg);
};

var fun2 = (msg) => {
    console.log("Message from fun2: " + msg);
};

// Registering fun1 and fun2
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);

// Removing listener fun1 that was registered twice
eventEmitter.removeListener('myEvent', fun1);

// Triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");

// Removing all the listeners to myEvent
eventEmitter.removeAllListeners('myEvent');

// Triggering myEvent again
eventEmitter.emit('myEvent', "Event occurred");
```

### Notes

* Use `.on()` to **add** a listener.
* Use `.removeListener()` to remove a **specific listener**.
* Use `.removeAllListeners()` to remove **all listeners** for an event.
* `.emit()` triggers all registered listeners for an event.
