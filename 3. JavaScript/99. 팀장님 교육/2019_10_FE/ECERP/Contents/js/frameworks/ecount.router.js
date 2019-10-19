window.ecount = {}
ecount.router = (function () {

  return {
    route: function (menu) {
      location.hash = `menuType=${menu.menuType}$submenu=${menu.submenu}`;
    }
  }
})();