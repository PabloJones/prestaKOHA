
document.addEventListener("click", (e) => {
var x = document.getElementsByTagName("div");
var param={unico:"",horas:"",};
var keys = ['unico', 'horas'];

    browser.storage.local.get(keys).then(function(result) {
        for (var key in result) {
            param[key] = result[key];
        }
    });

  if (e.target.classList.contains("presta")) {
    var chosenPresta = e.target.textContent;
    browser.tabs.executeScript(null, { 
      file: "/content_scripts/prestafy.js" 
    });

	for (i = 0; i < x.length; i++) {
		if (x[i].id==chosenPresta){
			x[i].style.backgroundColor = "#FBFBC9";
		}else
			x[i].style.backgroundColor = "";
	} 
	
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {tipoPrestamo: chosenPresta, horas: param['horas'], unico: param['unico']});
    });
  }
  else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();
  }
});