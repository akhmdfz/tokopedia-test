(this["webpackJsonptokopedia-test"]=this["webpackJsonptokopedia-test"]||[]).push([[0],{296:function(e,t,n){},454:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(0),c=n.n(r),o=n(20),i=n.n(o),b=n(261),l=n(506),s=(n(296),n(32)),u=n(496),j=n(497),O=n(458),m=n(11),d=n(498),f=n(499),p=n(519),g=n(521),h=n(47),v=n(524),x=n(495),k=n(238),y=n(239),w=n(133),S=n(264),C=n(262),N=n(263),I=n(494),F=n(243),R=n.n(F),A=Object(m.a)((function(){return{root:{color:"#FFFFFF"}}}))(I.a),B=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.state={anchorEl:null},a.handleMenu=a.handleMenu.bind(Object(w.a)(a)),a}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state.anchorEl,n=Boolean(t);return Object(a.jsxs)("div",{className:e.buttonCollapse,children:[Object(a.jsx)(A,{onClick:this.handleMenu,children:Object(a.jsx)(R.a,{})}),Object(a.jsx)(N.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:n,onClose:this.handleClose,onClick:this.handleClose,children:this.props.children})]})}}]),n}(c.a.Component),E=Object(m.a)((function(e){var t;return{buttonCollapse:(t={},Object(h.a)(t,e.breakpoints.up("sm"),{display:"none"}),Object(h.a)(t,"margin","10px"),Object(h.a)(t,"boxShadow","none"),t)}}))(B),z=n(45),W=Object(m.a)((function(e){var t;return{root:{position:"absolute",right:0},buttonBar:(t={},Object(h.a)(t,e.breakpoints.down("xs"),{display:"none"}),Object(h.a)(t,"margin","10px"),Object(h.a)(t,"paddingLeft","16px"),Object(h.a)(t,"right",0),Object(h.a)(t,"position","relative"),Object(h.a)(t,"width","100%"),Object(h.a)(t,"background","transparent"),t),link:{color:"#00478C",display:"flex",alignItems:"center",textDecoration:"none",padding:"0.5rem 1rem",height:"100%"}}}))((function(e){return Object(a.jsxs)("div",{className:e.classes.root,children:[Object(a.jsxs)(E,{children:[Object(a.jsx)(v.a,{children:Object(a.jsx)(z.b,{className:e.classes.link,to:"/tokopedia-test/",children:"Pok\xe9mon List"})}),Object(a.jsx)(v.a,{children:Object(a.jsx)(z.b,{className:e.classes.link,to:"/tokopedia-test/pokebag",children:"My Pok\xe9bag"})})]}),Object(a.jsxs)("div",{className:e.classes.buttonBar,id:"appbar-collapse",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(z.b,{className:e.classes.link,to:"/tokopedia-test/",children:"Pok\xe9mon List"})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(z.b,{className:e.classes.link,to:"/tokopedia-test/pokebag",children:"My Pok\xe9bag"})})]})]})}));function D(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1];window.addEventListener("scroll",(function(){window.scrollY>=300?o(!0):o(!1)}));var i=Object(m.a)({root:{color:"#00478C"}})(O.a);return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(u.a,{position:"sticky",color:"primary",elevation:n?2:0,children:Object(a.jsx)(j.a,{disableGutters:!0,children:Object(a.jsx)(d.a,{maxWidth:"xl",children:Object(a.jsxs)(f.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",children:[Object(a.jsxs)(f.a,{item:!0,xs:11,children:[Object(a.jsx)(i,{variant:"h4",component:"div",noWrap:!0,children:Object(a.jsx)(p.a,{fontWeight:"fontWeightBold",ml:2,mt:3,children:"Pok\xe9ble"})}),Object(a.jsx)(f.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",children:Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(i,{variant:"subtitle1",noWrap:!0,children:Object(a.jsx)(p.a,{ml:2,mb:2,children:Object(a.jsx)(g.a,{xsDown:!0,children:"Kiblatnya Pok\xe9mon anak Indonesia"})})})})})]}),Object(a.jsxs)(f.a,{item:!0,xs:1,children:[Object(a.jsx)(g.a,{xsDown:!0,children:Object(a.jsx)(p.a,{ml:2,mt:3,children:Object(a.jsx)(W,{})})}),Object(a.jsx)(g.a,{smUp:!0,children:Object(a.jsx)(p.a,{ml:2,mt:1,children:Object(a.jsx)(W,{})})})]})]})})})})})}var T=n(260),U=n(517),M=n(30),P=n(59),J=n(15),L=n(510),_=n(247),G=n.n(_),$=n(509),q=n(113),H=n(58),K=n.n(H);function Q(){var e=Object(J.a)(["\n    query pokemon($name: String!){\n        pokemon(name: $name) {\n            sprites{\n                front_default\n            }            \n            moves {\n                move {\n                    name\n                    url\n                }\n            }\n            types {\n                slot\n                type {\n                    name \n                    url\n                }\n            }            \n        }\n    }\n"]);return Q=function(){return e},e}function Y(){var e=Object(J.a)(["\n    query pokemons($limit: Int, $offset: Int){\n        pokemons(limit: $limit, offset: $offset){\n            results{\n                id\n                name\n                image\n                url\n            }            \n        }\n    }\n"]);return Y=function(){return e},e}var V=K()(Y()),X=(K()(Q()),n(142)),Z=n.n(X),ee=n(502),te=n(501),ne=n(505),ae=n(504),re=n(500),ce=n(244),oe=n(503),ie=n(143),be=Object(re.a)((function(){return{root:{flexGrow:1},actionArea:{borderRadius:16,transition:"0.2s","&:hover":{transform:"scale(1.1)"}},media:function(e){return{width:"100%",height:0,paddingBottom:"100%",backgroundColor:e.color}},card:function(e){var t=e.color;return{borderRadius:16,"&:hover":{boxShadow:"0 6px 12px 0 ".concat(Z()(t).rotate(-12).darken(.2).fade(.5))}}},content:{textAlign:"center"},title:{fontSize:"1.1rem",fontWeight:900,color:"#000",textTransform:"capitalize"},subtitle:{color:"#000",opacity:.87,marginTop:"0.5rem",fontWeight:500,fontSize:14},contentTag:{position:"flex",bottom:0,width:"100%",zIndex:1,padding:"1rem 0.5rem"},tag:function(e){return{display:"inline-block",backgroundColor:e.color,borderRadius:"0.5rem",padding:"2px 0.5rem",color:"#fff",marginBottom:"0.5rem",fontWeight:"bold",fontSize:18,float:"right"}}}})),le=function(e){var t=e.classes,n=e.image,r=e.title,o=e.subtitle,i=e.id,b=e.name,l=e.loading;return Object(a.jsx)(te.a,{className:t.actionArea,component:z.b,to:"/tokopedia-test/detail/"+i+"/"+b,children:Object(a.jsxs)(ee.a,{className:t.card,children:[l?Object(a.jsx)(oe.a,{animation:"wave",variant:"rect"}):Object(a.jsx)(ae.a,{className:t.media,image:n,children:Object(a.jsx)("div",{className:t.contentTag,children:Object(a.jsx)("div",{className:t.tag,children:("0000"+i).slice(-"0000".length)})})}),l?Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(oe.a,{animation:"wave",height:10,style:{marginBottom:6}}),Object(a.jsx)(oe.a,{animation:"wave",height:10,style:{marginBottom:6}})]}):Object(a.jsxs)(ne.a,{className:t.content,children:[Object(a.jsx)(O.a,{className:t.title,variant:"h2",noWrap:!0,children:r}),Object(a.jsx)(O.a,{className:t.subtitle,children:o})]})]})})},se=c.a.memo((function(e){var t=e.pokemons,n=e.onLoadMore,r=e.loading,c=function(e){return be({color:e})};return Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{container:!0,className:c.root,spacing:2,children:Object(a.jsx)(f.a,{item:!0,xs:12,zeroMinWidth:!0,children:Object(a.jsx)(f.a,{container:!0,justify:"center",spacing:4,children:t.results.map((function(e,o){return Object(a.jsxs)(f.a,{item:!0,xs:8,sm:4,md:3,lg:2,children:[Object(a.jsx)(ie.Palette,{src:e.image,children:function(t){var n=t.data;return Object(a.jsx)(le,{id:e.id,name:e.name,loading:r,classes:c(n.vibrant),title:e.name,subtitle:"Owned : "+Object.values(JSON.parse(localStorage.getItem("inventory"))).filter((function(t){return t.pokeName===e.name.charAt(0).toUpperCase()+e.name.slice(1)})).length,image:e.image})}}),o===t.results.length-10&&Object(a.jsx)(ce.a,{onEnter:function(){return n()}})]},e.id)}))})})})})})),ue=n(507);function je(){var e=Object(l.useQuery)(V,{variables:{limit:19},notifyOnNetworkStatusChange:!0}),t=e.error,n=e.loading,r=e.data,c=e.fetchMore,o=e.networkStatus;return t?Object(a.jsx)("div",{children:"errors"}):r?Object(a.jsxs)("div",{children:[r.pokemons.results&&Object(a.jsx)(se,{loading:n,pokemons:r.pokemons||[],onLoadMore:function(){return c({variables:{limit:19,offset:r.pokemons.results.length+1},updateQuery:function(e,t){var n=t.fetchMoreResult;return n?{pokemons:{__typename:"PokemonList",isLoading:!0,results:[].concat(Object(q.a)(e.pokemons.results),Object(q.a)(n.pokemons.results))}}:e}})}}),3===o&&Object(a.jsx)(ue.a,{})]}):Object(a.jsx)(ue.a,{})}var Oe=n(508),me=n(3);function de(){var e=Object(J.a)(["\n                    background: url('/tokopedia-test/img/home-xs.png') center center/cover no-repeat;\n                    height: 80vh;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n                    object-fit: contain;\n                    "]);return de=function(){return e},e}function fe(){var e=Object(J.a)(["\n                    background: url('/tokopedia-test/img/home-md.png') center center/cover no-repeat;\n                    height: 110vh;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n                    object-fit: contain;\n                    "]);return fe=function(){return e},e}function pe(){var e=Object(J.a)(["\n                    background: url('/tokopedia-test/img/home.png') center center/cover no-repeat;\n                    height: 90vh;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n                    object-fit: contain;\n                    "]);return pe=function(){return e},e}var ge=Object(re.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function he(e){var t=e.children,n=e.window,a=ge(),r=Object(Oe.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(me.b)($.a,{in:r},Object(me.b)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},t," "))}var ve=function(e){return Object(me.b)(c.a.Fragment,null,["pokeImg","pokeName","id"].forEach((function(e){return localStorage.removeItem(e)})),Object(me.b)(g.a,{mdDown:!0},Object(me.b)("div",{css:Object(me.a)(pe())})),Object(me.b)(g.a,{only:["lg","xl","xs"]},Object(me.b)("div",{css:Object(me.a)(fe())})),Object(me.b)(g.a,{smUp:!0},Object(me.b)("div",{css:Object(me.a)(de())})),Object(me.b)(j.a,{id:"back-to-top-anchor"}),Object(me.b)(d.a,{maxWidth:"xl"},Object(me.b)(je,null)),Object(me.b)(he,Object(P.a)({},e),Object(me.b)(L.a,{color:"secondary",size:"large","aria-label":"scroll back to top"},Object(me.b)(G.a,null))))},xe=n(512),ke=n(267),ye=n(522),we=n(515),Se=n(514),Ce=n(513),Ne=n(511),Ie=n(151),Fe=n(150),Re=n(248),Ae=n.n(Re);function Be(){var e=Object(J.a)(["\n                      display: flex;\n                      align-items: center;\n                      flex-wrap: wrap;\n                      text-transform: capitalize"]);return Be=function(){return e},e}function Ee(){var e=Object(J.a)(["margin-left: 0.4em"]);return Ee=function(){return e},e}function ze(){var e=Object(J.a)(["\n                      display: flex;\n                      align-items: center;\n                      flex-wrap: wrap;\n                      text-transform: capitalize"]);return ze=function(){return e},e}function We(){var e=Object(J.a)(["\n              width: 150px;\n              height: 150px;    \n              -webkit-filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.5));\n              filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.5));\n            "]);return We=function(){return e},e}function De(){var e=Object(J.a)(["\n            text-align: center;\n            border-radius: 2rem;\n            background: ",";\n            "]);return De=function(){return e},e}function Te(){var e=Object(J.a)(["background: ",""]);return Te=function(){return e},e}function Ue(){var e=Object(J.a)(["color: #fff; font-weight: 600"]);return Ue=function(){return e},e}function Me(){var e=Object(J.a)(["background: ",""]);return Me=function(){return e},e}var Pe=c.a.forwardRef((function(e,t){return Object(me.b)(Ne.a,Object(P.a)({direction:"up",ref:t},e))})),Je=Object(re.a)((function(){return{root:{flexGrow:1},actionArea:{borderRadius:16,transition:"0.2s","&:hover":{transform:"scale(1.1)"}},media:function(e){return{width:"100%",height:0,paddingBottom:"100%",backgroundColor:e.color}},card:function(e){var t=e.color;return{borderRadius:16,"&:hover":{boxShadow:"0 6px 12px 0 ".concat(Z()(t).rotate(-12).darken(.2).fade(.5))}}},content:{textAlign:"center"},title:{fontSize:"1.1rem",fontWeight:900,color:"#000",textTransform:"capitalize"},subtitle:{color:"#000",opacity:.87,marginTop:"0.5rem",fontWeight:500,fontSize:14},contentTag:{bottom:0,width:"100%",zIndex:1,padding:"1rem 0.5rem"},tag:function(e){return{display:"inline-block",backgroundColor:e.color,borderRadius:"0.5rem",padding:"2px 0.5rem",color:"#fff",marginBottom:"0.5rem",fontWeight:"bold",fontSize:18,float:"right"}}}})),Le=Object(re.a)((function(){return{dialogRoot:{borderRadius:"2rem"}}})),_e=Object(m.a)((function(e){return{root:function(t){var n=t.colors,a=t.bgcolor,r=t.width;return{color:e.palette.getContrastText(n),backgroundColor:n,"&:hover":{backgroundColor:a[600]},borderRadius:"2rem",fontSize:"0.3em",height:30,width:r}}}}))(x.a),Ge=c.a.memo((function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)({}),i=Object(s.a)(o,2),b=i[0],l=i[1],u=Object(r.useReducer)((function(e){return e+1}),0),j=Object(s.a)(u,2),m=(j[0],j[1]),g={};Object(r.useEffect)((function(){}),[]);var h=function(e){return Je({color:e})},v=Le();return Object(me.b)(c.a.Fragment,null,["pokeImg","pokeName","id"].forEach((function(e){return localStorage.removeItem(e)})),Object(me.b)(d.a,{maxWidth:"xl"},Object(me.b)(f.a,{container:!0,className:h.root,spacing:2},Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{mt:5},Object(me.b)(O.a,{variant:"h4"},"My Pokebag content")),Object(me.b)(p.a,{my:3},Object(me.b)(xe.a,{variant:"middle"}))),Object(me.b)(f.a,{item:!0,xs:12,zeroMinWidth:!0},Object(me.b)(f.a,{container:!0,justify:"center",spacing:4},Object.values(JSON.parse(localStorage.getItem("inventory"))).filter((function(e){return""!==e.id})).length>0?Object.values(JSON.parse(localStorage.getItem("inventory"))).map((function(e,t){return Object(me.b)(f.a,{key:t,item:!0,xs:8,sm:4,md:3,lg:2},Object(me.b)(ie.Palette,{src:e.img},(function(r){var o=r.data;return Object(me.b)(c.a.Fragment,null,Object(me.b)(te.a,{className:h(o.vibrant).actionArea,onClick:function(){return e=t,r=o.vibrant,a(!n),g=Object.values(JSON.parse(localStorage.getItem("inventory"))).map((function(t){return Object(P.a)(Object(P.a)({},t),{},{listId:e,color:r})})),void l(g[e]);var e,r}},Object(me.b)(ee.a,{className:h(o.vibrant).card},Object(me.b)(ae.a,{className:h(o.vibrant).media,image:e.img},Object(me.b)("div",{className:h(o.vibrant).contentTag},Object(me.b)("div",{className:h(o.vibrant).tag},("0000"+e.id).slice(-"0000".length)))),Object(me.b)(ne.a,{className:h(o.vibrant).content},Object(me.b)(O.a,{className:h(o.vibrant).title,variant:"h2",noWrap:!0},e.pokeName),Object(me.b)(O.a,{className:h(o.vibrant).subtitle},e.nickName)))))})))})):Object(me.b)(c.a.Fragment,null,Object(me.b)(p.a,{mt:3},Object(me.b)(O.a,{variant:"h2"},"Go catch some Pok\xe9mon!")))))),Object(me.b)(ye.a,{fullWidth:!0,classes:{paper:v.dialogRoot},open:n,TransitionComponent:Pe,keepMounted:!0,onClose:function(){a(!1)}},Object(me.b)(Ce.a,{css:Object(me.a)(Me(),b.color)},Object(me.b)(p.a,{pt:1},Object(me.b)(O.a,{variant:"h5",align:"right",css:Object(me.a)(Ue())},("0000"+b.id).slice(-"0000".length)))),Object(me.b)(Se.a,{css:Object(me.a)(Te(),b.color)},Object(me.b)(ke.a,{elevation:0,css:Object(me.a)(De(),b.color)},Object(me.b)("img",{alt:"high-res-poke-img",src:b.img,css:Object(me.a)(We())}))),Object(me.b)(we.a,null,Object(me.b)(p.a,{pb:4},Object(me.b)(f.a,{container:!0,direction:"row",alignContent:"center",justify:"center"},Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{pt:1,ml:2},Object(me.b)(O.a,{variant:"body1",align:"left"},"Original name: ",Object(me.b)("strong",null,b.pokeName)))),Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{pt:1,ml:2},Object(me.b)(O.a,{variant:"h4",align:"left"},Object(me.b)("strong",null,b.nickName)))),Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{ml:2},Object(me.b)(O.a,{variant:"body2",align:"left"},"Catched on: ",b.date))),Object(me.b)(f.a,{item:!0,xs:11,sm:7,md:7,lg:7,xl:7},Object(me.b)(p.a,{mx:1,pt:3},Object(me.b)(_e,{colors:"#00478C",bgcolor:Ie.a,width:"-webkit-fill-available",component:z.b,to:"/tokopedia-test/detail/"+b.id+"/"+b.pokeName},Object(me.b)(O.a,{css:Object(me.a)(ze())},"See detail ",Object(me.b)(Ae.a,{css:Object(me.a)(Ee())}))))),Object(me.b)(f.a,{item:!0,xs:11,sm:5,md:5,lg:5,xl:5},Object(me.b)(p.a,{mx:1,pt:3},Object(me.b)(_e,{colors:"#DB2E2E",bgcolor:Fe.a,width:"-webkit-fill-available",onClick:function(){var e;window.confirm("Sure to release this pokemon?")&&(e=b.listId,localStorage.setItem("inventory",JSON.stringify(Object.values(JSON.parse(localStorage.getItem("inventory"))).filter((function(t,n){return n!==e})))),a(!1),m())}},Object(me.b)(O.a,{css:Object(me.a)(Be())},"Release"))))))),Object(me.b)(f.a,{container:!0,direction:"row",alignContent:"center",justify:"flex-start"}))))})),$e=n(67),qe=n.n($e),He=n(100);function Ke(e){return new Promise((function(t,n){fetch(e).then((function(e){return e.json()})).then((function(e){t(e)}))}))}var Qe=n(149),Ye=n.n(Qe),Ve=n(254),Xe=n.n(Ve),Ze=n(252),et=n.n(Ze),tt=n(253),nt=n.n(tt),at=n(251),rt=n.n(at),ct=n(41),ot=n(523),it={bug:"#BB8100",dragon:"#BB0164",fairy:"#5AD292",fire:"#DB2E2E",ghost:"#404040",ground:"#AF9449",normal:"#B9B9B9",psychic:"#DC9B01",steel:"#ACAA99",dark:"#303346",electric:"#DCBE05",fighting:"#3A04A8",flying:"#24BCB2",grass:"#17B441",ice:"#35B9E3",poison:"#8E49AF",rock:"#6A665D",water:"#3575E3",unknown:"#B0B89E"},bt=n(525),lt=n(101);n(444);function st(){var e=Object(J.a)(["color: white; font-size: 1em; background-color: ",""]);return st=function(){return e},e}function ut(){var e=Object(J.a)(["font-weight: 600; "]);return ut=function(){return e},e}function jt(){var e=Object(J.a)(["font-weight: 600;"]);return jt=function(){return e},e}function Ot(){var e=Object(J.a)(["font-weight: 600;"]);return Ot=function(){return e},e}function mt(){var e=Object(J.a)(["\n                  font-weight: 600;\n                  display: inline;\n                "]);return mt=function(){return e},e}function dt(){var e=Object(J.a)(["\n                          font-weight: 600;\n                          display: flex;\n                          flex-wrap: wrap;\n                          float: right;\n                        "]);return dt=function(){return e},e}function ft(){var e=Object(J.a)(["font-style: italic; font-weight: 600"]);return ft=function(){return e},e}function pt(){var e=Object(J.a)(["margin-right: 0.5rem; color: #2f79d9;"]);return pt=function(){return e},e}function gt(){var e=Object(J.a)(["\n                      display: flex;\n                      align-items: center;\n                      flex-wrap: wrap;"]);return gt=function(){return e},e}function ht(){var e=Object(J.a)(["\n                  font-weight: 600;\n                  display: inline;\n                "]);return ht=function(){return e},e}function vt(){var e=Object(J.a)(["color: white; margin-right: 0.4rem; font-size: 1em; background-color: ",""]);return vt=function(){return e},e}function xt(){var e=Object(J.a)(["\n                  font-weight: 600;\n                  display: inline;\n                "]);return xt=function(){return e},e}function kt(){var e=Object(J.a)(["\n                          opacity: 0.7;\n                        "]);return kt=function(){return e},e}function yt(){var e=Object(J.a)(["\n                          margin-right: 0.5rem;\n                        "]);return yt=function(){return e},e}function wt(){var e=Object(J.a)(["\n                        margin-right: 0.5rem;\n                      "]);return wt=function(){return e},e}function St(){var e=Object(J.a)(["\n                      display: flex;\n                      align-items: center;\n                      flex-wrap: wrap;\n                    "]);return St=function(){return e},e}function Ct(){var e=Object(J.a)(["\n                        color: #9ea9b1;\n                          display: inline;\n                        "]);return Ct=function(){return e},e}function Nt(){var e=Object(J.a)(["\n                          color: #9ea9b1;\n                            display: inline;\n                            margin-right: 0.5rem;\n                          "]);return Nt=function(){return e},e}function It(){var e=Object(J.a)(["\n                          display: inline;\n                        "]);return It=function(){return e},e}function Ft(){var e=Object(J.a)(["\n                        color: #2f79d9;\n                        display: inline;\n                        margin-right: 0.5rem;\n                      "]);return Ft=function(){return e},e}function Rt(){var e=Object(J.a)(["\n                      display: flex;\n                      align-items: center;\n                      flex-wrap: wrap;\n                    "]);return Rt=function(){return e},e}function At(){var e=Object(J.a)(["\n                        width: 250px;\n                        height: 250px;    \n                        -webkit-filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.5));\n                        filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.5));\n                      "]);return At=function(){return e},e}function Bt(){var e=Object(J.a)(["\n                      text-align: center;\n                      border-radius: 2rem;\n                      background: radial-gradient(circle, "," 15%, "," 100%);\n                    "]);return Bt=function(){return e},e}function Et(){var e=Object(J.a)(["\n                  font-weight: 600;\n                  display: inline;\n                  margin-left: 1rem;\n                "]);return Et=function(){return e},e}function zt(){var e=Object(J.a)(["\n                  font-weight: 600;\n                  opacity: 0.37;\n                  display: inline;\n                "]);return zt=function(){return e},e}function Wt(e){var t=e.abilityURL,n=Object(r.useState)(null),a=Object(s.a)(n,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){var e=!0;function n(){return(n=Object(He.a)(qe.a.mark((function e(){return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ke(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return n.apply(this,arguments)}().then((function(t){e&&i(t)})),function(){return e=!1}}),[localStorage.getItem("inventory"),t]),Object(me.b)(c.a.Fragment,null,null!==o?Object(me.b)(c.a.Fragment,null,o.effect_entries.map((function(e,t){return Object(me.b)(O.a,{variant:"body1",key:t,align:"justify"},"en"===e.language.name&&e.effect)}))):Object(me.b)(ue.a,null))}var Dt=c.a.memo((function(e){var t=e.pokemon,n=e.forceUpdate,a=Object(M.f)(),o=a.id,i=a.name,b=Object(ot.a)(Object(T.a)()),l=Object(r.useState)(0),u=Object(s.a)(l,2),j=u[0],m=u[1];return Object(r.useEffect)((function(){m(n)}),[j,n]),Object(me.b)(c.a.Fragment,null,localStorage.setItem("pokeName",i.charAt(0).toUpperCase()+i.slice(1)),localStorage.setItem("id",o),Object(me.b)(d.a,{maxWidth:"xl"},Object(me.b)(p.a,null,Object(me.b)(O.a,{variant:"h4",component:"span",css:Object(me.a)(zt())},("0000"+o).slice(-"0000".length)),Object(me.b)(O.a,{variant:"h4",css:Object(me.a)(Et())},i.charAt(0).toUpperCase()+i.slice(1))),Object(me.b)(f.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:4},Object(me.b)(f.a,{item:!0,xs:12,sm:12,md:6,xl:6},Object(me.b)(p.a,{mt:3},Object(me.b)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},Object(me.b)(f.a,{item:!0,xs:12,sm:12},Object(me.b)(ke.a,{elevation:1,css:Object(me.a)(Bt(),it[t.types[0].type.name],t.types.length>1?it[t.types[1].type.name]:it[t.types[0].type.name])},localStorage.setItem("pokeImg",t.sprites.other["official-artwork"].front_default),Object(me.b)("img",{alt:"high-res-poke-img",src:t.sprites.other["official-artwork"].front_default,css:Object(me.a)(At())}))),Object(me.b)(p.a,{mt:3},Object(me.b)(f.a,{item:!0,xs:12,css:Object(me.a)(Rt())},Object.values(JSON.parse(localStorage.getItem("inventory"))).filter((function(e){return e.pokeName===i.charAt(0).toUpperCase()+i.slice(1)})).length>0?Object(me.b)(c.a.Fragment,null,Object(me.b)(Ye.a,{fontSize:"large",css:Object(me.a)(Ft())}),Object(me.b)(ct.c,{theme:b},Object(me.b)(O.a,{variant:"h4",css:Object(me.a)(It())},Object.values(JSON.parse(localStorage.getItem("inventory"))).filter((function(e){return e.pokeName===i.charAt(0).toUpperCase()+i.slice(1)})).length," in Pokebag"))):Object(me.b)(c.a.Fragment,null,Object(me.b)(rt.a,{fontSize:"large",css:Object(me.a)(Nt())}),Object(me.b)(ct.c,{theme:b},Object(me.b)(O.a,{variant:"h4",css:Object(me.a)(Ct())},"You have none"))))),Object(me.b)(p.a,{mt:1},Object(me.b)(f.a,{item:!0,xs:12,css:Object(me.a)(St())},Object(me.b)(et.a,{css:Object(me.a)(wt())}),Object(me.b)(ct.c,{theme:b},Object(me.b)(O.a,{variant:"h5",css:Object(me.a)(yt())},"Last Catch:"),Object(me.b)(O.a,{variant:"h6",css:Object(me.a)(kt())},Object.values(JSON.parse(localStorage.getItem("inventory"))).filter((function(e){return e.pokeName===i.charAt(0).toUpperCase()+i.slice(1)})).length>0?Object(me.b)(c.a.Fragment,null,Object.values(JSON.parse(localStorage.getItem("inventory"))).sort((function(e,t){return new Date(t.date)-new Date(e.date)})).filter((function(e){return e.pokeName===i.charAt(0).toUpperCase()+i.slice(1)}))[0].date):Object(me.b)(c.a.Fragment,null,"N/A")))))))),Object(me.b)(f.a,{item:!0,xs:12,sm:12,md:6,xl:6},Object(me.b)(p.a,{mt:3},Object(me.b)(O.a,{variant:"h4",css:Object(me.a)(xt())},"Type")),Object(me.b)(p.a,{mt:1},t.types.map((function(e,t){return Object(me.b)(bt.a,{key:t,component:O.a,label:e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1),css:Object(me.a)(vt(),it[e.type.name])})}))),Object(me.b)(p.a,{mt:5},Object(me.b)(O.a,{variant:"h4",css:Object(me.a)(ht())},"Abilities & Skills")),t.abilities.map((function(e,t){return Object(me.b)(c.a.Fragment,null,Object(me.b)(p.a,{mt:1,key:t,css:Object(me.a)(gt())},Object(me.b)(nt.a,{css:Object(me.a)(pt())}),Object(me.b)(O.a,{variant:"h6",css:Object(me.a)(ft())},e.ability.name.charAt(0).toUpperCase()+e.ability.name.slice(1))),Object(me.b)(p.a,{ml:4},Object(me.b)(Wt,{abilityURL:e.ability.url})))})),Object(me.b)(p.a,{my:2},Object(me.b)(z.b,{to:"/tokopedia-test/pokebag"},Object(me.b)(O.a,{css:Object(me.a)(dt())},"Check My ",i.charAt(0).toUpperCase()+i.slice(1)," ",Object(me.b)(Xe.a,null)))))),Object(me.b)(p.a,{my:3},Object(me.b)(xe.a,{variant:"middle"})),Object(me.b)(p.a,{mt:2},Object(me.b)(f.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{mt:1},Object(me.b)(O.a,{variant:"h4",css:Object(me.a)(mt())},"Moves"))),Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{mt:2},Object(me.b)(lt.a,{disableHeight:!0},(function(e){var n=e.width;return Object(me.b)(lt.c,{width:n,height:300,headerHeight:40,rowHeight:50,rowStyle:{alignItems:"stretch"},rowCount:t.moves.length,rowGetter:function(e){var n=e.index;return t.moves_detail[n]}},Object(me.b)(lt.b,{flexGrow:1,label:"Name",width:50,dataKey:"name",headerRenderer:function(e){var t=e.label;return Object(me.b)(O.a,{css:Object(me.a)(Ot())},t)},cellRenderer:function(e){var t=e.rowData;return Object(me.b)(O.a,{variant:"caption"},t.name.charAt(0).toUpperCase()+t.name.slice(1))}}),Object(me.b)(lt.b,{flexGrow:1,label:"Class",width:50,dataKey:"class",headerRenderer:function(e){var t=e.label;return Object(me.b)(O.a,{css:Object(me.a)(jt())},t)},cellRenderer:function(e){var t=e.rowData;return Object(me.b)(O.a,{variant:"caption"},t.damage_class.name.charAt(0).toUpperCase()+t.damage_class.name.slice(1))}}),Object(me.b)(lt.b,{flexGrow:1,label:"Type",width:50,dataKey:"type",headerRenderer:function(e){var t=e.label;return Object(me.b)(O.a,{css:Object(me.a)(ut())},t)},cellRenderer:function(e){var t=e.rowData;return Object(me.b)(bt.a,{component:O.a,label:t.type.name.charAt(0).toUpperCase()+t.type.name.slice(1),css:Object(me.a)(st(),it[t.type.name])})}}))}))))))))}));function Tt(e){var t=e.forceUpdate,n=Object(M.f)().id,c=Object(r.useState)(!0),o=Object(s.a)(c,2),i=o[0],b=o[1],l=Object(r.useState)(null),u=Object(s.a)(l,2),j=u[0],O=u[1],m="https://pokeapi.co/api/v2/pokemon/";return Object(r.useEffect)((function(){var e=function(){var e=Object(He.a)(qe.a.mark((function e(t){var n;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.moves.map(function(){var e=Object(He.a)(qe.a.mark((function e(t){var n;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ke(t.move.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,i&&O(Object(P.a)(Object(P.a)({},t),{},{moves_detail:Object(q.a)(n)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function t(){return(t=Object(He.a)(qe.a.mark((function e(){return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ke(m+n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return t.apply(this,arguments)}().then((function(t){e(t)})),function(){return b(!1)}}),[n,i]),Object(a.jsx)(a.Fragment,{children:null!==j?Object(a.jsx)(Dt,{pokemon:j,forceUpdate:t}):Object(a.jsx)(ue.a,{})})}var Ut=n(518),Mt=n(516),Pt=n(152),Jt=n(255),Lt=n.n(Jt),_t=n(183),Gt=n(256),$t=n.n(Gt);function qt(){var e=Object(J.a)(["\n                  font-weight: 800;\n                "]);return qt=function(){return e},e}function Ht(){var e=Object(J.a)(["\n                width: 150px;\n                height: 150px;    \n                -webkit-filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.5));\n                filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.5));\n              "]);return Ht=function(){return e},e}function Kt(){var e=Object(J.a)(["\n              text-align: center;\n              border-radius: 2rem;\n              "]);return Kt=function(){return e},e}function Qt(){var e=Object(J.a)(["opacity: 0.5"]);return Qt=function(){return e},e}function Yt(){var e=Object(J.a)(["\n                  font-weight: 800;\n                "]);return Yt=function(){return e},e}function Vt(){var e=Object(J.a)(["\n                  font-weight: 800;\n                "]);return Vt=function(){return e},e}function Xt(){var e=Object(J.a)(["\n                width: 150px;\n                height: 150px;    \n                -webkit-filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.5));\n                filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.5));\n              "]);return Xt=function(){return e},e}function Zt(){var e=Object(J.a)(["\n              text-align: center;\n              border-radius: 2rem;\n              "]);return Zt=function(){return e},e}function en(){var e=Object(J.a)(["opacity: 0.8"]);return en=function(){return e},e}function tn(){var e=Object(J.a)(["\n          width:100px;\n          height:100px;\n          background: url('/tokopedia-test/img/pokeball.png') center center/cover no-repeat;"]);return tn=function(){return e},e}function nn(){var e=Object(J.a)(["\n      width:200px;\n      height:200px;\n      overflow-y: scroll;\n      background: url('/tokopedia-test/img/pokeball.png') center center/cover no-repeat;"]);return nn=function(){return e},e}var an=c.a.forwardRef((function(e,t){return Object(me.b)(Ne.a,Object(P.a)({direction:"up",ref:t},e))})),rn=Object(re.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(4),right:e.spacing(4)},imgButton:{width:250,height:250},dialogRoot:{borderRadius:"2rem"}}})),cn=Object(m.a)((function(e){return{root:function(t){var n=t.value;return{color:e.palette.getContrastText("#F0CE00"),backgroundColor:"#F0CE00","&:hover":{backgroundColor:Mt.a[600]},borderRadius:"2rem",fontSize:"1em",height:70,width:234,disabled:n}}}}))(x.a);var on=function(){var e=rn(),t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(s.a)(o,2),b=i[0],l=i[1],u=Object(r.useState)(!1),j=Object(s.a)(u,2),m=j[0],d=j[1],g=Object(r.useState)(!0),h=Object(s.a)(g,2),v=h[0],k=h[1],y=Object(r.useState)(!0),w=Object(s.a)(y,2),S=w[0],C=w[1],N=Object(r.useRef)(""),I={},F=Object(r.useState)([]),R=Object(s.a)(F,2),A=R[0],B=R[1],E=Object(r.useReducer)((function(e){return e+1}),0),z=Object(s.a)(E,2),W=z[0],D=z[1],T=Date.now();T=new Intl.DateTimeFormat("en-US",{day:"2-digit",month:"long",year:"numeric",hour:"numeric",minute:"numeric",hour12:!1}).format(T);var U=function(){c(!1)};return Object(r.useEffect)((function(){v||setTimeout((function(){k(!0),_t.a.on(),Math.random()<.5?d(!0):l(!0)}),1e3),a&&c(!1),A.length>0&&localStorage.setItem("inventory",JSON.stringify(A))}),[A,m,v,_t.a.off()]),Object(me.b)(Lt.a,{active:!v,spinner:Object(me.b)(p.a,{mb:4},Object(me.b)(ke.a,{elevation:0,css:Object(me.a)(nn())})),text:"Catching..."},Object(me.b)(Tt,{forceUpdate:W}),Object(me.b)(L.a,{onClick:function(){c(!0)},variant:"round",css:Object(me.a)(tn()),className:e.root},"."),Object(me.b)(ye.a,{classes:{paper:e.dialogRoot},disableEscapeKeyDown:!0,disableBackdropClick:!0,TransitionComponent:an,keepMounted:!0,open:m,fullWidth:!0},Object(me.b)(Ce.a,null,Object(me.b)(p.a,{mt:3},Object(me.b)(O.a,{variant:"h3",align:"center",style:{color:Pt.a[500]}},Object(me.b)(Ye.a,{fontSize:"large",style:{color:Pt.a[500]}})," Success!")),Object(me.b)(p.a,{my:1},Object(me.b)(O.a,{variant:"h5",align:"center"},"Congratulations trainer! ",Object(me.b)("strong",null,localStorage.getItem("pokeName"))," is yours now")),Object(me.b)(p.a,{my:1},Object(me.b)(O.a,{variant:"body1",align:"center",css:Object(me.a)(en())},"Give it the best name and make it your greatest partner!"))),Object(me.b)(Se.a,null,Object(me.b)(ke.a,{elevation:0,css:Object(me.a)(Zt())},Object(me.b)("img",{alt:"high-res-poke-img",src:localStorage.getItem("pokeImg"),css:Object(me.a)(Xt())})),Object(me.b)(f.a,{container:!0,direction:"column",alignContent:"stretch",justify:"center"},Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{my:2},Object(me.b)(Ut.a,{placeholder:"e.g. Nakama",label:"Name",fullWidth:!0,inputRef:N,onChange:function(e){return C(!e.target.value)},InputLabelProps:{shrink:!0},variant:"outlined",color:"secondary"}))))),Object(me.b)(we.a,null,Object(me.b)(f.a,{container:!0,direction:"column",alignContent:"center",justify:"center"},Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{mb:4},Object(me.b)(cn,{disabled:S,onClick:function(){I={id:localStorage.getItem("id"),pokeName:localStorage.getItem("pokeName"),nickName:N.current.value,date:T,img:localStorage.getItem("pokeImg")},B(localStorage.getItem("inventory")?Object.values(JSON.parse(localStorage.getItem("inventory"))).filter((function(e){return""!==e.id})).concat(I):[I]),N.current.value="",D(),d(!1)}},Object(me.b)(O.a,{css:Object(me.a)(Vt())},"Done"))))))),Object(me.b)(ye.a,{classes:{paper:e.dialogRoot},TransitionComponent:an,keepMounted:!0,open:b,fullWidth:!0},Object(me.b)(Ce.a,null,Object(me.b)(p.a,{mt:3},Object(me.b)(O.a,{variant:"h3",align:"center",style:{color:Fe.a[500]}},Object(me.b)($t.a,{fontSize:"large",style:{color:Fe.a[500]}})," Failed"))),Object(me.b)(Se.a,null,Object(me.b)(p.a,{mb:8},Object(me.b)(O.a,{variant:"h4",align:"center"},"Oops ",Object(me.b)("strong",null,localStorage.getItem("pokeName"))," has run away, better luck next time trainer!"))),Object(me.b)(we.a,null,Object(me.b)(f.a,{container:!0,direction:"column",alignContent:"center",justify:"center"},Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{mb:4},Object(me.b)(cn,{onClick:function(){l(!1)}},Object(me.b)(O.a,{css:Object(me.a)(Yt())},"Dismiss"))))))),Object(me.b)(ye.a,{fullWidth:!0,classes:{paper:e.dialogRoot},open:a,TransitionComponent:an,keepMounted:!0,onClose:U},Object(me.b)(Ce.a,null,Object(me.b)(p.a,{my:3},Object(me.b)(O.a,{variant:"h5",align:"center"},"Wow.. great choice, trainer!"),Object(me.b)(O.a,{variant:"h5",align:"center"},"Ready to catch ",Object(me.b)("strong",null,localStorage.getItem("pokeName")),"?")),Object(me.b)(p.a,{my:1},Object(me.b)(O.a,{variant:"body1",align:"center",css:Object(me.a)(Qt())},"*Probability rate is 50%"))),Object(me.b)(Se.a,null,Object(me.b)(ke.a,{elevation:0,css:Object(me.a)(Kt())},Object(me.b)("img",{alt:"high-res-poke",src:localStorage.getItem("pokeImg"),css:Object(me.a)(Ht())}))),Object(me.b)(we.a,null,Object(me.b)(f.a,{container:!0,direction:"column",alignContent:"center",justify:"center"},Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(cn,{onClick:function(){k(!1)}},Object(me.b)(O.a,{css:Object(me.a)(qt())},"CATCH"))),Object(me.b)(f.a,{item:!0,xs:12},Object(me.b)(p.a,{mt:2,mb:4},Object(me.b)(x.a,{onClick:U},Object(me.b)(O.a,null,"I'll come back next time!"))))))))},bn=Object(T.a)({palette:{primary:{main:"#F0CE00"},secondary:{main:"#F0B000"}}});var ln=function(){var e=new b.a({uri:"https://graphql-pokeapi.vercel.app/api/graphql"});return Object(a.jsxs)(U.a,{theme:bn,children:[!localStorage.getItem("inventory")&&localStorage.setItem("inventory",JSON.stringify([{id:"",pokeName:"",nickName:"",date:"",img:""}])),Object(a.jsx)(l.ApolloProvider,{client:e,children:Object(a.jsxs)(z.a,{children:[Object(a.jsx)(D,{}),Object(a.jsxs)(M.c,{children:[Object(a.jsx)(M.a,{path:"/tokopedia-test",exact:!0,component:ve}),Object(a.jsx)(M.a,{path:"/tokopedia-test/pokebag",component:Ge}),Object(a.jsx)(M.a,{path:"/tokopedia-test/detail/:id/:name",component:on})]})]})})]})},sn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,527)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(ln,{}),document.getElementById("root")),sn()}},[[454,1,2]]]);
//# sourceMappingURL=main.5362d09d.chunk.js.map