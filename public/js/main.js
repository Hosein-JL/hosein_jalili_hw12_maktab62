$(document).ready(() => {
  $("#search-btn").click(function () {
    // e.preventDefault();
    if ($("#search-input").val()) {
      let searchParams = new URLSearchParams({
        search: $("#search-input").val(),
      }).toString();
      window.location.search = `${searchParams}`;
    }
  });
});
