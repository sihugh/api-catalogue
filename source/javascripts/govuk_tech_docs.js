//= require _vendor/jquery
//= require _vendor/modernizr
//= require _vendor/fixedsticky
//= require _vendor/lodash
//= require _start-modules
//= require govuk-frontend/govuk/all.js

$(function () {
  $('.fixedsticky').fixedsticky()
  GOVUKFrontend.initAll()
})
