(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{2532:function(t,e,r){"use strict";var s=r("23e7"),n=r("5a34"),o=r("1d80"),i=r("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(o(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var s=r("861d"),n=r("c6b6"),o=r("b622"),i=o("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},"5a34":function(t,e,r){var s=r("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},"73cf":function(t,e,r){"use strict";r.r(e);var s=r("7a23"),n=Object(s["g"])("h1",{class:"my-5"},"User registration",-1);function o(t,e,r,o,i,c){return Object(s["p"])(),Object(s["d"])(s["a"],null,[n,Object(s["g"])("form",{onSubmit:e[4]||(e[4]=Object(s["E"])((function(){return c.processForm&&c.processForm.apply(c,arguments)}),["prevent"]))},[Object(s["D"])(Object(s["g"])("input",{class:"form-control my-2",type:"email",placeholder:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.email=t})},null,512),[[s["A"],i.email,void 0,{trim:!0}]]),Object(s["D"])(Object(s["g"])("input",{class:"form-control my-2",type:"password",placeholder:"password","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.password=t})},null,512),[[s["A"],i.password]]),Object(s["D"])(Object(s["g"])("input",{class:"form-control my-2",type:"password",placeholder:"confirm password","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.confirmPassword=t})},null,512),[[s["A"],i.confirmPassword]]),Object(s["g"])("button",{class:"btn btn-primary btn-block",type:"submit",disabled:c.isSumbitBlocked}," Register ",8,["disabled"])],32)],64)}r("caad"),r("2532");var i=r("5530"),c=r("5502"),a={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{isSumbitBlocked:function(){return!this.email.includes("@")||!(this.password.length>5&&this.password===this.confirmPassword)}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["userRegister"])),{},{processForm:function(){this.userRegister({email:this.email,password:this.password}),this.email="",this.password="",this.confirmPassword=""}})};a.render=o;e["default"]=a},ab13:function(t,e,r){var s=r("b622"),n=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(s){}}return!1}},caad:function(t,e,r){"use strict";var s=r("23e7"),n=r("4d64").includes,o=r("44d2"),i=r("ae40"),c=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!c},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")}}]);
//# sourceMappingURL=register.0b23c9a6.js.map