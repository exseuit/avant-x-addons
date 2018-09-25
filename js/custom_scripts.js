/*    Custom JS Functionality    */

var menuItemsQty = 5;

/*    Set "Show/Hide" Button For Menu Elements of Product Filter    */
window.onload = function(){

	// document.getElementsByClassName('dgwt-wcas-search-input')[0].setAttribute('autofocus',"true");
	document.getElementsByClassName('search-btn')[0].onclick = function(){document.getElementsByClassName('dgwt-wcas-search-input')[0].focus();}
	
	var arrId = ['menu-item-4768', 'menu-item-4767', 'menu-item-25275', 'menu-item-25276', 'menu-item-25281', 'menu-item-25282', 'menu-item-25287', 'menu-item-25288', 'menu-item-25293', 'menu-item-25294'];
	for (i=0; i<arrId.length; i++){
		var arrElem = document.getElementById(arrId[i]);
		if(typeof arrElem != 'undefined' && arrElem != null) arrElem.getElementsByTagName('a')[0].setAttribute('target', '_blank');
	} 	
	
	var mallCz = document.getElementById("mall-cz");
	if(typeof mallCz != 'undefined' && mallCz != null){
		mallCz.innerHTML = '<div style="padding-top: 20px;"><strong>Další zdroje</strong></div><a href="https://mall.cz/partner/partizanstore-eu" target="_blank" rel="noopener" action=""><img src="https://i.cdn.nrholding.net/document/46896840" alt="Najdete nás i na MALL.CZ" width="202" height="74"></a>';
	}
	
	var createShowMoreElement = document.querySelectorAll("[id^=woocommerce_layered_nav-]");
	var createShowMoreTopElement = document.querySelectorAll("[id^=woocommerce_layered_nav-]");
	createShowMoreElement.forEach(function(item){
		var ShowMoreTopElement = document.createElement("div");
		var ShowMoreTopArrow = document.createElement("i");
		if (window.getComputedStyle(item.getElementsByTagName("ul")[0], null).getPropertyValue("display") === "none") {
			ShowMoreTopArrow.classList.add("fas", "fa-chevron-down");
		} else { ShowMoreTopArrow.classList.add("fas", "fa-chevron-up"); 		}
		
	ShowMoreTopElement.appendChild(ShowMoreTopArrow);
	item.getElementsByTagName("h4")[0].appendChild(ShowMoreTopElement).classList.add("top-arrow");  
	
	  if (item.getElementsByTagName("li").length > menuItemsQty){
		var ShowMoreElement = document.createElement("div");
		var ShowMoreArrow = document.createElement("i");
		var ShowMoreText = document.createTextNode("Show More");
		ShowMoreArrow.classList.add("fas", "fa-chevron-down");
		ShowMoreElement.appendChild(ShowMoreArrow);
		ShowMoreElement.appendChild(ShowMoreText);
		item.getElementsByTagName("ul")[0].appendChild(ShowMoreElement).classList.add("bottom-arrow");
		}
	});

	var filterButtonId = document.getElementById('hide_filter');
	if(typeof filterButtonId != 'undefined' && filterButtonId != null) {
			filterButtonId.onclick = function(){
				var x = document.getElementsByClassName("woocommerce-widget-layered-nav");
				for (var i = 0; i < x.length; i++) {
					if(window.getComputedStyle(x[i], null).getPropertyValue("display") === "none") {
						x[i].classList.remove("display_none");
						x[i].classList.add("display_block");
						filterButtonId.innerHTML="Hide Filter";
						} else {
							x[i].classList.remove("display_block");
							x[i].classList.add("display_none");
							filterButtonId.innerHTML="Show Filter";					
			}    
		  }
		};
	};

	if(typeof document.getElementById('secondary') != 'undefined' && document.getElementById('secondary') != null){
		document.getElementById('secondary').addEventListener('click', function(event) {

		  var target = event.target; //event.currentTarget;
		  var navElementId = getAsideId(target);
		  // document.getElementById("demo").innerHTML = target.nodeName + " / " + navElementId;
		  var ulElem = document.getElementById(navElementId).getElementsByTagName('ul')[0];
		  var topArrow = document.getElementById(navElementId).getElementsByClassName("top-arrow")[0];
		  if (target.nodeName === "H4" || target.parentNode.className === "top-arrow"){
			hideShowElement(ulElem, "display_block");
			if (window.getComputedStyle(ulElem, null).getPropertyValue("display") === "none") {
			  topArrow.firstChild.classList.remove("fa-chevron-up");
			  topArrow.firstChild.classList.add("fa-chevron-down");
			  } else {
			  topArrow.firstChild.classList.remove("fa-chevron-down");
			  topArrow.firstChild.classList.add("fa-chevron-up");
			}
		  } else if (target.className === "bottom-arrow" || target.parentNode.className === "bottom-arrow") {
			hideShowBottomElement(navElementId);
		  }

		});
		
	}

	
	var myCurrentPage= window.location.pathname;
	var myDomainName = window.location.hostname;
	
	if (myCurrentPage !== "/") {
		document.getElementById("masthead").style.backgroundColor = "#345058";
	}
	else {
		if(typeof document.getElementById("metaslider_1265").getElementsByTagName("img")[0] != 'undefined' && document.getElementById("metaslider_1265").getElementsByTagName("img")[0] != null){
			var metaSliderScr = document.getElementById("metaslider_1265").getElementsByTagName("img")[0];
			switch (myDomainName){
				case "cz.partizanstore-eu.local": metaSliderScr.src = 'https://partizanstore-eu.local/wp-content/uploads/slideshow_slide-2000x400-CZ.jpg';
				break;
				case "ru.partizanstore-eu.local": metaSliderScr.src = 'https://partizanstore-eu.local/wp-content/uploads/slideshow_slide-2000x400-ru.jpg';
				break;
				case "cz.partizanstore.eu": metaSliderScr.src = 'https://partizanstore.eu/wp-content/uploads/2020/06/slideshow_slide-2000x400-CZ.jpg';
				break;
				case "ru.partizanstore.eu": metaSliderScr.src = 'https://partizanstore.eu/wp-content/uploads/2020/06/slideshow_slide-2000x400-RU.jpg';
				break;
				default: break;
			}
		}

		//return	metaSliderScr;
	}
};


