// Custom Product Filter
// сustom-product-filter.js

window.onload = function () {

  var widget = document.getElementsByClassName("woocommerce-widget-layered-nav");
  var widgetListItemNumber = 3;
  for (let index = 0; index < widget.length; index++) {

    var widgetTitle = widget[index].querySelector('.widget-title');
    var widgetList = widget[index].querySelector('.woocommerce-widget-layered-nav-list');
    var widgetListItem = widget[index].querySelectorAll('.woocommerce-widget-layered-nav-list__item');

    var lessMoreBtn = document.createElement('li');
    lessMoreBtn.classList.add('woocommerce-widget-layered-nav-list__item', 'less-more-btn')
    var lessMoreNode = document.createTextNode('more...')

    for (let index = widgetListItemNumber; index < widgetListItem.length; index++) {
      widgetListItem[index].classList.add("display-mode");
      if (index >= widgetListItemNumber) {
        lessMoreBtn.appendChild(lessMoreNode);
        widgetList.appendChild(lessMoreBtn);
      }
    }

    lessMoreBtn.addEventListener('click', function () {
      // if (lessMoreBtn.innerHTML == 'less') { lessMoreBtn.innerHTML = 'more'; } else { lessMoreBtn.innerHTML = 'less'; }
      var btn = widget[index].querySelector('.less-more-btn');
      var widgetListItem = widget[index].querySelectorAll('.woocommerce-widget-layered-nav-list__item');



      for (let index = widgetListItemNumber; index < widgetListItem.length; index++) {
        // widgetListItem[index].classList.add("display-mode");
        if (widgetListItem[index].classList.contains("display-mode")) {
          widgetListItem[index].classList.remove("display-mode")
        } else {
          widgetListItem[index].classList.add("display-mode")
        }
      }

      if (btn.innerHTML == 'more...') {
        btn.innerHTML = 'less...';
      } else {
        btn.innerHTML = 'more...';
      }

    });

    widgetTitle.addEventListener('click', function () {
      var widgetList = widget[index].querySelector('.woocommerce-widget-layered-nav-list');
      var Title = widget[index].querySelector('.widget-title');
      if (Title.classList.contains('arrow-mode')) {
        Title.classList.remove('arrow-mode');

      } else {
        Title.classList.add('arrow-mode');

      }
      if (widgetList.classList.contains('display-mode')) {
        widgetList.classList.remove('display-mode');
      } else {
        widgetList.classList.add('display-mode');
      }


    });
  }
}


