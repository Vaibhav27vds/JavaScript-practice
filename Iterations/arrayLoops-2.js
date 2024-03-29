const myObject = {
    js: "javascript",
    ts: "typescript",
    java:"java"
}

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}

