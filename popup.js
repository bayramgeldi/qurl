// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let urlP = document.getElementById('url');

window.onload=function (){
  generateQrCode();
}
let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "Qr My Link",
  width: 240,
  height: 240,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});


function generateQrCode() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    qrcode.makeCode(tabs[0].url);
    urlP.innerHTML=tabs[0].title;
  });
}
