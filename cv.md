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

## About
Let me tell you a few words about myself. My name is Eduard. I'm was born in Mogilev 27 years ago and living here at current time. I graduated from University in 2016 and received the specialty of engineer-builder on the railway. Friendship with profession didn't work out and in 2018 i started learning Html-layout. 
In 2019 i finished course of Html+CSS and try to get my first job as trainee/junior web-developer, but it was be more difficult than i thought)
And now i continue to study in jerks to web.
In 2019 i became a father so it got harder, but i try. Wish me good luck!)