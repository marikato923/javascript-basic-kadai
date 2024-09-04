// id 'btn'というhtml要素を取得して代数に編入する
const btn = document.getElementById('btn');

// id 'text'というhtml要素を取得して代数に編入する
const text = document.getElementById('text');

// html要素がクリックされた2秒後にイベント処理を実行する
btn.addEventListener('click', () => {
setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
}, 2000);
} )
