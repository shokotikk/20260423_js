//要素取得
const button = $("#btn");
// console.log(button);
const title = $("title");
const text = $("#text");

//イベントをまとめて追加(テキスト変更)
button.click(function() {
    title.text("クリックされました");
    title.classList("color","red");
    text.hide();
});

