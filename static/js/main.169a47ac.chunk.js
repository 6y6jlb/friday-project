(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{13:function(e,t,r){e.exports={authContainer:"Authorization_authContainer__vFy80",inputsFrame:"Authorization_inputsFrame__2P9DZ",forgotPasFrame:"Authorization_forgotPasFrame__BrWXq",signUpFrame:"Authorization_signUpFrame__1vbLb"}},17:function(e,t,r){e.exports={registrationWrapper:"Registration_registrationWrapper__2Mhbi",buttonWrapper:"Registration_buttonWrapper__1sx-0",inputWrapper:"Registration_inputWrapper__s8cfu"}},18:function(e,t,r){e.exports={mainbox:"Error_404_mainbox__3SNMS",err:"Error_404_err__1XV1b",far:"Error_404_far__QVFru",err2:"Error_404_err2__3ILFH",msg:"Error_404_msg__2l7Uc"}},20:function(e,t,r){e.exports={forgotContainer:"PasswordRecovery_forgotContainer__AhLoX",inputFrame:"PasswordRecovery_inputFrame__2Niiv",forgotPasFrame:"PasswordRecovery_forgotPasFrame__3lPpf",signUpFrame:"PasswordRecovery_signUpFrame__11tka"}},21:function(e,t,r){e.exports={superInput:"SuperInputText_superInput__TKMZF",errorInput:"SuperInputText_errorInput__QFNeK",error:"SuperInputText_error__2O1aP",inputFrame:"SuperInputText_inputFrame__17wrK"}},26:function(e,t,r){e.exports={checkBoxFrame:"SuperCheckbox_checkBoxFrame__1aOE2",checkbox:"SuperCheckbox_checkbox__2p9_O"}},29:function(e,t,r){e.exports={profileContainer:"Profile_profileContainer__1P_WC",image:"Profile_image__EpHOi"}},32:function(e,t,r){e.exports={floatingButtonDefault:"SuperButton_floatingButtonDefault__W4xXD",floatingButtonRed:"SuperButton_floatingButtonRed__2fS2Q"}},42:function(e,t,r){e.exports={testFrame:"TestComponents_testFrame__2Dc8-"}},43:function(e,t,r){e.exports={headerFrame:"Header_headerFrame__1AmnK"}},49:function(e,t,r){},50:function(e,t,r){},76:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(23),s=r.n(c),o=(r(49),r(50),r(5)),i=r(3),u=r(6),l=r(29),j=r.n(l),d=r(0),h=function(e){var t=Object(u.c)((function(e){return e.profile.profileEntity}));return Object(u.c)((function(e){return e.auth.isAuth}))?Object(d.jsxs)("div",{className:j.a.profileContainer,children:[Object(d.jsx)("img",{className:j.a.image,src:t.avatar||"http://placehold.it/300x300"}),Object(d.jsx)("h1",{children:t.name||t.email||"\u0447\u0435\u043b\u0430\u0432\u0435\u0447\u043a\u0430"})]}):Object(d.jsx)(i.a,{to:je.AUTHORIZATION})},b=function(e){return Object(d.jsx)("h1",{children:"NewPassword"})},p=r(12),O=r(20),f=r.n(O),x=r(4),m=r(15),_=r(21),g=r.n(_),v=function(e){e.type;var t=e.onChange,r=e.onChangeText,n=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(m.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(o||g.a.error),l=c?"".concat(g.a.errorInput," ").concat(s):"".concat(g.a.superInput," ").concat(s);return Object(d.jsxs)("div",{className:g.a.inputFrame,children:[Object(d.jsx)("input",Object(x.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),a&&"Enter"===e.key&&a()},className:l},i)),Object(d.jsx)("div",{children:c&&Object(d.jsx)("span",{className:u,children:c})})]})},y=r(32),N=r.n(y),R=function(e){var t=e.red,r=e.className,n=e.children,a=Object(m.a)(e,["red","className","children"]),c="".concat(t?N.a.floatingButtonRed:N.a.floatingButtonDefault," ").concat(r);return Object(d.jsx)("button",Object(x.a)(Object(x.a)({className:c},a),{},{children:n}))},E=r(16),C=r.n(E),w=r(25),S=r(41),F=r.n(S).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),T=function(e){return F.post("auth/register",e)},P=function(e,t,r){var n={email:e,password:t,rememberMe:r};return F.post("auth/login/",n)},I=function(e){return F.post("auth/forgot",{email:e})},A={answer:""},k=function(e){return{type:"friday/passwordRecovery/setAnswer",payload:{answer:e}}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"friday/passwordRecovery/setAnswer":return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},D=function(){var e=Object(u.b)(),t=Object(n.useState)(""),r=Object(p.a)(t,2),a=r[0],c=r[1],s=Object(u.c)((function(e){return e.recoveryPassword.answer}));Object(u.c)((function(e){return e.auth.error}));return Object(d.jsxs)("div",{className:f.a.forgotContainer,children:[Object(d.jsxs)("div",{className:f.a.titleFrame,children:[Object(d.jsx)("h1",{children:"it-incubator"}),Object(d.jsx)("h2",{children:"Forgot your password?"})]}),Object(d.jsxs)("div",{className:f.a.inputFrame,children:[Object(d.jsx)(v,{value:a,onChange:function(e){c(e.currentTarget.value)},placeholder:"e-mail"}),s&&Object(d.jsx)("p",{children:s}),Object(d.jsx)("p",{children:"Enter your email address and we will send you further instructions"}),Object(d.jsx)(R,{onClick:function(){return e(function(e){return function(){var t=Object(w.a)(C.a.mark((function t(r){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(k("")),t.prev=1,t.next=4,I(e);case 4:t.sent.data.success&&r(k("\u043f\u0440\u043e\u0432\u0435\u0440\u044c \u043f\u043e\u0447\u0442\u0443, \u0431\u0443\u0434\u044c \u043c\u043e\u043b\u043e\u0434\u0446\u043e\u043c")),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0.response?t.t0.response.data.error:t.t0.message,r(k("\u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0435 \u0440\u0430\u0437"));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(a))},children:"send help"})]}),Object(d.jsxs)("div",{className:f.a.signUpFrame,children:[Object(d.jsx)("span",{children:"Did you remember your password?"}),Object(d.jsx)(R,{children:Object(d.jsx)(o.c,{to:je.AUTHORIZATION,children:"try login in"})})]})]})},B="REGISTERED",U="ERROR_FROM_REQUEST",L=function(e){return{type:B,registered:e}},M=function(e){return function(t){T(e).then((function(){try{t(L(!0))}catch(r){var e=r.response?r.response.data.error:r.message+", more details in the console";t(function(e){return{type:U,error:e}}(e))}}))}},H=r(17),V=r.n(H),X=function(e){var t=Object(n.useState)(""),r=Object(p.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(""),l=Object(p.a)(s,2),j=l[0],h=l[1],b=Object(n.useState)(""),O=Object(p.a)(b,2),f=O[0],x=O[1],m=Object(n.useState)(""),_=Object(p.a)(m,2),g=_[0],y=_[1],N=Object(u.c)((function(e){return e.registration.error})),E=Object(u.c)((function(e){return e.registration.registered})),C=Object(u.b)();return Object(n.useEffect)((function(){return function(){C(L(!1))}}),[]),E?Object(d.jsx)(i.a,{to:"/authorization"}):Object(d.jsxs)("div",{className:V.a.registrationWrapper,children:[Object(d.jsxs)("div",{className:V.a.inputWrapper,children:["Username:",Object(d.jsx)(v,{value:a,onChangeText:function(e){c(e)}})]}),Object(d.jsxs)("div",{className:V.a.inputWrapper,children:["Password:",Object(d.jsx)(v,{type:"password",error:N||g,value:j,onChangeText:function(e){h(e)}})]}),Object(d.jsxs)("div",{className:V.a.inputWrapper,children:["Confirm Password:",Object(d.jsx)(v,{type:"password",error:N||g,value:f,onChangeText:function(e){x(e)}})]}),Object(d.jsx)("div",{className:V.a.buttonWrapper,children:Object(d.jsx)(R,{onClick:function(){j!==f?y("Passwords should be same"):j&&f?C(M({email:a,password:j})):y("Passwords should not be empty")},children:"Sign Up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/authorization",children:"Login"})})]})},z=r(18),K=r.n(z),Z=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:K.a.mainbox,children:[Object(d.jsx)("div",{className:K.a.err,children:"4"}),Object(d.jsx)("div",{className:K.a.far,children:"0"}),Object(d.jsx)("div",{className:K.a.err2,children:"4"}),Object(d.jsxs)("div",{className:K.a.msg,children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(d.jsxs)("p",{children:["Let's go ",Object(d.jsx)("a",{href:"#",children:"home"})," and try from there."]})]})]})})},G=function(e){return{type:"friday/profile/setProfile",payload:{model:e}}},Q={profileEntity:{_id:null,email:null,name:null,avatar:null,publicCardPacksCount:null,created:null,updated:null,isAdmin:null,verified:null,rememberMe:null,error:null}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"friday/profile/setProfile":return Object(x.a)(Object(x.a)({},e),t.payload.model);default:return e}},q={isAuth:!1,error:void 0},J=function(e){return{type:"friday/auth/setAuthAC",payload:{isAuth:e}}},$=function(e){return{type:"friday/auth/setErrorAC",payload:{error:e}}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"friday/auth/setAuthAC":case"friday/auth/setErrorAC":return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},te=r(13),re=r.n(te),ne=a.a.memo((function(e){var t=e.onBlurCallback,r=e.changeEmailInput,n=e.changePasswordInput,a=e.login,c=e.password,s=e.email,i=e.error;return Object(d.jsxs)("div",{className:re.a.authContainer,children:[Object(d.jsxs)("div",{className:re.a.titleFrame,children:[Object(d.jsx)("h1",{children:"it-incubator"}),Object(d.jsx)("h2",{children:"sign in"})]}),Object(d.jsxs)("div",{className:re.a.inputsFrame,children:[Object(d.jsx)(v,{onBlur:function(){return t(s)},error:i,value:s,onChange:r,placeholder:"login"}),Object(d.jsx)(v,{onBlur:function(){return t(c)},error:i,value:c,onChange:n,placeholder:"password"}),Object(d.jsx)(R,{disabled:!!i,red:!!i,onClick:a,children:"login"})]}),Object(d.jsx)("div",{className:re.a.forgotPasFrame,children:Object(d.jsx)(o.c,{to:je.PASSWORD_RECOVERY,className:re.a.forgotPasButton,children:"forgot password?"})}),Object(d.jsxs)("div",{className:re.a.signUpFrame,children:[Object(d.jsx)("span",{children:"Don\u2019t have an account?"}),Object(d.jsx)(R,{children:Object(d.jsx)(o.c,{to:je.REGISTRATION,children:"sign up"})})]})]})})),ae=a.a.memo((function(e){var t=Object(n.useState)(""),r=Object(p.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(""),o=Object(p.a)(s,2),l=o[0],j=o[1],h=Object(u.b)(),b=Object(u.c)((function(e){return e.auth.isAuth})),O=Object(u.c)((function(e){return e.auth.error}));return b?Object(d.jsx)(i.a,{to:je.PROFILE}):Object(d.jsx)(ne,{password:l,error:O,login:function(){h(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var n=Object(w.a)(C.a.mark((function n(a){var c,s;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P(e,t,r);case 3:c=n.sent,a(G(c.data)),a(J(!0)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),s=n.t0.response?n.t0.response.data.error:n.t0.message+", more details in the console",a($(s));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(a,l))},changePasswordInput:function(e){h($(void 0)),j(e.currentTarget.value)},changeEmailInput:function(e){c(e.currentTarget.value),h($(void 0))},email:a,onBlurCallback:function(e){O&&e.trim().length>0&&h($(void 0))}})})),ce=r(26),se=r.n(ce),oe=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),c=Object(m.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(se.a.checkbox," ").concat(n||"");return Object(d.jsxs)("div",{className:se.a.checkBoxFrame,children:[Object(d.jsx)("input",Object(x.a)({type:"checkbox",onChange:function(e){t&&t(e),r&&r(e.currentTarget.checked),console.log(e.currentTarget.checked)},className:s,id:"checkbox"},c)),Object(d.jsx)("label",{htmlFor:"checkbox",children:a&&Object(d.jsx)("span",{className:se.a.spanClassName,children:a})})]})},ie=r(42),ue=r.n(ie),le=function(e){return Object(d.jsxs)("div",{className:ue.a.testFrame,children:[Object(d.jsx)(R,{disabled:!0,children:"disabled"}),Object(d.jsx)(R,{red:!0,children:"error"}),Object(d.jsx)(R,{children:"something"}),Object(d.jsx)(v,{value:"test"}),Object(d.jsx)(v,{value:"error",error:"error"}),Object(d.jsx)(oe,{checked:!0}),Object(d.jsx)(oe,{checked:!0})]})},je={PROFILE:"/",NEW_PASSWORD:"/new_password",PASSWORD_RECOVERY:"/password_recovery",REGISTRATION:"/registration",AUTHORIZATION:"/authorization",ERROR_404:"/error/404",TEST:"/test"},de=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{exact:!0,path:je.PROFILE,render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(i.b,{path:je.NEW_PASSWORD,render:function(){return Object(d.jsx)(b,{})}}),Object(d.jsx)(i.b,{path:je.PASSWORD_RECOVERY,render:function(){return Object(d.jsx)(D,{})}}),Object(d.jsx)(i.b,{path:je.REGISTRATION,render:function(){return Object(d.jsx)(X,{})}}),Object(d.jsx)(i.b,{path:je.AUTHORIZATION,render:function(){return Object(d.jsx)(ae,{})}}),Object(d.jsx)(i.b,{path:je.TEST,render:function(){return Object(d.jsx)(le,{})}}),Object(d.jsx)(i.b,{render:function(){return Object(d.jsx)(Z,{})}})]})})},he=r(43),be=r.n(he),pe=function(e){return Object(d.jsxs)("div",{className:be.a.headerFrame,children:[Object(d.jsx)(o.c,{to:je.TEST,children:"test"}),Object(d.jsx)(o.c,{to:je.PROFILE,children:"profile"}),Object(d.jsx)(o.c,{to:je.AUTHORIZATION,children:"auth"}),Object(d.jsx)(o.c,{to:je.REGISTRATION,children:"register"}),Object(d.jsx)(o.c,{to:je.ERROR_404,children:"error"}),Object(d.jsx)(o.c,{to:je.NEW_PASSWORD,children:"pass new"}),Object(d.jsx)(o.c,{to:je.PASSWORD_RECOVERY,children:"pass recovery"})]})};var Oe=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(pe,{}),Object(d.jsx)(de,{})]})})},fe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,77)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},xe=r(22),me=r(44),_e=Object(xe.b)({profile:Y,registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(x.a)(Object(x.a)({},e),{},{registered:t.registered});case U:return Object(x.a)(Object(x.a)({},e),{},{error:t.errorFromRequest});default:return e}},auth:ee,recoveryPassword:W}),ge=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):xe.c)(Object(xe.a)(me.a)),ve=Object(xe.d)(_e,ge);window.store=ve;var ye=ve;s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u.a,{store:ye,children:Object(d.jsx)(Oe,{})})}),document.getElementById("root")),fe()}},[[76,1,2]]]);
//# sourceMappingURL=main.169a47ac.chunk.js.map