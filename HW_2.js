// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел

function f0(d1, d2) {
  console.log(d1 + d2)
}

f0(10,20)

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа

function f1(num) {
  console.log(num**2)
}

f1(8)

// 3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
// {"name":И,
//  "surname":Ф,
//  "middlename":О}

function fio(surname,name,middlename) {

  human = JSON.parse(JSON.stringify({surname, name, middlename}))
   return human
}

console.log(fio('Malyshev', 'Ilya', 'Nikolaevich'))


// 4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел.
// Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

let arr = [1,32,53,27,14,59,80,47,12]
let arr1 = [1,3,11,33,47,91]

function even(arr_in) {

 let new_arr = []

  for (let i = 0; i < arr_in.length; i++) {

    if (arr_in[i]%2 == 0) {
      new_arr.push(arr_in[i])
      }
    
  } if (new_arr.length!=0) {
    return new_arr
  } else {
    return 'No even numbers'
  }
}

console.log(even(arr1))


// 5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове. Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".

function find_a(str) {
  let count = 0
  let a = 'a'
  // let a = ['a'] - Альтернативный вариант, работает дольше, дополнить легче

  for(let char of str.toLowerCase()) {
    // if (a.includes(char)) - Альтернативный вариант, работает дольше, дополнить легче
    if (a == char) {
    count++
    }
  }
  
  if (count!=0) {
    console.log('Match')
    return count

  } else {
    return 'No a characters'
  }
  }
   
console.log(find_a('Asassin'))

// 6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента. Элементы: Phone number field, CheckBox, SignIn Button.

let Phone = 
'1. Узнать требования к полю \n' +
'2. Ввести валидные данные в поле \n' + 
'3. Оставить поле пустым \n' + 
'4. Ввести пробел \n' + 
'5. Ввести спецсимволы \n';

let Checkbox = 
'1. Узнать требования к чек-боксу \n' + 
'2. Установить выбор на одном варианте \n' + 
'3. Установить выбор на 2 вариантах и более \n' + 
'4. Установить выбор на всех вариантах \n' + 
'5. Убрать все выбранные варианты, не выбрать ниодного \n';

let SignIn = 
'1. Узнать требования к форме и заполнению \n' + 
'2. Ввести валидные данные \n' + 
'3. Оставить форму пустой \n' +
'4. Проверить валидацию полей: сменой фокуса, сменой поля, нажатием кнопки Далее \n';

function test(str) {
  if (str == 'Phone number field') {
    return Phone
  } else if (str == 'CheckBox') {
    return Checkbox
  } else if (str == 'SignIn Button') {
    return SignIn
  }
}

console.log(test('SignIn Button'))

// 7) Написать функцию которая на вход получает JSON а возвращяет XML

let emp = {
  'ID' : '1',
  'NAME' : 'Ilya',
  'AGE' : '33',
  'SKILLS' : 'JavaScript'
}

function json2xml(obj) {
    let xml = '';
  
    for (let prop in obj) {
    xml += '<' + prop + '>';
     if (typeof obj[prop] == 'object') {
      xml += json2xml(new Object(obj[prop]));
    } else {
      xml += obj[prop];
    }
        xml += '</' + prop + '>\n';
  }
  return xml
}

console.log(json2xml(emp))