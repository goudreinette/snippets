var names = ['Karl', 'Friedrich', 'gauss']

var introductions = names.map(name => soAndSo => `Hello, ${soAndSo} my name is ${name}`)

introductions.map(introduction => console.log(introduction('Rein')))
