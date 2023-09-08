//ホームが常にハイライトされるのを防ぐ
const menus = [];
      for (let i = 1; i <= 4; i++) {
        let menu = document.getElementById(`menu${i}`);
        menus.push(menu);
      }
      console.log(menus); //0, 1, 2, 3

      //クリックしたliタグだけ.activeをつける。それ以外はremoveしたい。
      document.addEventListener("click", (e) => {
        console.log(e.target.id);
        menus.map((menu) => {
          if (e.target.id === menu.id) {
            menu.classList.add("active");
          } else {
            menu.classList.remove("active");
          }
        });
      });
