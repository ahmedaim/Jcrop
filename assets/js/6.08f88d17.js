(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{215:function(t,e,n){"use strict";n.r(e);n(12),n(21);var c=n(171),r={name:"Jcrop",props:["src","options","rect"],mounted:function(){var t=new Image;this.$el.appendChild(t),t.src=this.src,c.a.load(t).then(this.startup)},methods:{startup:function(t){var e=this;this.jcrop=c.a.attach(t,this.options||{});var n=c.a.Rect.sizeOf(this.jcrop.el);["activate","update","change","remove"].forEach(function(t){e.jcrop.listen("crop."+t,function(n){return e.$emit(t,n)})}),n=this.rect?c.a.Rect.from(this.rect):n.scale(.7,.5).center(n.w,n.h),this.jcrop.newWidget(n),this.pos=this.jcrop.pos,this.jcrop.focus()}},watch:{rect:{handler:function(t){var e=this;if(!this.jcrop.active)return!1;this.jcrop.active.animate(c.a.Rect.from(t),20,"inOutCirc").then(function(){e.jcrop.focus()})},deep:!0},options:{handler:function(t){this.jcrop.setOptions(t)},deep:!0}},beforeDestroy:function(){this.jcrop.destroy()},data:function(){return{pos:null,jcrop:null}}},i=n(0),o=Object(i.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("div")}],!1,null,null,null);e.default=o.exports}}]);