/* Get Product Filter Element's Container Id */
function getAsideId(x){
    if (x.nodeName === "H4") {
      return x.parentNode.id;
    } else if (x.nodeName === "DIV" && x.className === "bottom-arrow") {
      return x.parentNode.parentNode.id;
    } else if (x.nodeName === "I" && x.parentNode.className === "bottom-arrow") {
      return x.parentNode.parentNode.parentNode.id;
    } else if (x.nodeName === "I" && x.parentNode.className === "top-arrow") {
      return x.parentNode.parentNode.parentNode.id;
    }
  };

/* Show/Hide Product Filter's Element Item */
function hideShowBottomElement(id){
    var x = document.getElementById(id).querySelectorAll("[id^='woocommerce_layered_nav-'] > ul > li");
    var y = document.getElementById(id).getElementsByClassName("bottom-arrow")[0];
    if (x.length > menuItemsQty && window.getComputedStyle(x[x.length - 1], null).getPropertyValue("display") === "none") {
      y.lastChild.nodeValue  = "Show Less";
      y.firstChild.classList.remove("fa-chevron-down");
      y.firstChild.classList.add("fa-chevron-up");
    } else {
      y.lastChild .nodeValue = "Show More";
      y.firstChild.classList.remove("fa-chevron-up");
      y.firstChild.classList.add("fa-chevron-down");
    }
    for (var i = x.length - 1; i >= menuItemsQty; i--) {
      hideShowElement(x[i], "display_list_item");
    }
  }

/* Switching function */
function hideShowElement(display_item, display_class){
  if(window.getComputedStyle(display_item, null).getPropertyValue("display") === "none") {
    display_item.classList.remove("display_none");
    display_item.classList.add(display_class);
  } else {
    display_item.classList.remove(display_class);
    display_item.classList.add("display_none");    
  }
}


