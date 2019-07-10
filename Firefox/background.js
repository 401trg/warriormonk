/*
Called when the item has been created, or when creation failed due to an error.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}
/*
Create all the context menu items. Example below..

browser.menus.create({
  id: "UNIQUE_ID",
  title: "MENU_TITLE",
  contexts: ["selection"],
  icons: {
    "3": "icons/ICON.png"
  }
}, onCreated);

*/
browser.menus.create({
  id: "vti",
  title: "Search VirusTotal Intelligence",
  contexts: ["selection"],
  icons: {
    "3": "icons/virustotal.png"
  }
}, onCreated);

browser.menus.create({
  id: "twitter",
  title: "Search Twitter",
  contexts: ["selection"],
  icons: {
     "1": "icons/twitter.png"
   }
}, onCreated);

browser.menus.create({
  id: "riskiq",
  title: "Search RiskIQ",
  contexts: ["selection"],
  icons: {
    "2": "icons/riskiq.png"
  }
}, onCreated);

browser.menus.create({
  id: "protectwise",
  title: "ProtectWise",
  contexts: ["selection"],
  icons: {
    "4": "icons/monk.png"
  }
}, onCreated);

browser.menus.create({
  id: "protectwise-obs-ip",
  title: "Search Observation IPs",
  contexts: ["selection"],
  parentId: "protectwise",
  icons: {
    "5": "icons/monk.png"
  }
}, onCreated);

browser.menus.create({
  id: "protectwise-obs-filehash",
  title: "Search Observation File Hahes",
  contexts: ["selection"],
  parentId: "protectwise",
  icons: {
    "6": "icons/monk.png"
  }
}, onCreated);

browser.menus.create({
  id: "robtex",
  title: "Search Robtex",
  contexts: ["selection"],
  icons: {
    "7": "icons/robtex.png"
  }
}, onCreated);

browser.menus.create({
  id: "shodan",
  title: "Search Shodan",
  contexts: ["selection"],
  icons: {
    "16": "icons/shodan.png"
  }
}, onCreated);

browser.menus.create({
  id: "cyberchef",
  title: "Input into CyberChef",
  contexts: ["selection"],
  icons: {
    "8": "icons/cyberchef.png"
  }
}, onCreated);

browser.menus.create({
  id: "virusbay",
  title: "Search VirusBay",
  contexts: ["selection"],
  icons: {
    "9": "icons/virusbay.png"
  }
}, onCreated);

browser.menus.create({
  id: "hybridanalysis",
  title: "Search Hybrid Analysis",
  contexts: ["selection"],
  icons: {
    "10": "icons/hybridanalysis.png"
  }
}, onCreated);

browser.menus.create({
  id: "googleexac",
  title: "Search Google Exact Matching",
  contexts: ["selection"],
  icons: {
    "11": "icons/google.png"
  }
}, onCreated);

browser.menus.create({
  id: "googletran",
  title: "Google Translate",
  contexts: ["selection"],
  icons: {
    "11": "icons/google.png"
  }
}, onCreated);

browser.menus.create({
  id: "censys",
  title: "Search Censys",
  contexts: ["selection"],
  icons: {
    "12": "icons/censys.png"
  }
}, onCreated);

browser.menus.create({
  id: "censysips",
  title: "Search Censys IPv4 Hosts",
  contexts: ["selection"],
 parentId: "censys",
  icons: {
    "13": "icons/censys.png"
  }
}, onCreated);

browser.menus.create({
  id: "censyswebsites",
  title: "Search Censys Websites",
  contexts: ["selection"],
 parentId: "censys",
  icons: {
    "14": "icons/censys.png"
  }
}, onCreated);

browser.menus.create({
  id: "censyscertificates",
  title: "Search Censys Certificates",
  contexts: ["selection"],
 parentId: "censys",
  icons: {
    "15": "icons/censys.png"
  }
}, onCreated);
/*
Create seperator and side bar option.
*/
browser.menus.create({
  id: "separator-2",
  type: "separator",
  contexts: ["all"]
}, onCreated);

browser.menus.create({
  id: "open-sidebar",
  title: browser.i18n.getMessage("menuItemOpenSidebar"),
  contexts: ["all"],
  command: "_execute_sidebar_action"
}, onCreated);

/*
Functions for all menu options.

function UNIQUE_FUNCTION_NAME(info) {
  var destination = "URL_DESTINATION + info.selectionText;
  browser.tabs.create({ url: destination});
}

*/

function searchTwitter(info) {
  var destination = "https://twitter.com/search?q=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchRiskIQ(info) {
  var destination = "https://community.riskiq.com/search/" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchVTI(info) {
  var destination = "https://www.virustotal.com/intelligence/search/?query=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchProtectWiseObsIP(info) {
  var destination = "https://visualizer.protectwise.com/#killbox/observations?ip=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchProtectWiseObsFileHash(info) {
  var destination = "https://visualizer.protectwise.com/#killbox/observations?fileHash=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchShodan(info) {
  var destination = "https://www.shodan.io/search?query=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchRobtex(info) {
  var destination = "https://www.robtex.com/ip-lookup/" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function inputCyberChef(info) {
  var selection = info.selectionText;
  var enc = window.btoa(selection);
  var enc_selection = enc.replace(/={1,2}$/, '');
  var destination = "https://gchq.github.io/CyberChef/#input=" + enc_selection;
  browser.tabs.create({ url: destination});
}

function searchVirusBay(info) {
  var destination = "https://beta.virusbay.io/sample/browse?q=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchHybridAnalysis(info) {
  var destination = "https://www.hybrid-analysis.com/search?query=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchGoogle(info) {
  var destination = "https://www.google.com/search?q=\"" + info.selectionText + "\"";
  browser.tabs.create({ url: destination});
}

function translateGoogle(info) {
  var destination = "https://translate.google.com/#auto/en/" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchCensysIPs(info) {
  var destination = "https://censys.io/ipv4?q=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchCensysWebsites(info) {
  var destination = "https://censys.io/domain?q=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function searchCensysCertificates(info) {
  var destination = "https://censys.io/certificates?q=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.

    case "UNIQUE_ID":
      UNIQUE_FUNCTION_NAME(info);
      break;

*/
browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "twitter":
      searchTwitter(info);
      break;
    case "riskiq":
      searchRiskIQ(info);
      break;
    case "vti":
      searchVTI(info);
      break;
    case "protectwise-obs-ip":
      searchProtectWiseObsIP(info);
      break;
    case "protectwise-obs-filehash":
      searchProtectWiseObsFileHash(info);
      break;
    case "shodan":
      searchShodan(info);
      break;
    case "robtex":
      searchRobtex(info);
      break;
    case "cyberchef":
      inputCyberChef(info);
      break;
    case "virusbay":
      searchVirusBay(info);
      break;
    case "hybridanalysis":
      searchHybridAnalysis(info);
      break;
    case "googleexac":
      searchGoogle(info);
      break;
    case "googletran":
      translateGoogle(info);
      break;
    case "censyscertificates":
      searchCensysCertificates(info);
      break;
    case "censyswebsites":
      searchCensysWebsites(info);
      break;
    case "censysips":
      searchCensysIPs(info);
      break;
    case "open-sidebar":
      console.log("Opening notes sidebar");
      break;
  }
});
