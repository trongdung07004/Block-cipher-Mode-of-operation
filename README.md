# mã hóa với mode ecb:
**mã hóa**
```
openssl enc -aes-128-ecb -in ecb -out e_ecb -pbkdf2
```

Sau câu lệnh này thì nhập mật khẩu, option ```-pbkdf2``` này sẽ giúp tạo K và iv từ mật khẩu mình nhập vào

**giải mã**
```
openssl enc -d -aes-128-ecb -in  e_ecb -out d_ecb -pbkdf2
```

# mã hóa với mode cbc
```
openssl enc -aes-128-cbc -in  cbc -out e_cbc -pbkdf2
```

**giải mã tương tự như ecb**

# mã nhúng vào console để chạy tìm kiếm giá trị hex hợp lệ với padding 
```
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
```

thay đổi ```const inputField = initVectorInputs[15];``` số trong dòng này để tìm kiếm giá trị thích hợp cho từng byte
