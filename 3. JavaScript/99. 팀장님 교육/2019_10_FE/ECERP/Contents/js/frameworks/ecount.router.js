if(!window.ecount){
  window.ecount = {};
}
// window.ecount = {}
ecount.router = (function () {

  window.addEventListener("hashchange", function(){
    console.log("### hashchageEvent", location.hash);

    let url = getMenu(location.hash.replace("#", "").split("=")[1]);
    movePage(url);
  });

  function movePage(url){
    //url 호출 
    $.ajax({
      url: url,
      success: function(result){
        console.log("### movepage function: ", result);
        $("#mainPage").empty().html(result);
      }
    });
  }

  return {
    route: function (menuId) {
      location.hash = `menuId=${menuId}`;
      // location.hash = `menuType=${menu.menuType}$submenu=${menu.submenu}`;
    }
  }
})();