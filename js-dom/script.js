//h１要素を取得
document.querySelector("h1");
const title = document.querySelector("#title");
console.log(title);

//h1テキストを書き換え
title.textContent = "Javascriptで変更しました"
console.log(title);

//P要素を取得
const text = document.querySelector(".text");
console.log(text);
//pのテキストを書き換え
text.textcontent = "この文章も変更されました"