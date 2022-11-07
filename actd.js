let redirectLink = $(".excel-link").attr("href");
let currentTemplate = $(".excel-link").text();
$(".excel-link").hide();

// Open a new tab in the user browser & display the template//
function changeRedirect() {
  window.open(redirectLink, "_blank");
  $("#cta-hidden").click();
}
//Update and display modal when we click on link//
function updateModal() {
  let spreadsheetKind = $(this).attr("id");
  if (spreadsheetKind === "xlsx-btn") {
    let cta = ctatitle();
    $("#header-modal").text("You can use Excel… or upgrade to Actiondesk");
    $("#form-modal").html(cta);
    $(".spreadsheet-type").val("Excel-Actiondesk");
    $(".backuphidden").val("Excel");
    $("#gsheet-picto").hide();
    $("#xls-picto").show();
    $(".text-block-button-template").text("Download Excel Template");
    $(".button-stroke").show();
    $(".cta-header.modal").attr("value", "Try template in actiondesk");
    redirectLink = $(".excel-link").attr("href");
    currentTemplate = $(".excel-link").text();
    $(".excel-link").hide();
    $(".gsheet-link").hide();
  } else if (spreadsheetKind === "gsheet-btn") {
    let cta = ctatitle();
    $("#header-modal").text(
      "You can use Google Sheets… or upgrade to Actiondesk"
    );
    $("#form-modal").html(cta);
    $(".spreadsheet-type").val("Gsheet-Actiondesk");
    $(".backuphidden").val("Gsheet");
    $("#gsheet-picto").show();
    $("#xls-picto").hide();
    $(".button-stroke").show();
    $(".cta-header.modal").attr("value", "Try template in actiondesk");
    $(".text-block-button-template").text("Copy Google Sheet Template");
    redirectLink = $(".gsheet-link").attr("href");
    currentTemplate = $(".gsheet-link").text();
    $(".excel-link").hide();
    $(".gsheet-link").hide();
  } else {
    let modalActionTitle = "Try this " + currentTemplate + " template today";
    $("#header-modal").text(modalActionTitle);
    $("#form-modal").html(
      "<h2 class='header-cta-template'>Get started <span class='underline-header'>today</span></h2>"
    );
    $(".button-stroke").hide();
    $(".cta-header.modal").attr("value", "Start with this template");

    $(".spreadsheet-type").val("ActionDesk");
    $(".backuphidden").val("ActionDesk");
  }
  $(".excel-mopal_section").toggleClass("not-visible");

  function ctatitle() {
    return (
      "<h2 class='header-cta-template'>Download the " +
      currentTemplate +
      " Excel template <span class='underline-header'>today</span></h2>"
    );
  }
}

//Check tthat the form has been completed and then enable the button if so//
function checkForm() {
  let emailValue = $("#email-template").val();
  let nameOK = $("#name-template").val();
  var emailReg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let resultemail = emailReg.test(emailValue);
  if (resultemail === true && nameOK !== "") {
    $(".cta-header.modal").removeClass("not-clickable");
    $(".button-stroke").removeClass("not-clickable");
  }
}
//Close the modal when clicking on something//
function closeModal() {
  $(".excel-mopal_section").toggleClass("not-visible");
}

function slider1() {
  let splides = $(".splide-template");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 1,
      focus: 0,
      type: "loop",
      gap: "2em", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          perPage: 1
        },
        767: {
          perPage: 1
        },
        479: {
          perPage: 1
        }
      }
    }).mount();
  }
}
function departmentID() {
  let deptValue = $(this).find("#dept-name").text();
  $(this).attr("department", deptValue);
}
function templateDirectory() {
  let department = $(this).find(".dpt-name").text();
  $(this).find(".dpt-name").remove();
  let searchdept = '[department="' + department + '"]';
  $(this).appendTo(searchdept);
}

function count() {
  var items = $(this).find(".template-wrapper").length;
  if (items === 0) {
    $(this).remove();
  }
}

function updateSecondForm() {
  let nameOK = $(".excel-modal-form #name-template").val();
  let emailOK = $(".excel-modal-form #email-template").val();
  $(".hiddenform_collect-data-onclick #name-template").val(nameOK);
  $(".hiddenform_collect-data-onclick #email-template").val(emailOK);
}

document.addEventListener("DOMContentLoaded", function () {
  slider1();
  $(".wrapper-dept").each(departmentID);
  $(".button-stroke").on("click", changeRedirect);
  $(".text-linkarrow_wrapper").on("click", updateModal);
  $("#actiondesk-btn").on("click", updateModal);
  $("input").on("keyup change", checkForm);
  $(".close-svg-block, .close-modal").on("click", closeModal);
  $(".template-wrapper").each(templateDirectory);
  $(".wrapper-dept").each(count);
  $(".text-input-template").on("keyup change", updateSecondForm);
});
