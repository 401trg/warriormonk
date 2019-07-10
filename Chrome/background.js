/*
Functions for all menu options. Example below.

UNIQUE_FUNCTION_NAME = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "SEARCH_DESTINATION" + query});
}

*/
searchRiskIQ = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://community.riskiq.com/search/" + query});
}
searchTwitter = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://twitter.com/search?q=" + query});
}
searchVTI = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.virustotal.com/intelligence/search/?query=" + query});
}
searchProtectWiseObsIP = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://visualizer.protectwise.com/#killbox/observations?ip=" + query});
}
searchProtectWiseObsFileHash = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://visualizer.protectwise.com/#killbox/observations?fileHash=" + query});
}
searchShodan = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.shodan.io/search?query=" + query});
}
searchCyberChef = function(word){
  var query = word.selectionText;
  var enc = window.btoa(query);
  var enc_selection = enc.replace(/={1,2}$/, '');
  chrome.tabs.create({url: "https://gchq.github.io/CyberChef/#input=" + enc_selection});
}
searchVirusBay = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://beta.virusbay.io/sample/browse?q=" + query});
}
searchHybridAnalysis = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.hybrid-analysis.com/search?query=" + query});
}
searchGoogle = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.google.com/search?q=\"" + query + "\""});
}
searchCensysIPs = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://censys.io/ipv4?q=" + query});
}
searchCensysWebsites = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://censys.io/domain?q=" + query});
}
searchCensysCertificates = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://censys.io/certificates?q=" + query});
}
googleTranslate = function(word){
   var query = word.selectionText;
      chrome.tabs.create({url: "https://translate.google.com/#auto/en/" + query});
}
searchRobtex = function(word){
   var query = word.selectionText;
      chrome.tabs.create({url: "https://www.robtex.com/ip-lookup/" + query});
}

/*

chrome.contextMenus.create({
 title: "MENU_ITEM_TITLE",
 contexts:["selection"],
 onclick: UNIQUE_FUNCITON_NAME
});

*/

chrome.contextMenus.create({
 title: "Search VirusTotal Intelligence",
 contexts:["selection"],  // ContextType
 onclick: searchVTI // A callback function
});

chrome.contextMenus.create({
 title: "Search Twitter",
 contexts:["selection"],  // ContextType
 onclick: searchTwitter // A callback function
});

chrome.contextMenus.create({
 title: "Search RiskIQ",
 contexts:["selection"],  // ContextType
 onclick: searchRiskIQ // A callback function
});

chrome.contextMenus.create({
 title: "ProtectWise",
 contexts:["selection"],  // ContextType
 id: "protectwise"
});

chrome.contextMenus.create({
 title: "Search Observation IPs",
 parentId: "protectwise",
 contexts:["selection"],  // ContextType
 onclick: searchProtectWiseObsIP // A callback function
});

chrome.contextMenus.create({
 title: "Search Observation File Hahes",
 parentId: "protectwise",
 contexts:["selection"],  // ContextType
 onclick: searchProtectWiseObsFileHash // A callback function
});

chrome.contextMenus.create({
 title: "Search Shodan",
 contexts:["selection"],  // ContextType
 onclick: searchShodan // A callback function
});

chrome.contextMenus.create({
 title: "Search Robtex",
 contexts:["selection"],  // ContextType
 onclick: searchRobtex // A callback function
});

chrome.contextMenus.create({
 title: "Input into CyberChef",
 contexts:["selection"],  // ContextType
 onclick: searchCyberChef // A callback function
});

chrome.contextMenus.create({
 title: "Search VirusBay",
 contexts:["selection"],  // ContextType
 onclick: searchVirusBay // A callback function
});

chrome.contextMenus.create({
 title: "Search Hybrid Analysis",
 contexts:["selection"],  // ContextType
 onclick: searchHybridAnalysis // A callback function
});

chrome.contextMenus.create({
 title: "Search Google Exact Matching",
 contexts:["selection"],  // ContextType
 onclick: searchGoogle // A callback function
});

chrome.contextMenus.create({
 title: "Google Translate",
 contexts:["selection"],  // ContextType
 onclick: googleTranslate // A callback function
});

chrome.contextMenus.create({
 id: "censys",
 title: "Search Censys",
 contexts:["selection"],  // ContextType
});

chrome.contextMenus.create({
 parentId: "censys",
 title: "Search Censys IPv4 Hosts",
 contexts:["selection"],  // ContextType
 onclick: searchCensysIPs // A callback function
});

chrome.contextMenus.create({
 parentId: "censys",
 title: "Search Censys Websites",
 contexts:["selection"],  // ContextType
 onclick: searchCensysWebsites // A callback function
});

chrome.contextMenus.create({
 parentId: "censys",
 title: "Search Censys Certificates",
 contexts:["selection"],  // ContextType
 onclick: searchCensysCertificates // A callback function
});