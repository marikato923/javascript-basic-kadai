// btnというidを持つhtml要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つhtml要素を取得し、定数に代入する
const text = document.getElementById('text')

// html要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // h2要素のテキストを変更する
    text.textContent = 'ボタンをクリックしました';
});