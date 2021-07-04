# write-file-with

Create a js file to write file.

```
module.export = (content) =>{
    return `${content}
    new line.
    `
}
```

Usage

```
- name: Write file with
  uses: zhangyu1818/write-file-with@v1
  with:
    file: README.md
    script: test.js
```
