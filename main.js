(function () {
  const initVectorInputs = document.querySelectorAll(
    ".init-vector-input > input"
  );
  if (initVectorInputs.length === 0) {
    return;
  }
  const inputField = initVectorInputs[15];
  const validBox = document.querySelector(".plaintext-validity");
  (async function autoFillAndCheck() {
    for (let i = 0; i < 256; i++) {
      const hexValue = i.toString(16).padStart(2, "0");
      inputField.value = hexValue;
      update();
      if (validBox.innerText === "Padding is Valid") {
        console.log(`0x${hexValue}`);
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  })();
})();
