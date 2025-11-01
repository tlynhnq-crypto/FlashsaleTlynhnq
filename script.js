const flashSaleContainer = document.getElementById("flashsale");

async function loadFlashSale() {
  flashSaleContainer.innerHTML = "⏳ Đang tải flash sale...";

  try {
    const res = await fetch("https://shopee.vn/api/v4/flash_sale/flash_sale_get_items?limit=10&offset=0");
    const data = await res.json();

    flashSaleContainer.innerHTML = "";

    data.data.items.forEach(item => {
      const link = `https://s.shopee.vn/AKSQWZJFVm?deep_and_web=1&url=${encodeURIComponent("https://shopee.vn/product/" + item.shopid + "/" + item.itemid)}`;
      flashSaleContainer.innerHTML += `
        <div style="border:1px solid #ddd; border-radius:10px; padding:10px; margin:10px;">
          <img src="${item.image}" width="120">
          <h4>${item.name}</h4>
          <p>💰 Giá: ${(item.price / 100000).toLocaleString()}₫</p>
          <a href="${link}" target="_blank">🛒 Mua ngay</a>
        </div>
      `;
    });
  } catch (e) {
    flashSaleContainer.innerHTML = "❌ Lỗi tải dữ liệu flash sale!";
  }
}

loadFlashSale();
