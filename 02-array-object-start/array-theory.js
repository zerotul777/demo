const names = ['Елена', 'Игорь','Максим','Василий']

// добавляет первый элемент массива
names.push ('Alena')

// добавляет последний элемент массива
names.unshift ('Sveta')

// извлекает первый элемент массива
const firstName = names.shift()

// извлекает последний элемент массива
const lastName = names.pop()


console.log('Names: ', names);

