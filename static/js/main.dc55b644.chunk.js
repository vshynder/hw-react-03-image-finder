(this["webpackJsonphw-01-components"]=this["webpackJsonphw-01-components"]||[]).push([[0],{17:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),o=a(2),l=a.n(o),i=a(11),u=a(9),m=a(3),h=a(4),p=a(6),g=a(5),f=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.target.value;e.setState({query:a})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{onSubmit:function(t){return e.props.search(t,e.state.query.split(" ").join("+"))},className:"SearchForm"},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",onChange:this.handleChange,type:"text",placeholder:"Search images and photo"})))}}]),a}(r.a.Component),d=function(e){return r.a.createElement("li",{className:"ImageGalleryItem",onClick:e.itemClick},r.a.createElement("img",{className:"ImageGalleryItem-image",alt:"something",src:e.source}))},b=function(e){return r.a.createElement("ul",{className:"ImageGallery"},e.images.length?e.images.map((function(t){return r.a.createElement(d,{itemClick:function(){return e.onItemClick(t.largeImageURL)},key:t.id,source:t.webformatURL})})):r.a.createElement("div",null,"No photos to show"))},y=function(e){var t=e.isActive,a=e.loadMore,n=e.input;return t?r.a.createElement("button",{onClick:function(){return a(null,n)}},"Load more"):null},v=a(10),E=a.n(v),S=(a(34),a(16)),k=a.n(S),O=(a(54),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}});E.a.setAppElement("#root");var C="https://pixabay.com/api/?key=".concat("16982476-4d5cba04b9deee3976600b5b5","&per_page=12&"),j=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[],query:"",page:1,isLoading:!1,isOpenModal:!1},e.handleSearch=function(){var t=Object(u.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a&&a.preventDefault(),t.next=3,e.handlePageNumber(n);case 3:r=C+"page="+e.state.page+"&q="+n,e.setState({isLoading:!0}),fetch(r).then((function(e){return e.json()})).then((function(t){console.log(t.hits);var a=1===e.state.page?[]:e.state.images;e.setState({isLoading:!1,images:[].concat(Object(i.a)(a),Object(i.a)(t.hits)),query:n})}));case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handlePageNumber=function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.query!==a){t.next=3;break}return t.next=3,e.setState({page:e.state.page+1});case 3:if(e.state.query===a){t.next=6;break}return t.next=6,e.setState({page:1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleImageClick=function(t){e.setState({fullImg:t}),e.setState({isOpenModal:!0})},e.handleModalClose=function(){console.log("ghesrhg"),e.setState({isOpenModal:!1})},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{search:this.handleSearch}),r.a.createElement(b,{onItemClick:this.handleImageClick,images:this.state.images}),r.a.createElement(y,{isActive:this.state.images.length>1,loadMore:this.handleSearch,input:this.state.query}),r.a.createElement(k.a,{type:"Puff",color:"#00BFFF",height:100,width:100,visible:this.state.isLoading}),r.a.createElement(E.a,{isOpen:this.state.isOpenModal,onRequestClose:this.handleModalClose,style:O,contentLabel:"Example Modal",classname:"Modal"},r.a.createElement("img",{className:"",src:this.state.fullImg,alt:"Full-size"})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.dc55b644.chunk.js.map