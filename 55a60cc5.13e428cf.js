(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(96)),l={id:"get_started",title:"Getting Started",sidebar_label:"Getting Started"},o={unversionedId:"npwd/start/get_started",id:"npwd/start/get_started",isDocsHomePage:!1,title:"Getting Started",description:"Dependencies (As of 2/20/2021)",source:"@site/docs\\npwd\\start\\GetStarted.md",slug:"/npwd/start/get_started",permalink:"/docs/npwd/start/get_started",editUrl:"https://github.com/project-error/docs.projecterror.dev/tree/master/docs/npwd/start/GetStarted.md",version:"current",lastUpdatedBy:"Taso",lastUpdatedAt:1638562153,sidebar_label:"Getting Started"},b=[{value:"Dependencies (As of 2/20/2021)",id:"dependencies-as-of-2202021",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation Steps",id:"installation-steps",children:[]},{value:"Development Iteration Cycle",id:"development-iteration-cycle",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Discord Logging",id:"discord-logging",children:[{value:"Apps",id:"apps",children:[]}]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"dependencies-as-of-2202021"},"Dependencies (As of 2/20/2021)"),Object(i.b)("p",null,"Below are the dependencies for full functionality of the resource. Adapating it to your framework shouldn't be difficult, but some of the features depend on ESX in the current sate. Additonal documentation for what needs to be changed will be made prior to full launch."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://github.com/esx-framework/es_extended/tree/legacy"},"Es_Extended")," For the best results, we recomend ",Object(i.b)("strong",{parentName:"li"},"V1 Final.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://github.com/project-error/screenshot-basic"},"Screenshot-Basic")," ",Object(i.b)("strong",{parentName:"li"},"Be sure to use this version.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://github.com/FrazzIe/mumble-voip-fivem"},"Mumble-Voip")," Support for other VOIP resources is planned, but not currently under development.")),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The Installation Steps assumes you have the following prerequisites:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dependencies installed."),Object(i.b)("li",{parentName:"ol"},"The ability to open a terminal. It's ",Object(i.b)("em",{parentName:"li"},"recomended"),", not required, to use ",Object(i.b)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")," or Windows Powershell for the sake of this guide to better provide support should issues arise."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"Git for windows")," installed"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://nodejs.org/en/about/releases/"},"LTS node.js")," installed"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://yarnpkg.com/"},"yarn")," package manager installed (",Object(i.b)("inlineCode",{parentName:"li"},"npm install -g yarn"),")"),Object(i.b)("li",{parentName:"ol"},"A fivem environment that is set up according to the ",Object(i.b)("a",{parentName:"li",href:"https://docs.fivem.net/docs/server-manual/setting-up-a-server/"},"setting up a server instructions")," from the fivem documentation."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://api.imgur.com/oauth2/addclient"},"Imgur Token")," Your app registration should look like ",Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/yO7L431.png"},"this"),". When you register your app, you will get a ",Object(i.b)("inlineCode",{parentName:"li"},"Client ID"),". This is set in ",Object(i.b)("inlineCode",{parentName:"li"},"the server.cfg")," as such ",Object(i.b)("inlineCode",{parentName:"li"},"setr SCREENSHOT_BASIC_TOKEN Client_ID"),".")),Object(i.b)("h2",{id:"installation-steps"},"Installation Steps"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Resource")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/project-error/npwd"},"repo")," into your ",Object(i.b)("inlineCode",{parentName:"li"},"server-data/resources/")," folder. The path will be ",Object(i.b)("inlineCode",{parentName:"li"},"server-data\\resources\\npwd"),". ",Object(i.b)("strong",{parentName:"li"},"Don't clone the repo into a sub folder.")),Object(i.b)("li",{parentName:"ol"},"Ensure the resource folder is named ",Object(i.b)("inlineCode",{parentName:"li"},"npwd"),"."),Object(i.b)("li",{parentName:"ol"},"Import the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/project-error/npwd/blob/master/resources/import.sql"},"sql file")," from the root directory into your database."),Object(i.b)("li",{parentName:"ol"},"Add the following to your ",Object(i.b)("inlineCode",{parentName:"li"},"server.cfg"),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"setr SCREENSHOT_BASIC_TOKEN Client_ID\nensure npwd # After es_extended.\nensure screenshot-basic\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make your configurations in the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/project-error/npwd/blob/master/config.json"},"config.json")," ",Object(i.b)("strong",{parentName:"li"},"before")," building the phone. Otherwise you will need to re-build."),Object(i.b)("li",{parentName:"ol"},"Open a terminal with the program of your choice."),Object(i.b)("li",{parentName:"ol"},"Change your directiory into ",Object(i.b)("inlineCode",{parentName:"li"},"npwd\\phone")," ",Object(i.b)("em",{parentName:"li"},"like so"),": ",Object(i.b)("inlineCode",{parentName:"li"},"cd A:\\FXServer\\server-data\\resources\\npwd\\phone")),Object(i.b)("li",{parentName:"ol"},"Install node dependencies with ",Object(i.b)("inlineCode",{parentName:"li"},"yarn install"),"."),Object(i.b)("li",{parentName:"ol"},"Build in the current directory with ",Object(i.b)("inlineCode",{parentName:"li"},"yarn build"),"."),Object(i.b)("li",{parentName:"ol"},"Change your directiory into ",Object(i.b)("inlineCode",{parentName:"li"},"npwd\\resources")," ",Object(i.b)("em",{parentName:"li"},"like so"),": ",Object(i.b)("inlineCode",{parentName:"li"},"cd A:\\FXServer\\server-data\\resources\\npwd\\resources")),Object(i.b)("li",{parentName:"ol"},"Install node dependencies with",Object(i.b)("inlineCode",{parentName:"li"},"yarn install"),"."),Object(i.b)("li",{parentName:"ol"},"Build in the current directory with ",Object(i.b)("inlineCode",{parentName:"li"},"yarn build"),"."),Object(i.b)("li",{parentName:"ol"},"Start your FiveM server")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Database")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"New Phone Who Dis (NPWD)")," uses its own database driver compatible with ",Object(i.b)("inlineCode",{parentName:"p"},"mysql-async")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ghmattimysql"),"'s connection string. If you\ndon't utilize these resources, ensure you have this set in your console."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'set mysql_connection_string "server=127.0.0.1;database=es_extended;userid=user;password=pass"\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example ",Object(i.b)("inlineCode",{parentName:"strong"},"server.cfg"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cfg"},"ensure es_extended # Must be started first.\n\n# Mumble-Voip\nensure mumble-voip\nsetr voice_use3dAudio true\nsetr voice_useSendingRangeOnly off\n\n#NPWD\nsetr SCREENSHOT_BASIC_TOKEN YOUR_IMGUR_TOKEN # Don't forget to set the token here.\nensure npwd \nensure screenshot-basic\n\n#All other resources you might have\n")),Object(i.b)("h2",{id:"development-iteration-cycle"},"Development Iteration Cycle"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You must rebuild the resource following any changes by doing ",Object(i.b)("inlineCode",{parentName:"li"},"yarn build")," in the ",Object(i.b)("inlineCode",{parentName:"li"},"resources")," and ",Object(i.b)("inlineCode",{parentName:"li"},"phone")," folder."),Object(i.b)("li",{parentName:"ul"},"If iteration on UI changes, run the project with ",Object(i.b)("inlineCode",{parentName:"li"},"yarn watch")," which will monitor the JavaScript project and rebuild when you make code changes and then do ",Object(i.b)("inlineCode",{parentName:"li"},"ensure npwd")," after making your change."),Object(i.b)("li",{parentName:"ul"},"Avoid commiting ",Object(i.b)("inlineCode",{parentName:"li"},"index.html")," as the development version overrides the production version.")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"This resource is highly configurable through the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/project-error/npwd/blob/master/config.json"},"config.json"),". This JSON file holds configuration for the phone itself, for the apps running on it and peripheral information."),Object(i.b)("p",null,"Below is the list of current configuration options ",Object(i.b)("strong",{parentName:"p"},"(WIP)"),":"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Some of these configurations no longher apply.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Option"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Locale"),Object(i.b)("td",{parentName:"tr",align:null},"en"),Object(i.b)("td",{parentName:"tr",align:null},"The language locale used by the app. See ",Object(i.b)("a",{parentName:"td",href:"https://docs.fivem.net/docs/game-references/controls/"},"fivem keybinds")," for options")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"KeyTogglePhone"),Object(i.b)("td",{parentName:"tr",align:null},"288 (F1)"),Object(i.b)("td",{parentName:"tr",align:null},"The keybind to open and close the app. See ",Object(i.b)("a",{parentName:"td",href:"https://docs.fivem.net/docs/game-references/controls/"},"fivem keybinds")," for options")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PhoneAsItem"),Object(i.b)("td",{parentName:"tr",align:null},"false"),Object(i.b)("td",{parentName:"tr",align:null},"whether or not the phone is an item in game")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"SwimDestroy"),Object(i.b)("td",{parentName:"tr",align:null},"false"),Object(i.b)("td",{parentName:"tr",align:null},"whether or not the phone will have a chance to be destroyed while swimming")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"RunRate"),Object(i.b)("td",{parentName:"tr",align:null},"10"),Object(i.b)("td",{parentName:"tr",align:null},"interval in seconds to check phone destruction")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DestoryChance"),Object(i.b)("td",{parentName:"tr",align:null},"100"),Object(i.b)("td",{parentName:"tr",align:null},"Percent chance that phone destruction will occur")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DestroyPhoneReCheck"),Object(i.b)("td",{parentName:"tr",align:null},"3"),Object(i.b)("td",{parentName:"tr",align:null},"Time in minutes before another phone destruction attempt will happen")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"notificationPosition.horizontal"),Object(i.b)("td",{parentName:"tr",align:null},"right"),Object(i.b)("td",{parentName:"tr",align:null},"Horizontal position of phone notifications. ",Object(i.b)("inlineCode",{parentName:"td"},"left"),", ",Object(i.b)("inlineCode",{parentName:"td"},"center")," or ",Object(i.b)("inlineCode",{parentName:"td"},"right"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"notificationPosition.vertical"),Object(i.b)("td",{parentName:"tr",align:null},"bottom"),Object(i.b)("td",{parentName:"tr",align:null},"Vertical positon of phone notifications. ",Object(i.b)("inlineCode",{parentName:"td"},"top")," or ",Object(i.b)("inlineCode",{parentName:"td"},"bottom"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.showNotifications"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Whether or not to show twitter notifications")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.generateProfileNameFromUsers"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Whether or not the server should automtically generate a player's profile name from their user in the database")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.allowEdtiableProfileName"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Whether or not players can edit their profile name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.allowDeleteTweets"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Whether or not players can delete their own tweets")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.allowReportTweets"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Whether or not players can report tweets. Optional discord integration.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.characterLimit"),Object(i.b)("td",{parentName:"tr",align:null},"160"),Object(i.b)("td",{parentName:"tr",align:null},"Limit on how many characters tweets can contain")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.newLineLimit"),Object(i.b)("td",{parentName:"tr",align:null},"10"),Object(i.b)("td",{parentName:"tr",align:null},"Limit on how many new lines a message can contain")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.enableAvatars"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Whether or not player's can select avatars for their twitter profile")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.enableEmojis"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Whether or not player's can use emojis in tweets")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.enableImages"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"Whether or not player's can add images to tweets (external URLs)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"twitter.maxImages"),Object(i.b)("td",{parentName:"tr",align:null},"3"),Object(i.b)("td",{parentName:"tr",align:null},"The maximum amount of images allowed in a tweet")))),Object(i.b)("h2",{id:"discord-logging"},"Discord Logging"),Object(i.b)("p",null,"To configure Discord integration; add the following variables to your ",Object(i.b)("inlineCode",{parentName:"p"},"server.cfg")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'set discord_bot_token "YOUR_DISCORD_BOT_TOKEN"\nset discord_channel_id "YOUR_DISCORD_CHANNEL_ID"\n')),Object(i.b)("p",null,"Current Discord integrations with the phone ",Object(i.b)("strong",{parentName:"p"},"(WIP)"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Twitter: reporting tweets")),Object(i.b)("h1",{id:"important-information"},"Important Information"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"By installing ",Object(i.b)("a",{parentName:"p",href:"https://github.com/project-error/npwd"},"npwd (NPWD)"),", you agree to the use of the following diagnostic package:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Sentry, (in use within the React portion of NPWD) Automatically\nuploads relevant sesssion details and stack traces whenever an exception is thrown. We use these metrics to further improve the quality of the phone.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To explicitly disable this, we urge you ",Object(i.b)("strong",{parentName:"p"},"not to")," as its incredibly useful metrics for us,\nplease change the ",Object(i.b)("inlineCode",{parentName:"p"},"SentryErrorMetrics")," setting to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," in ",Object(i.b)("inlineCode",{parentName:"p"},"phone/config/default.json")," and rebuild the phone.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Compatability with ",Object(i.b)("a",{parentName:"p",href:"https://github.com/FiveEYZ/esx_kashacter"},"esx_kashacter")," is unknown as of 2/20/2021. Testing still need's to be conducted."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Same applies to any Multi-Character as testing has only been conducted on",Object(i.b)("inlineCode",{parentName:"li"},"V1 Final")," and ",Object(i.b)("inlineCode",{parentName:"li"},"1.1 Weight")," ",Object(i.b)("strong",{parentName:"li"},"without")," the use of these resources."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Encountered an issue? Please open an issue ",Object(i.b)("a",{parentName:"p",href:"https://github.com/project-error/npwd/issues/new/choose"},"here"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you seek additional support, feel free to join the ",Object(i.b)("a",{parentName:"p",href:"https://discord.gg/HYwBjTbAY5"},"Project-Error Discord"),"."))),Object(i.b)("h1",{id:"previews"},"Previews"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://streamable.com/f1ri9r"},"Latest Teaser Video (October 28th)")),Object(i.b)("h3",{id:"apps"},"Apps"),Object(i.b)("p",null,"Most of these apps have UI that does ",Object(i.b)("strong",{parentName:"p"},"not")," represent the final product and are subject to change."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/P5Dg0Mj.png"},Object(i.b)("strong",{parentName:"a"},"Bank"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/96e3bFF.png"},Object(i.b)("strong",{parentName:"a"},"Calculator"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/1aGEV28.png"},Object(i.b)("strong",{parentName:"a"},"Camera"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/3Qc1eJB.png"},Object(i.b)("strong",{parentName:"a"},"Contacts"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/8hPm6tU.png"},Object(i.b)("strong",{parentName:"a"},"Marketplace"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/UYHoVvy.png"},Object(i.b)("strong",{parentName:"a"},"Messages"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/m0ktIyj.png"},Object(i.b)("strong",{parentName:"a"},"Notes"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/zuxERmR.png"},Object(i.b)("strong",{parentName:"a"},"Phone"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/0ggMdij.png"},Object(i.b)("strong",{parentName:"a"},"Settings"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://i.imgur.com/WfjOl1t.png"},Object(i.b)("strong",{parentName:"a"},"Twitter")))))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,u=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return n?a.a.createElement(u,o(o({ref:t},c),{},{components:n})):a.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);