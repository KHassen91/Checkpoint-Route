(this.webpackJsonpcheckpointrout=this.webpackJsonpcheckpointrout||[]).push([[0],{55:function(e,t,i){},56:function(e,t,i){},65:function(e,t,i){"use strict";i.r(t);var n=i(5),r=i(0),a=i.n(r),c=i(18),o=i.n(c),s=(i(55),i(48)),l=i(37),h=(i(56),i(71)),d=i(73),j=i(70),p=i(72),m=i(47),b=i(46),u=i(19),g=function(e){var t=Object(r.useRef)("");Object(r.useRef)("");return Object(n.jsx)("div",{children:Object(n.jsxs)(h.a,{bg:"light",expand:"lg",children:[Object(n.jsxs)(u.b,{to:"/",style:{height:"2.5%",width:"2.5%"},children:[Object(n.jsx)("img",{style:{height:"100%",width:"100%",marginRight:10},src:"https://i.pinimg.com/736x/54/51/75/54517514b7e9c8c21cb1526176c30732.jpg"})," "]}),Object(n.jsx)(u.b,{to:"/",children:Object(n.jsx)(h.a.Brand,{href:"#home",style:{marginRight:40},children:"Movies Best"})}),Object(n.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(d.a,{className:"mr-auto",children:[Object(n.jsx)(d.a.Link,{as:u.b,to:"/",children:"Home"}),Object(n.jsx)(d.a.Link,{onClick:function(){return function(){var t=prompt("Movie Name"),i=prompt("Movie Description"),n=prompt("Movie Poster"),r=prompt("Movie Rate");e.add(t,i,n,r)}()},href:"#addmovie",children:"Add Movie"}),Object(n.jsx)(j.a,{title:"Choose By Rate",id:"basic-nav-dropdown",children:[1,2,3,4,5].map((function(t){return Object(n.jsx)(j.a.Item,{onClick:function(t){return e.searchRate(t.target.innerHTML)},children:t})}))})]}),Object(n.jsxs)(p.a,{inline:!0,children:[Object(n.jsx)(m.a,{ref:t,type:"text",placeholder:"Choose By Title",className:"mr-sm-2"}),Object(n.jsx)(b.a,{onClick:function(){e.searchTitle(t.current.value)},variant:"outline-secondary",children:"Search"})]})]})]})})},x=i(74),M=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(x.a,{style:{width:"18rem",margin:60},children:[Object(n.jsx)(x.a.Img,{height:"421.25px",variant:"top",src:e.Movie.posterURL}),Object(n.jsxs)(x.a.Body,{children:[Object(n.jsx)(x.a.Title,{style:{fontWeight:"bolder",fontSize:25,color:"#212F3C"},children:e.Movie.title}),Object(n.jsx)(x.a.Text,{style:{height:"185px"},children:e.Movie.description}),Object(n.jsxs)(x.a.Text,{style:{fontWeight:"bolder"},children:["Rate: ",e.Movie.rate]}),Object(n.jsx)(u.b,{to:"/trailer/".concat(e.Movie.title),children:Object(n.jsx)(b.a,{variant:"primary",children:"Watch Trailer"})})]})]})})},f=function(e){return Object(n.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:20},children:e.Movies.filter((function(t){return t.rate>=e.Rate&&t.title.toUpperCase().includes(e.Title.toUpperCase())})).map((function(e){return Object(n.jsx)(M,{Movie:e})}))})},O=i(7);var v=function(){var e=Object(r.useState)([{id:1,title:"Tesla",description:"A freewheeling take on visionary inventor Nikola Tesla, his interactions with Thomas Edison and J.P. Morgan's daughter Anne, and his breakthroughs in transmitting electrical power and light.",posterURL:"https://m.media-amazon.com/images/M/MV5BYzg0MjQ0ODUtYTgyNC00Y2Y5LWE5NDctODY3ZTFkYmZkNGFiXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_SX300.jpg",trailer:"https://www.youtube.com/embed/e4U-23TOKms",rate:2.5},{id:2,title:"Avengers: Endgame",description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",posterURL:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",rate:4},{id:3,title:"Men in Black: International",description:"The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest threat to date: a mole in the Men in Black organization.",posterURL:"https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",trailer:"https://www.youtube.com/embed/BV-WEb2oxLk",rate:2.5},{id:4,title:"I Am Mother",description:"A teenage girl is raised underground by a kindly robot 'Mother' -- designed to repopulate the earth following the extinction of humankind. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.",posterURL:"https://m.media-amazon.com/images/M/MV5BMTkxMTczNTA4Nl5BMl5BanBnXkFtZTgwNDAyMzgwODM@._V1_SX300.jpg",trailer:"https://www.youtube.com/embed/N5BKctcZxrM",rate:3},{id:5,title:"Captive State",description:"Set in a Chicago neighborhood nearly a decade after an occupation by an extra-terrestrial force, Captive State explores the lives on both sides of the conflict - the collaborators and dissidents.",posterURL:"https://m.media-amazon.com/images/M/MV5BMTgyNjU0NTAxOV5BMl5BanBnXkFtZTgwNTc4MDIzNjM@._V1_SX300.jpg",trailer:"https://www.youtube.com/embed/i68xCzI406A",rate:3.5},{id:6,title:"Interstellar",description:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",posterURL:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",rate:4}]),t=Object(l.a)(e,2),i=t[0],a=t[1],c=Object(r.useState)(""),o=Object(l.a)(c,2),h=o[0],d=o[1],j=Object(r.useState)("0"),p=Object(l.a)(j,2),m=p[0],b=p[1],x=function(e,t,n,r){a([].concat(Object(s.a)(i),[{title:e,description:t,posterURL:n,rate:r}]))};return Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(g,{add:x,searchTitle:function(e){d(e)},searchRate:function(e){b(""+e)}}),Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(f,{add:x,Movies:i,Title:h,Rate:m})}}),Object(n.jsx)(O.a,{path:"/trailer/:Ntitle",component:function(e){var t=e.match,r=i.find((function(e){return e.title===t.params.Ntitle}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{style:{fontFamily:"Georgia, serif",fontSize:40,fontWeight:"bolder",margin:30,color:"#212F3C",textAlign:"center",textDecoration:"underline"},children:r.title}),Object(n.jsx)("span",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)("iframe",{width:"853",height:"480",src:r.trailer,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(n.jsx)("p",{style:{fontFamily:"sans-serif",fontSize:20,margin:"30px  70px",color:"black",textAlign:"center"},children:r.description})]})}})]})]})})},y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,75)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),a(e),c(e)}))};i(64);o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),y()}},[[65,1,2]]]);
//# sourceMappingURL=main.d1ddc2dd.chunk.js.map