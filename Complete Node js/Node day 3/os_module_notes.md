# Node.js OS Module – Quick Notes

## What is the OS module?

**Definition:** The OS module in Node.js is a core module that provides methods to interact with the operating system and retrieve system-related information such as CPU, memory, platform, and user details.

The **`os`** module is a built-in Node.js module that provides information about the **operating system** on which the Node.js application is running.

It helps you get details like:

* CPU info
* Memory usage
* OS type & version
* User info
* System uptime

> No installation required (core module)

---

## How to use OS module

```js
const os = require('os');
```

---

## Important OS Module Methods

### 1. `os.platform()`

**Definition:** Returns the platform on which the Node.js process is running.

Returns the operating system platform.

```js
os.platform();
```

**Output examples:**

* `win32` → Windows
* `linux`
* `darwin` → macOS

---

### 2. `os.type()`

**Definition:** Returns the operating system name.

Returns the OS name.

```js
os.type();
```

**Example output:**

* `Windows_NT`
* `Linux`

---

### 3. `os.release()`

**Definition:** Returns the version (release) of the operating system.

Returns OS version.

```js
os.release();
```

---

### 4. `os.arch()`

**Definition:** Returns the CPU architecture of the operating system.

Returns CPU architecture.

```js
os.arch();
```

**Example:**

* `x64`
* `arm`

---

### 5. `os.cpus()`

**Definition:** Returns detailed information about each logical CPU core available on the system.

Returns information about each CPU core.

```js
os.cpus();
```

Returns an **array of objects** (model, speed, times).

Use case: performance monitoring

---

### 6. `os.totalmem()`

**Definition:** Returns the total amount of system memory in bytes.

Returns total system memory (in bytes).

```js
os.totalmem();
```

---

### 7. `os.freemem()`

**Definition:** Returns the amount of free system memory in bytes.

Returns free system memory (in bytes).

```js
os.freemem();
```

---

### 8. `os.uptime()`

**Definition:** Returns the system uptime in seconds since the last reboot.

Returns system uptime in seconds.

```js
os.uptime();
```

---

### 9. `os.hostname()`

**Definition:** Returns the hostname of the operating system.

Returns the system hostname.

```js
os.hostname();
```

---

### 10. `os.homedir()`

**Definition:** Returns the home directory of the current user.

Returns the home directory of the current user.

```js
os.homedir();
```

---

### 11. `os.userInfo()`

**Definition:** Returns information about the currently logged-in user.

Returns information about the current user.

```js
os.userInfo();
```

Includes:

* username
* uid
* gid
* shell
* homedir

---

### 12. `os.networkInterfaces()`

**Definition:** Returns an object containing details of the system’s network interfaces.

Returns network interface details.

```js
os.networkInterfaces();
```

Used for IP address detection.

---

## Example Program

```js
const os = require('os');

console.log('Platform:', os.platform());
console.log('OS Type:', os.type());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
```

---

## Why OS module is used?

* To build **cross-platform applications**
* For **system monitoring tools**
* To check **memory & CPU usage**
* Useful in **backend & DevOps tasks**

---

## Interview Tip ⭐

> **OS module is a core Node.js module used to interact with and retrieve system-level information.**

---


