const sentence = "hello there from Ryan Kwok's Computer\n";


let time = 0;
for (const char of sentence) {
  time += 50
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
}
