//This Extension Created by mr.Pankaj Kumar Sisodia
//All rights reserved.

'use strict';

let changeColor = document.getElementById('changeColor');

Storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    tabs.query({active: true, currentWindow: true}, function(tabs) {
      tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
