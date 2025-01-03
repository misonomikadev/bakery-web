// biến toàn cục, toàn global, mấy file js đề áp dụng hết
// cho $ thành querySelector để dùng
// $ quy ước Jquery, $ là querySelector // thay vì ghi querySelector thì ghi $
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const allProduct = $$(".page__product");
const productElements = $$(".product");

function getData(name) {
  return JSON.parse(localStorage.getItem(name)) ?? [];
  // lấy tham số name có trong localStorage và chuyển nó thành JSON, nếu ko có tham số name thì quy ra rỗng
}
// mấy cái trên là dùng chung

(function () {
  const header = $(".header");
  window.addEventListener("scroll", () => {
    const isActive = header.classList.contains("header--active");
    const status = window.scrollY > header.clientHeight;

    if (isActive !== status) {
      if (status) {
        //nếu status là true thì chạy dòng này
        header.classList.add("header--active");
      } else {
        header.classList.remove("header--active");
      }
    }
  });

  // nút <> ở thanh header
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const navbarList = $(".navbar__list");

  prevBtn.addEventListener("click", () => {
    if (navbarList.style.marginLeft !== "0") {
      navbarList.style.marginLeft = "0";
    }
  });

  nextBtn.addEventListener("click", () => {
    if (navbarList.style.marginLeft !== "-240px") {
      navbarList.style.marginLeft = "-240px";
    }
  });

  const periodTimestamp = Number(new Date($(".sale__counter").dataset.period));

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  setInterval(() => {
    let totalSeconds = (periodTimestamp - Date.now()) / 1000;
    // 'totalSeconds' tính bằng cách lấy sự chênh lệch giữa periodTimestamp và thời điểm hiện tại (Date.now()), sau đó chia cho 1000 để chuyển đổi thành số giây.
    days.innerText = String(Math.floor(totalSeconds / 86400));
    // 86400 là số giây trong 1 ngày // được sử dụng để tính số ngày còn lại, và kết quả được gán vào days.innerText
    totalSeconds %= 86400;
    // Dùng phép chia lấy dư với 86400 để lấy số giây còn lại sau khi tính số ngày, và gán lại vào totalSeconds
    hours.innerText = String(Math.floor(totalSeconds / 3600));
    //số giây còn lại được chia cho 3600 (số giây trong một giờ) để tính số giờ còn lại, và kết quả được gán vào hours.innerText
    totalSeconds %= 3600;
    //sau khi chia lấy số dư của giờ và gán lại vào totalSeconds để tính phút
    minutes.innerText = String(Math.floor(totalSeconds / 60));
        //sau khi chia lấy số dư của phút và gán lại vào totalSeconds để đc giây
    seconds.innerText = String(Math.floor(totalSeconds % 60));
  }, 1000);

  const tabs = $$(".tab");
  const pages = $$(".page");

  tabs.forEach((tab, index) => {
    //lặp qua từng phần tử tab. Mỗi lần lặp, hàm callback sẽ được gọi với tham số đầu tiên là phần tử tab hiện tại, và vị trí của tab trong mảng tabs.
    const page = pages.item(index);
    //khi click dô phần tử tab có vị trí nào thì sẽ chỉ tới page có vị trí tương ứng
    tab.addEventListener("click", () => {
      $(".tab--active").classList.remove("tab--active");
      $(".page--active").classList.remove("page--active");

      tab.classList.add("tab--active");
      page.classList.add("page--active");
    });
  });
})();
