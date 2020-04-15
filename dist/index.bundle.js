module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n={MONGO_URL:"mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api-dev?retryWrites=true&w=majority"},o={MONGO_URL:"mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api?retryWrites=true&w=majority"},u={MONGO_URL:"mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api?retryWrites=true&w=majority"},i={PORT:process.env.PORT||3e3};t.default=Object.assign({},i,function(e){switch(e){case"development":return n;case"test":return o;default:return u}}("production"))},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("passport")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=a(n),u=a(r(18)),i=r(19),s=r(5);function a(e){return e&&e.__esModule?e:{default:e}}const d=new n.Schema({email:{type:String,unique:!0,required:[!0,"El email es requerido"],trim:!0,validate:{validator:e=>u.default.isEmail(e),message:"{VALUE} is not a valid email!"}},firstName:{type:String,required:[!0,"FirstName is required"],trim:!0},lastName:{type:String,required:[!0,"LastName is required"],trim:!0},userName:{type:String,required:[!0,"UserName is required"],trim:!0,unique:!0},password:{type:String,required:[!0,"Password is required!"],trim:!0,minlength:[6,"Password need to be longer!"],validate:{validator:e=>s.passwordReg.test(e),message:"{VALUE} is not a valid password!"}}});d.pre("save",(function(e){return this.isModified("password")&&(this.password=this._hashPassword(this.password)),e()})),d.methods={_hashPassword:e=>(0,i.hashSync)(e),authenticateUser(e){return(0,i.compareSync)(e,this.password)}},t.default=o.default.model("User",d)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.passwordReg=void 0;var n,o=r(20),u=(n=o)&&n.__esModule?n:{default:n};const i=t.passwordReg=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;t.default={signup:{email:u.default.string().email().required(),password:u.default.string().regex(i).required(),firstName:u.default.string().required(),lastName:u.default.string().required(),userName:u.default.string().required()}}},function(e,t,r){"use strict";var n=s(r(0)),o=s(r(1));r(7);var u=s(r(8)),i=s(r(14));function s(e){return e&&e.__esModule?e:{default:e}}const a=(0,n.default)();(0,u.default)(a),a.get("/",(e,t)=>{e.setEncoding("Hello world!")}),(0,i.default)(a),a.listen(o.default.PORT,e=>{if(e)throw e;console.log(`Server running on port: ${o.default.PORT} --- Running on production --- Make something great.!`)})},function(e,t,r){"use strict";var n=u(r(2)),o=u(r(1));function u(e){return e&&e.__esModule?e:{default:e}}n.default.Promise=global.Promise;try{n.default.connect(o.default.MONGO_URL)}catch(e){n.default.createConnection(o.default.MONGO_URL)}n.default.connection.once("open",()=>console.log("MongoDB Running")).on("error",e=>{throw e})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s(r(9));var n=s(r(10)),o=s(r(11)),u=s(r(12)),i=s(r(3));r(13);function s(e){return e&&e.__esModule?e:{default:e}}t.default=e=>{e.use((0,o.default)()),e.use((0,u.default)()),e.use(n.default.json()),e.use(n.default.urlencoded({extended:!0})),e.use(i.default.initialize())}},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("util")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(15),u=(n=o)&&n.__esModule?n:{default:n};t.default=e=>{e.use("/api/v1/users",u.default)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=a(r(16)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(17)),i=a(r(5)),s=r(21);function a(e){return e&&e.__esModule?e:{default:e}}const d=new n.Router;d.post("/signup",(0,o.default)(i.default.signup),u.signUp),d.post("/login",s.authLocal,u.login),t.default=d},function(e,t){e.exports=require("express-validation")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.login=t.signUp=void 0;var n,o=r(4),u=(n=o)&&n.__esModule?n:{default:n};t.signUp=async(e,t)=>{try{const r=await u.default.create(e.body);return t.status(201).json(r)}catch(e){return console.log("===================================="),console.log(e),console.log("===================================="),t.status(500).json(e)}},t.login=(e,t,r)=>(t.status(200).json(e.user),r())},function(e,t){e.exports=require("validator")},function(e,t){e.exports=require("bcrypt-nodejs")},function(e,t){e.exports=require("joi")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authLocal=void 0;var n=i(r(3)),o=i(r(22)),u=i(r(4));function i(e){return e&&e.__esModule?e:{default:e}}const s=new o.default({usernameField:"email"},async(e,t,r)=>{try{const n=await u.default.findOne({email:e});return n&&n.authenticateUser(t)?r(null,n):r(null,!1)}catch(e){return r(e,!1)}});n.default.use(s);t.authLocal=n.default.authenticate("local",{session:!1})},function(e,t){e.exports=require("passport-local")}]);