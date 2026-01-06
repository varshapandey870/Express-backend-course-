# Node.js Path Module – Quick Notes

## What is the Path module?

**Definition:** The Path module in Node.js is a core module that provides utilities for working with file and directory paths. It helps in handling and transforming file paths in a cross-platform way.

> No installation required (core module)

---

## How to use Path module

```js
const path = require('path');
```

---

## Important Path Module Methods

### 1. `path.basename()`

**Definition:** Returns the last portion of a path (file name with extension).

```js
path.basename('/foo/bar/baz.txt'); // 'baz.txt'
```

---

### 2. `path.dirname()`

**Definition:** Returns the directory name of a path.

```js
path.dirname('/foo/bar/baz.txt'); // '/foo/bar'
```

---

### 3. `path.extname()`

**Definition:** Returns the extension of the path.

```js
path.extname('index.html'); // '.html'
```

---

### 4. `path.join()`

**Definition:** Joins multiple path segments into a single path.

```js
path.join('/foo', 'bar', 'baz/asdf'); // '/foo/bar/baz/asdf'
```

---

### 5. `path.resolve()`

**Definition:** Resolves a sequence of paths into an absolute path.

```js
path.resolve('foo/bar', '/tmp/file/'); // '/tmp/file'
```

---

### 6. `path.isAbsolute()`

**Definition:** Checks if the given path is absolute.

```js
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('foo/bar'); // false
```

---

### 7. `path.parse()`

**Definition:** Returns an object with details of the path.

```js
path.parse('/home/user/dir/file.txt');
/* {
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
} */
```

---

### 8. `path.format()`

**Definition:** Returns a path string from an object returned by `path.parse()`.

```js
const obj = {
  dir: '/home/user/dir',
  base: 'file.txt'
};
path.format(obj); // '/home/user/dir/file.txt'
```

---

### 9. `path.relative()`

**Definition:** Returns the relative path from one path to another.

```js
path.relative('/data/orandea/test', '/data/orandea/impl/file.txt');
// 'impl/file.txt'
```

---

### 10. `path.normalize()`

**Definition:** Normalizes a path, resolving `..` and `.` segments.

```js
path.normalize('/foo/bar//baz/asdf/quux/..'); // '/foo/bar/baz/asdf'
```

---

## Example Program

```js
const path = require('path');

console.log('Base name:', path.basename('/foo/bar/baz.txt'));
console.log('Directory name:', path.dirname('/foo/bar/baz.txt'));
console.log('Extension name:', path.extname('index.html'));
console.log('Joined path:', path.join('/foo', 'bar', 'baz/asdf'));
console.log('Resolved path:', path.resolve('foo/bar', '/tmp/file/'));
```

---

## Why Path module is used?

* For **handling file paths across platforms**
* To **join, parse, or normalize paths**
* To **ge