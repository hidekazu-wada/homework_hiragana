let numbers = Array.from({ length: 21 }, (_, i) => i + 1);
const allNumbersOutMessage = "おしまーーーーーい";

function getRandomNumber() {
  if (numbers.length === 0) {
    return allNumbersOutMessage;
  }

  const index = Math.floor(Math.random() * numbers.length);
  const number = numbers[index];

  // 選ばれた数字を配列から削除
  numbers.splice(index, 1);

  return number;
}

// ボタン要素の参照を取得
const button = document.getElementById("click");

// リスト要素の参照を取得
const answerList = document.getElementById("anser");

// ボタンにクリックイベントリスナーを追加
button.addEventListener("click", () => {
  // ランダムな数字を取得
  const number = getRandomNumber();

  // 新しいli要素を作成
  const listItem = document.createElement("li");

  // li要素にテキストを設定
  listItem.textContent = number;

  // 'すべての数字が出ました'が返された場合、li要素に'completed'クラスを追加
  if (number === allNumbersOutMessage) {
    listItem.classList.add("completed");
  }

  // li要素をリストに追加
  answerList.appendChild(listItem);
});
