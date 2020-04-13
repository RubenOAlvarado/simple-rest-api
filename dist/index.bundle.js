module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n={MONGO_URL:"mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api-dev?retryWrites=true&w=majority"},u={MONGO_URL:"mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api?retryWrites=true&w=majority"},o={MONGO_URL:"mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api?retryWrites=true&w=majority"},i={PORT:process.env.PORT||3e3};t.default=Object.assign({},i,function(e){switch(e){case"development":return n;case"test":return u;default:return o}}("production"))},function(e,t){e.exports=require("mongoose")},function(e,t,r){"use strict";var n=s(r(0)),u=s(r(1));r(4);var o=s(r(5)),i=s(r(11));function s(e){return e&&e.__esModule?e:{default:e}}const a=(0,n.default)();(0,o.default)(a),a.get("/",(e,t)=>{e.setEncoding("Hello world!")}),(0,i.default)(a),a.listen(u.default.PORT,e=>{if(e)throw e;console.log(`Server running on port: ${u.default.PORT} --- Running on production --- Make something great.!`)})},function(e,t,r){"use strict";var n=o(r(2)),u=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}n.default.Promise=global.Promise;try{n.default.connect(u.default.MONGO_URL)}catch(e){n.default.createConnection(u.default.MONGO_URL)}n.default.connection.once("open",()=>console.log("MongoDB Running")).on("error",e=>{throw e})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(r(6));var n=i(r(7)),u=i(r(8)),o=i(r(9));r(10);function i(e){return e&&e.__esModule?e:{default:e}}t.default=e=>{e.use((0,u.default)()),e.use((0,o.default)()),e.use(n.default.json()),e.use(n.default.urlencoded({extended:!0}))}},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("util")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(12),o=(n=u)&&n.__esModule?n:{default:n};t.default=e=>{e.use("/api/v1/users",o.default)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(13));const o=new n.Router;o.post("/signup",u.signUp),t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.signUp=async function(e,t){try{const r=await o.default.create(e.body);return t.status(201).json(r)}catch(e){return t.status(500).json(e)}};var n,u=r(14),o=(n=u)&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";var n=r(2),u=(i(n),i(r(15))),o=r(16);function i(e){return e&&e.__esModule?e:{default:e}}new n.Schema({email:{type:String,unique:!0,required:[!0,"El email es requerido"],trim:!0,validate:{validator:e=>u.default.isEmail(e),message:email+" is not a valid email!"}},firstName:{type:String,required:[!0,"FirstName is required"],trim:!0},lastName:{type:String,required:[!0,"LastName is required"],trim:!0},userName:{type:String,required:[!0,"UserName is required"],trim:!0,unique:!0},password:{type:String,required:[!0,"Password is required!"],trim:!0,minlength:[6,"Password need to be longer!"],validate:{validator:e=>o.passwordReg.test(e),message:"{VALUE} is not a valid password!"}}})},function(e,t){e.exports=require("validator")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.passwordReg=void 0;var n,u=r(17),o=(n=u)&&n.__esModule?n:{default:n};const i=t.passwordReg=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;t.default={signup:{email:o.default.string().email().required(),password:o.default.string().regex(i).required(),firstName:o.default.string().required(),lastName:o.default.string().required(),userName:o.default.string().required()}}},function(e,t){e.exports=require("joi")}]);