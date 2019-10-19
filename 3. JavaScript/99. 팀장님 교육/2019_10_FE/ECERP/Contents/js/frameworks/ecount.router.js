window.ecount = {}
ecount.router = (function () {

  window.addEventListener("hashchange", function(){
    console.log("### hashchageEvent", location.hash);

    let url = getMenu(location.hash.replace("#", "").split("&")[1]);
    movePage(url);
  });

  return {
    route: function (menuId) {
      location.hash = `menuId=${menuId}`;
      // location.hash = `menuType=${menu.menuType}$submenu=${menu.submenu}`;
    }
  }
})();