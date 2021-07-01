# Ed Chekanov

## Skills
* HTML
* CSS
* JavaScript
* Figma
* Photoshop
* Git
* GitHub

## Let's speak
* Phone: +375(29)619-68-91
* Email: Chekanov.Ed.V@gmail.com
* [GitHub: github.com/EdChekanov](https://github.com/EdChekanov)
* [LinkeIn: Ed Chekanov](https://www.linkedin.com/in/ed-chekanov-137879171/)

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