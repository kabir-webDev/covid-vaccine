(this["webpackJsonptrusted-tech-client"]=this["webpackJsonptrusted-tech-client"]||[]).push([[7],{721:function(e,s,c){},983:function(e,s,c){"use strict";c.r(s);var n=c(30),t=c(0),i=c(33),a=c(124),r=(c(721),c(384),c(270)),l=c(566),o=c(27),j=c(198),d=c(169),b=c(99),u=c(280),h=c(125),p=c(7),O=function(e){var s=e.handleResponse,c=new b.a.auth.GoogleAuthProvider,n=new b.a.auth.FacebookAuthProvider,t=new b.a.auth.GithubAuthProvider,i=function(e){var c=h.b.loading("Please wait...");Object(d.e)(e).then((function(e){e.error&&(h.b.dismiss(c),h.b.error(e.error)),s(e),h.b.dismiss(c)}))};return Object(p.jsxs)("div",{class:"social-media",children:[Object(p.jsx)("div",{onClick:function(){return i(c)},className:"social-icon",children:Object(p.jsx)(r.a,{icon:u.d})}),Object(p.jsx)("div",{onClick:function(){return i(n)},className:"social-icon",children:Object(p.jsx)(r.a,{icon:u.b})}),Object(p.jsx)("div",{onClick:function(){return i(t)},className:"social-icon",children:Object(p.jsx)(r.a,{icon:u.c})})]})},m=(c.p,function(e){var s=e.handleResponse,c=Object(j.a)(),i=c.register,a=c.handleSubmit,b=c.formState.errors,u=Object(t.useState)(!0),m=Object(n.a)(u,2),x=(m[0],m[1]);setTimeout((function(){x(!1)}),1e4);return Object(p.jsxs)("form",{onSubmit:a((function(e){var c=e.email,n=e.password,t=h.b.loading("Please wait...");Object(d.d)(c,n).then((function(e){e.error&&(h.b.dismiss(t),h.b.error(e.error)),s(e),h.b.dismiss(t)}))})),class:"sign-in-form",children:[Object(p.jsx)("h2",{class:"title",children:"Sign in"}),Object(p.jsxs)("div",{class:"input-field",children:[Object(p.jsx)("span",{className:"fIcon",children:Object(p.jsx)(r.a,{icon:l.b})}),Object(p.jsx)("input",Object(o.a)({placeholder:"Email"},i("email",{required:!0})))]}),b.email&&Object(p.jsx)("span",{className:"text-warning",children:"This field is required"}),Object(p.jsxs)("div",{class:"input-field",children:[Object(p.jsx)("span",{className:"fIcon",children:Object(p.jsx)(r.a,{icon:l.d})}),Object(p.jsx)("input",Object(o.a)({type:"password",placeholder:"Password"},i("password",{required:!0})))]}),b.password&&Object(p.jsx)("span",{className:"text-warning",children:"This field is required"}),Object(p.jsx)("input",{className:"iBtn",type:"submit",value:"sign In"}),Object(p.jsx)("p",{class:"social-text",children:"Or Sign in with social platforms"}),Object(p.jsx)(O,{handleResponse:s})]})}),x=function(e){var s=e.handleResponse,c=Object(j.a)(),n=c.register,t=c.handleSubmit,i=c.formState.errors;return Object(p.jsxs)("form",{onSubmit:t((function(e){var c=e.email,n=e.password,t=h.b.loading("Please wait...");Object(d.a)(c,n).then((function(e){e.error&&(h.b.dismiss(t),h.b.error(e.error)),s(e),h.b.dismiss(t)}))})),class:"sign-up-form",children:[Object(p.jsx)("h2",{className:"title",children:"Sign Up"}),Object(p.jsxs)("div",{class:"input-field",children:[Object(p.jsx)("span",{className:"fIcon",children:Object(p.jsx)(r.a,{icon:l.h})}),Object(p.jsx)("input",Object(o.a)({placeholder:"Name"},n("email",{required:!0})))]}),Object(p.jsxs)("div",{class:"input-field",children:[Object(p.jsx)("span",{className:"fIcon",children:Object(p.jsx)(r.a,{icon:l.b})}),Object(p.jsx)("input",Object(o.a)({placeholder:"Email"},n("email",{required:!0})))]}),i.email&&Object(p.jsx)("span",{className:"text-warning",children:"This field is required"}),Object(p.jsxs)("div",{class:"input-field",children:[Object(p.jsx)("span",{className:"fIcon",children:Object(p.jsx)(r.a,{icon:l.d})}),Object(p.jsx)("input",Object(o.a)({type:"password",placeholder:"Password"},n("password",{required:!0})))]}),Object(p.jsx)("input",{className:"iBtn",type:"submit",value:"sign Up"}),Object(p.jsx)("p",{className:"social-text",children:"Or Sign up with social account"}),Object(p.jsx)(O,{handleResponse:s})]})},f=c(170),g=c(722),v=c.n(g);s.default=function(){var e=Object(t.useState)(!1),s=Object(n.a)(e,2),c=s[0],o=s[1],j=Object(t.useContext)(f.a).setUser,b=Object(i.g)(),u=(Object(i.h)().state||{from:{pathname:"/"}}).from,O=function(e){j(e),e.error||(h.b.success("Successfully Logged In!"),b.replace(u)),"test@admin.com"===e.email&&v()({title:"Warning!",text:"You have entered the admin panel for testing. Please don't abuse this facility!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e||Object(d.c)().then((function(e){j(e),h.b.error("Logged Out!")}))}))};return Object(p.jsxs)("div",{className:"".concat(c?"fContainer sign-up-mode":"fContainer"),children:[Object(p.jsx)(a.b,{to:"/",children:Object(p.jsx)("span",{className:"pageCloseBtn",children:Object(p.jsx)(r.a,{icon:l.g})})}),Object(p.jsx)("div",{className:"forms-container",children:Object(p.jsxs)("div",{className:"signIn-singUp",children:[Object(p.jsx)(m,{handleResponse:O}),Object(p.jsx)(x,{handleResponse:O})]})}),Object(p.jsxs)("div",{className:"panels-container",children:[Object(p.jsxs)("div",{className:"panel left-panel",children:[Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{children:"Need Covid Vaccine?"}),Object(p.jsx)("p",{children:"Sign up for free to get vaccine."}),Object(p.jsx)("button",{className:"iBtn transparent",onClick:function(){return o(!0)},children:"Sign Up"})]}),Object(p.jsx)("img",{src:"https://images.vexels.com/media/users/3/193296/isolated/preview/12bde61b79a09e6f414909fa5adc64d1-covid-19-earth-mask-cartoon.png",alt:"",className:"pImg"})]}),Object(p.jsxs)("div",{className:"panel right-panel",children:[Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{children:"Already have an account?"}),Object(p.jsx)("p",{children:"Login to your old account."}),Object(p.jsx)("button",{className:"iBtn transparent",onClick:function(){return o(!1)},children:"Sign In"})]}),Object(p.jsx)("img",{src:"https://images.vexels.com/media/users/3/193251/isolated/preview/b23a8130b03eff475be26b2275ebfc19---cono-de-personaje-covid-19-man-by-vexels.png",alt:"",className:"pImg"})]})]})]})}}}]);
//# sourceMappingURL=7.156f8771.chunk.js.map