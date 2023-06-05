"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7232],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=m(a),u=r,b=p["".concat(d,".").concat(u)]||p[u]||s[u]||l;return a?n.createElement(b,i(i({ref:e},c),{},{components:a})):n.createElement(b,i({ref:e},c))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82301:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(83117),r=(a(67294),a(3905));const l={},i="BC <-> BSC Token Bridge",o={unversionedId:"beaconchain/learn/bc-bridge",id:"beaconchain/learn/bc-bridge",title:"BC <-> BSC Token Bridge",description:"!!! Note",source:"@site/docs/beaconchain/learn/bc-bridge.md",sourceDirName:"beaconchain/learn",slug:"/beaconchain/learn/bc-bridge",permalink:"/docs/beaconchain/learn/bc-bridge",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/learn/bc-bridge.md",tags:[],version:"current",frontMatter:{}},d={},m=[{value:"What is BC &lt;-&gt; BSC  bridge",id:"what-is-bc---bsc--bridge",level:2},{value:"Fee Table",id:"fee-table",level:2},{value:"Commands",id:"commands",level:2},{value:"Download",id:"download",level:3},{value:"Bind",id:"bind",level:3},{value:"Parameters for BC &lt;-&gt; BSC  bridge bind",id:"parameters-for-bc---bsc--bridge-bind",level:4},{value:"For example",id:"for-example",level:4},{value:"Unbind",id:"unbind",level:3},{value:"Parameters for BC &lt;-&gt; BSC  bridge unbind",id:"parameters-for-bc---bsc--bridge-unbind",level:4},{value:"For example",id:"for-example-1",level:4},{value:"Transfer out",id:"transfer-out",level:3},{value:"Parameters for BC &lt;-&gt; BSC bridge transfer-out",id:"parameters-for-bc---bsc-bridge-transfer-out",level:4},{value:"For example",id:"for-example-2",level:4}],c={toc:m},p="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bc---bsc-token-bridge"},"BC <-> BSC Token Bridge"),(0,r.kt)("p",null,"!!! Note\nPlease note that ",(0,r.kt)("em",{parentName:"p"},"BC <-> BSC Token Bridge")," is a module of Beacon Chain  fullnode to facilitate cross-chain transfer between Beacon Chain  and BNB Smart Chain , while ",(0,r.kt)("a",{parentName:"p",href:"https://www.binance.org/en/bridge"},"Binance Bridge"),", a bridge service providing access to inter-blockchain liquidity for Beacon Chain , BNB Smart Chain  decentralized applications, and bring valuable assets to Beacon Chain  ecosystems."),(0,r.kt)("h2",{id:"what-is-bc---bsc--bridge"},"What is BC <-> BSC  bridge"),(0,r.kt)("p",null,"BC <-> BSC token bridge for self transfers of BEP2 tokens to BEP20 (ERC20 representation). The BC <-> BSC  bridge connects two chains (BC and BSC). When a user deposits BEP2 into the BC <-> BSC bridge contract contract on BC they get the same amount of BEP20 tokens on BSC, and they can convert them back as well."),(0,r.kt)("p",null,"A purely-code-controlled escrow account is a kind of account which is derived from a hard-coded string in Beacon Chain  protocol. This kind of account doesn't have its own private key and it's only controlled by code in protocol. The code for calculating escrow account is the same as how it's done in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/82a2c5d6d86ffd761f0162b93f0aaa57b7f66fe7/x/supply/internal/types/account.go#L40"},"cosmos-sdk"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'AtomicSwapCoinsAccAddr = sdk.AccAddress(crypto.AddressHash([]byte("BinanceChainPegAccount")))\n')),(0,r.kt)("p",null,"The account for mainnet is: ",(0,r.kt)("strong",{parentName:"p"},"bnb1v8vkkymvhe2sf7gd2092ujc6hweta38xadu2pj")," and the account for testnet is: ",(0,r.kt)("strong",{parentName:"p"},"tbnb1v8vkkymvhe2sf7gd2092ujc6hweta38xnc4wpr"),". Once the swap is claimed or refunded, the fund will be transferred from the purely-code-controlled escrow account to client accounts."),(0,r.kt)("h2",{id:"fee-table"},"Fee Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Pay in BNB"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BC <-> BSC Bridge Bind"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Out"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BC <-> BSC Bridge Bind Relayer Fee"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Out Relayer Fee"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01")))),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"download"},"Download"),(0,r.kt)("p",null,"Please download ",(0,r.kt)("inlineCode",{parentName:"p"},"tbnbcli")," binary from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/node/releases/tag/v0.8.1"},"here")),(0,r.kt)("h3",{id:"bind"},"Bind"),(0,r.kt)("h4",{id:"parameters-for-bc---bsc--bridge-bind"},"Parameters for BC <-> BSC  bridge bind"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--from"),(0,r.kt)("td",{parentName:"tr",align:null},"alice"),(0,r.kt)("td",{parentName:"tr",align:null},"account name"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"DEF-0E9"),(0,r.kt)("td",{parentName:"tr",align:null},"chain-id of the side  chain the validator belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--amount"),(0,r.kt)("td",{parentName:"tr",align:null},"1000000000"),(0,r.kt)("td",{parentName:"tr",align:null},"amount of tokens to bind"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--contract-address"),(0,r.kt)("td",{parentName:"tr",align:null},"0x6aade9709155a8386c63c1d2e5939525b960b4e7"),(0,r.kt)("td",{parentName:"tr",align:null},"contract address of token  in smart chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--contract-decimals"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"decimals of token in  smart chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--expire-time"),(0,r.kt)("td",{parentName:"tr",align:null},"1594715271"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp of bind expire  time"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h4",{id:"for-example"},"For example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mainnet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli bridge bind --symbol DEF-0F9 --amount 6000000000000000 --expire-time 1594715271 --contract-decimals 18 --from alice --chain-id Binance-Chain-Tigris --contract-address 0x6aade9709155a8386c63c1d2e5939525b960b4e7 --home ~/home_cli\n")),(0,r.kt)("h3",{id:"unbind"},"Unbind"),(0,r.kt)("h4",{id:"parameters-for-bc---bsc--bridge-unbind"},"Parameters for BC <-> BSC  bridge unbind"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--from"),(0,r.kt)("td",{parentName:"tr",align:null},"alice"),(0,r.kt)("td",{parentName:"tr",align:null},"account name"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"DEF-0E9"),(0,r.kt)("td",{parentName:"tr",align:null},"chain-id of the side  chain the validator belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h4",{id:"for-example-1"},"For example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mainnet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli bridge unbind --symbol DEF-0F9 --from alice --chain-id Binance-Chain-Tigris --home ~/home_cli\n")),(0,r.kt)("h3",{id:"transfer-out"},"Transfer out"),(0,r.kt)("h4",{id:"parameters-for-bc---bsc-bridge-transfer-out"},"Parameters for BC <-> BSC bridge transfer-out"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--from"),(0,r.kt)("td",{parentName:"tr",align:null},"alice"),(0,r.kt)("td",{parentName:"tr",align:null},"account name"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--to"),(0,r.kt)("td",{parentName:"tr",align:null},"0xf9f609f9f4309f191654aa1fd691a6be6aefa7ac"),(0,r.kt)("td",{parentName:"tr",align:null},"receiver address in smart  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--amount"),(0,r.kt)("td",{parentName:"tr",align:null},"1000000000:BNB  (10 BNB)"),(0,r.kt)("td",{parentName:"tr",align:null},"amount of token to  transfer"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--expire-time"),(0,r.kt)("td",{parentName:"tr",align:null},"1594715271"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp of transfer out  expire time"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h4",{id:"for-example-2"},"For example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mainnet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli bridge transfer-out --to 0xf9f609f9f4309f191654aa1fd691a6be6aefa7ac --expire-time 1594715271 --chain-id Binance-Chain-Tigris --from alice --amount 100000000:DEF-0F9 --home ~/home_cli\n")))}s.isMDXComponent=!0}}]);