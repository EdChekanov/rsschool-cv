# Ed Chekanov

## Skills
* HTML
* CSS
* SASS
* JavaScript
* TypeScript
* Angular
* Angular Material
* Figma
* Photoshop
* Git
* GitHub
* VS Code

## Let's speak
* Phone: +375(29)619-68-91
* Email: Chekanov.Ed.V@gmail.com
* [GitHub: github.com/EdChekanov](https://github.com/EdChekanov)
* [LinkeIn: Ed Chekanov](https://www.linkedin.com/in/ed-chekanov-ab992422a/)

## Code example
```javascript
function validPass(password) {
  if (password.length < 4 || password.length > 19) {
    return 'INVALID';
  };
  if (password.replace(/[A-Z|a-z]/g, 'p') === password.replace(/[A_Z|a-z|0-9]/g, 'p')) {
    return 'INVALID';
  };
  let passwordCheck;
  passwordCheck = password.replace(/[a-z|A-Z]|[0-9]|_/g, 'p');
  passwordCheck = passwordCheck.split('');
  if (passwordCheck.filter(el => el === 'p').length === passwordCheck.length) {
    return 'VALID';
  } else {
    return 'INVALID';
  }
}
```

## About
Let me tell you a few words about myself. My name is Eduard. I'm was born in Mogilev 28 years ago and living here at current time. I graduated from University in 2016 and received the specialty of engineer-builder on the railway. Some time later I become interested in the web development and started learning HTML and CSS. 
In 2021-2022 I went to course of front-end development by the Rolling Scopes School, it contain series of 4th courses(JS+Angular) and succesfully finished each of them. 
Now I'm hope to find my first job in new sphere for myself.