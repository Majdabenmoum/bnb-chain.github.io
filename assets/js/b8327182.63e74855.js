"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const i={},o="DIA Data Oracles on BNB Smart Chain",c={unversionedId:"dia",id:"dia",title:"DIA Data Oracles on BNB Smart Chain",description:"Introduction",source:"@site/docs/dia.md",sourceDirName:".",slug:"/dia",permalink:"/docs/dia",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/dia.md",tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Assets",id:"supported-assets",level:2},{value:"Data Access",id:"data-access",level:2},{value:"Smart Contract",id:"smart-contract",level:3},{value:"Deployed Addresses",id:"deployed-addresses",level:4}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dia-data-oracles-on-bnb-smart-chain"},"DIA Data Oracles on BNB Smart Chain"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"DApp developers who want to leverage DIA oracles can access the published data on BNB Smart Chain. DIA offers cryptocurrency and data about traditional financial assets."),(0,a.kt)("h2",{id:"supported-assets"},"Supported Assets"),(0,a.kt)("p",null,"DIA supports assets from various categories to be included into the oracle. A selection of assets is listed here:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Data Feed Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"BNB Coin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Crypto Price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Bitcoin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Crypto Price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Ethereum"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Crypto Price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Tether"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Crypto Price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"XRP"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Crypto price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Barnbridge Protocol"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Farming Pool Data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"yearn.finance"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Farming Pool Data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CREX on Crex"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Chart Point on Exchange")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"DAI on CurveFi"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Chart Point on Exchange")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WBNB on PancakeSwap"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Chart Point on Exchange")))),(0,a.kt)("h2",{id:"data-access"},"Data Access"),(0,a.kt)("p",null,"All asset prices are determined in USD.\nWhere appliccable, the oracle also provides information on circulating supply and the timestamp of data collection.\nThe query in the smart contract is realized with the symbol of the asset."),(0,a.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,a.kt)("p",null,"DIA data is published in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DIAOracle")," smart contract. By querying the ",(0,a.kt)("inlineCode",{parentName:"p"},"getCoinInfo()")," function you can retrieve the requested data."),(0,a.kt)("p",null,"It takes the name of the asset as input, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"Bitcoin")," and returns this struct of data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"struct CoinInfo {\n    uint256 price;\n    uint256 supply;\n    uint256 lastUpdateTimestamp;\n    string symbol;\n}\n")),(0,a.kt)("p",null,"The following snippet shows how to retrieve the BTC price of an asset (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"BNB Coin"),") using a smart contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pragma solidity ^0.4.24;\n\ncontract DiaOracle {\n    address owner;\n\n    struct CoinInfo {\n        uint256 price;\n        uint256 supply;\n        uint256 lastUpdateTimestamp;\n        string symbol;\n    }\n\n    mapping(string => CoinInfo) diaOracles;\n\n    event newCoinInfo(\n        string name,\n        string symbol,\n        uint256 price,\n        uint256 supply,\n        uint256 lastUpdateTimestamp\n    );\n\n    constructor() public {\n        owner = msg.sender;\n    }\n\n    function changeOwner(address newOwner) public {\n        require(msg.sender == owner);\n        owner = newOwner;\n    }\n\n    function updateCoinInfo(string name, string symbol, uint256 newPrice, uint256 newSupply, uint256 newTimestamp) public {\n        require(msg.sender == owner);\n        diaOracles[name] = (CoinInfo(newPrice, newSupply, newTimestamp, symbol));\n        emit newCoinInfo(name, symbol, newPrice, newSupply, newTimestamp);\n    }\n\n    function getCoinInfo(string name) public view returns (uint256, uint256, uint256, string) {\n        return (\n            diaOracles[name].price,\n            diaOracles[name].supply,\n            diaOracles[name].lastUpdateTimestamp,\n            diaOracles[name].symbol\n        );\n    }\n}\n\ncontract DiaAssetBtcOracle {\n    DiaOracle oracle;\n    address owner;\n    \n    constructor() public {\n        owner = msg.sender;\n    }\n    \n    function setOracleAddress(address _address) public {\n        require(msg.sender == owner);\n        oracle = DiaOracle(_address);\n    }\n    \n    function getAssetEurRate(string asset) constant public returns (uint256) {\n        (uint assetPrice,,,) = oracle.getCoinInfo(asset);\n        (uint btcPrice,,,) = oracle.getCoinInfo("Bitcoin");\n        return (assetPrice * 100000 / btcPrice);\n    }\n    \n}\n')),(0,a.kt)("h4",{id:"deployed-addresses"},"Deployed Addresses"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Chain name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Oracle Contract Address"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Update Frequency"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"BSC: Testnet"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"0xf35bEE4B6727D2D1c9167C5fB4D51855D6bB693c")),(0,a.kt)("td",{parentName:"tr",align:"center"},"1/day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"BSC: Mainnet"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"0xf35bEE4B6727D2D1c9167C5fB4D51855D6bB693c")),(0,a.kt)("td",{parentName:"tr",align:"center"},"1/day")))),(0,a.kt)("p",null,"The full documentation of the DIA oracle is located ",(0,a.kt)("a",{parentName:"p",href:"https://docs.diadata.org/documentation/oracle-documentation"},"here"),"."))}m.isMDXComponent=!0}}]);