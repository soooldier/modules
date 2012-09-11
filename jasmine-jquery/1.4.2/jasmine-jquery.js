define("#jasmine-jquery/1.4.2/jasmine-jquery",["$"],function(e){var t=e("$"),n=function(){return jasmine.getFixtures().proxyCallTo_("read",arguments)},r=function(){jasmine.getFixtures().proxyCallTo_("preload",arguments)},i=function(){jasmine.getFixtures().proxyCallTo_("load",arguments)},s=function(){jasmine.getFixtures().proxyCallTo_("appendLoad",arguments)},o=function(e){jasmine.getFixtures().proxyCallTo_("set",arguments)},u=function(){jasmine.getFixtures().proxyCallTo_("appendSet",arguments)},a=function(e){return jasmine.getFixtures().sandbox(e)},f=function(e,t){return jasmine.JQuery.events.spyOn(e,t)},l=function(){jasmine.getStyleFixtures().proxyCallTo_("preload",arguments)},c=function(){jasmine.getStyleFixtures().proxyCallTo_("load",arguments)},h=function(){jasmine.getStyleFixtures().proxyCallTo_("appendLoad",arguments)},p=function(e){jasmine.getStyleFixtures().proxyCallTo_("set",arguments)},d=function(e){jasmine.getStyleFixtures().proxyCallTo_("appendSet",arguments)},v=function(){return jasmine.getJSONFixtures().proxyCallTo_("load",arguments)},m=function(e){return jasmine.getJSONFixtures().proxyCallTo_("read",arguments)[e]};jasmine.spiedEventsKey=function(e,t){return[$(e).selector,t].toString()},jasmine.getFixtures=function(){return jasmine.currentFixtures_=jasmine.currentFixtures_||new jasmine.Fixtures},jasmine.getStyleFixtures=function(){return jasmine.currentStyleFixtures_=jasmine.currentStyleFixtures_||new jasmine.StyleFixtures},jasmine.Fixtures=function(){this.containerId="jasmine-fixtures",this.fixturesCache_={},this.fixturesPath="spec/javascripts/fixtures"},jasmine.Fixtures.prototype.set=function(e){this.cleanUp(),this.createContainer_(e)},jasmine.Fixtures.prototype.appendSet=function(e){this.addToContainer_(e)},jasmine.Fixtures.prototype.preload=function(){this.read.apply(this,arguments)},jasmine.Fixtures.prototype.load=function(){this.cleanUp(),this.createContainer_(this.read.apply(this,arguments))},jasmine.Fixtures.prototype.appendLoad=function(){this.addToContainer_(this.read.apply(this,arguments))},jasmine.Fixtures.prototype.read=function(){var e=[],t=arguments;for(var n=t.length,r=0;r<n;r++)e.push(this.getFixtureHtml_(t[r]));return e.join("")},jasmine.Fixtures.prototype.clearCache=function(){this.fixturesCache_={}},jasmine.Fixtures.prototype.cleanUp=function(){t("#"+this.containerId).remove()},jasmine.Fixtures.prototype.sandbox=function(e){var n=e||{};return t('<div id="sandbox" />').attr(n)},jasmine.Fixtures.prototype.createContainer_=function(e){var n;e instanceof t?(n=t('<div id="'+this.containerId+'" />'),n.html(e)):n='<div id="'+this.containerId+'">'+e+"</div>",t("body").append(n)},jasmine.Fixtures.prototype.addToContainer_=function(e){var n=t("body").find("#"+this.containerId).append(e);n.length||this.createContainer_(e)},jasmine.Fixtures.prototype.getFixtureHtml_=function(e){return typeof this.fixturesCache_[e]=="undefined"&&this.loadFixtureIntoCache_(e),this.fixturesCache_[e]},jasmine.Fixtures.prototype.loadFixtureIntoCache_=function(e){var n=this.makeFixtureUrl_(e),r=t.ajax({type:"GET",url:n+"?"+(new Date).getTime(),async:!1});this.fixturesCache_[e]=r.responseText},jasmine.Fixtures.prototype.makeFixtureUrl_=function(e){return this.fixturesPath.match("/$")?this.fixturesPath+e:this.fixturesPath+"/"+e},jasmine.Fixtures.prototype.proxyCallTo_=function(e,t){return this[e].apply(this,t)},jasmine.StyleFixtures=function(){this.fixturesCache_={},this.fixturesNodes_=[],this.fixturesPath="spec/javascripts/fixtures"},jasmine.StyleFixtures.prototype.set=function(e){this.cleanUp(),this.createStyle_(e)},jasmine.StyleFixtures.prototype.appendSet=function(e){this.createStyle_(e)},jasmine.StyleFixtures.prototype.preload=function(){this.read_.apply(this,arguments)},jasmine.StyleFixtures.prototype.load=function(){this.cleanUp(),this.createStyle_(this.read_.apply(this,arguments))},jasmine.StyleFixtures.prototype.appendLoad=function(){this.createStyle_(this.read_.apply(this,arguments))},jasmine.StyleFixtures.prototype.cleanUp=function(){while(this.fixturesNodes_.length)this.fixturesNodes_.pop().remove()},jasmine.StyleFixtures.prototype.createStyle_=function(e){var n=t("<style></style>").text(e);this.fixturesNodes_.push(n),t("head").append(n)},jasmine.StyleFixtures.prototype.clearCache=jasmine.Fixtures.prototype.clearCache,jasmine.StyleFixtures.prototype.read_=jasmine.Fixtures.prototype.read,jasmine.StyleFixtures.prototype.getFixtureHtml_=jasmine.Fixtures.prototype.getFixtureHtml_,jasmine.StyleFixtures.prototype.loadFixtureIntoCache_=jasmine.Fixtures.prototype.loadFixtureIntoCache_,jasmine.StyleFixtures.prototype.makeFixtureUrl_=jasmine.Fixtures.prototype.makeFixtureUrl_,jasmine.StyleFixtures.prototype.proxyCallTo_=jasmine.Fixtures.prototype.proxyCallTo_,jasmine.getJSONFixtures=function(){return jasmine.currentJSONFixtures_=jasmine.currentJSONFixtures_||new jasmine.JSONFixtures},jasmine.JSONFixtures=function(){this.fixturesCache_={},this.fixturesPath="spec/javascripts/fixtures/json"},jasmine.JSONFixtures.prototype.load=function(){return this.read.apply(this,arguments),this.fixturesCache_},jasmine.JSONFixtures.prototype.read=function(){var e=arguments;for(var t=e.length,n=0;n<t;n++)this.getFixtureData_(e[n]);return this.fixturesCache_},jasmine.JSONFixtures.prototype.clearCache=function(){this.fixturesCache_={}},jasmine.JSONFixtures.prototype.getFixtureData_=function(e){return this.loadFixtureIntoCache_(e),this.fixturesCache_[e]},jasmine.JSONFixtures.prototype.loadFixtureIntoCache_=function(e){var n=this,r=this.fixturesPath.match("/$")?this.fixturesPath+e:this.fixturesPath+"/"+e;t.ajax({async:!1,cache:!1,dataType:"json",url:r,success:function(t){n.fixturesCache_[e]=t},error:function(e,t,n){throw Error("JSONFixture could not be loaded: "+r+" (status: "+t+", message: "+n.message+")")}})},jasmine.JSONFixtures.prototype.proxyCallTo_=function(e,t){return this[e].apply(this,t)},jasmine.JQuery=function(){},jasmine.JQuery.browserTagCaseIndependentHtml=function(e){return t("<div/>").append(e).html()},jasmine.JQuery.elementToString=function(e){var n=$(e).get(0);return n==undefined||n.cloneNode?t("<div />").append($(e).clone()).html():e.toString()},jasmine.JQuery.matchersClass={},!function(e){var n={spiedEvents:{},handlers:[]};e.events={spyOn:function(e,r){var i=function(t){n.spiedEvents[jasmine.spiedEventsKey(e,r)]=t};return t(e).bind(r,i),n.handlers.push(i),{selector:e,eventName:r,handler:i,reset:function(){delete n.spiedEvents[jasmine.spiedEventsKey(e,r)]}}},wasTriggered:function(e,t){return!!n.spiedEvents[jasmine.spiedEventsKey(e,t)]},wasPrevented:function(e,t){return n.spiedEvents[jasmine.spiedEventsKey(e,t)].isDefaultPrevented()},cleanUp:function(){n.spiedEvents={},n.handlers=[]}}}(jasmine.JQuery),!function(){var e={toHaveClass:function(e){return this.actual.hasClass(e)},toHaveCss:function(e){for(var t in e)if(this.actual.css(t)!==e[t])return!1;return!0},toBeVisible:function(){return this.actual.is(":visible")},toBeHidden:function(){return this.actual.is(":hidden")},toBeSelected:function(){return this.actual.is(":selected")},toBeChecked:function(){return this.actual.is(":checked")},toBeEmpty:function(){return this.actual.is(":empty")},toExist:function(){return $(document).find(this.actual).length},toHaveAttr:function(e,t){return n(this.actual.attr(e),t)},toHaveProp:function(e,t){return n(this.actual.prop(e),t)},toHaveId:function(e){return this.actual.attr("id")==e},toHaveHtml:function(e){return this.actual.html()==jasmine.JQuery.browserTagCaseIndependentHtml(e)},toContainHtml:function(e){var t=this.actual.html(),n=jasmine.JQuery.browserTagCaseIndependentHtml(e);return t.indexOf(n)>=0},toHaveText:function(e){var n=$.trim(this.actual.text());return e&&t.isFunction(e.test)?e.test(n):n==e},toHaveValue:function(e){return this.actual.val()==e},toHaveData:function(e,t){return n(this.actual.data(e),t)},toBe:function(e){return this.actual.is(e)},toContain:function(e){return this.actual.find(e).length},toBeDisabled:function(e){return this.actual.is(":disabled")},toBeFocused:function(e){return this.actual.is(":focus")},toHandle:function(e){var t=$._data(this.actual.get(0),"events");if(!t||!e||typeof e!="string")return!1;var n=e.split("."),r=n.shift(),i=n.slice(0).sort(),s=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(!t[r]||!n.length)return t[r]&&t[r].length>0;for(var o=0;o<t[r].length;o++){var u=t[r][o].namespace;if(s.test(u))return!0}},toHandleWith:function(e,t){var n=$._data(this.actual.get(0),"events")[e];for(var r=0;r<n.length;r++)if(n[r].handler==t)return!0;return!1}},n=function(e,t){return t===undefined?e!==undefined:e==t},r=function(n){var r=jasmine.Matchers.prototype[n];jasmine.JQuery.matchersClass[n]=function(){if(this.actual&&(this.actual instanceof t||jasmine.isDomNode(this.actual))){this.actual=$(this.actual);var i=e[n].apply(this,arguments),s;return this.actual.get&&(s=this.actual.get()[0])&&!$.isWindow(s)&&s.tagName!=="HTML"&&(this.actual=jasmine.JQuery.elementToString(this.actual)),i}return r?r.apply(this,arguments):!1}};for(var i in e)r(i)}(),beforeEach(function(){this.addMatchers(jasmine.JQuery.matchersClass),this.addMatchers({toHaveBeenTriggeredOn:function(e){return this.message=function(){return["Expected event "+this.actual+" to have been triggered on "+e,"Expected event "+this.actual+" not to have been triggered on "+e]},jasmine.JQuery.events.wasTriggered(e,this.actual)}}),this.addMatchers({toHaveBeenTriggered:function(){var e=this.actual.eventName,t=this.actual.selector;return this.message=function(){return["Expected event "+e+" to have been triggered on "+t,"Expected event "+e+" not to have been triggered on "+t]},jasmine.JQuery.events.wasTriggered(t,e)}}),this.addMatchers({toHaveBeenPreventedOn:function(e){return this.message=function(){return["Expected event "+this.actual+" to have been prevented on "+e,"Expected event "+this.actual+" not to have been prevented on "+e]},jasmine.JQuery.events.wasPrevented(e,this.actual)}}),this.addMatchers({toHaveBeenPrevented:function(){var e=this.actual.eventName,t=this.actual.selector;return this.message=function(){return["Expected event "+e+" to have been prevented on "+t,"Expected event "+e+" not to have been prevented on "+t]},jasmine.JQuery.events.wasPrevented(t,e)}})}),afterEach(function(){jasmine.getFixtures().cleanUp(),jasmine.getStyleFixtures().cleanUp(),jasmine.JQuery.events.cleanUp()}),window.readFixtures=n,window.preloadFixtures=r,window.loadFixtures=i,window.appendLoadFixtures=s,window.setFixtures=o,window.appendSetFixtures=u,window.sandbox=a,window.spyOnEvent=f,window.preloadStyleFixtures=l,window.loadStyleFixtures=c,window.appendLoadStyleFixtures=h,window.setStyleFixtures=p,window.appendSetStyleFixtures=d,window.loadJSONFixtures=v,window.getJSONFixture=m});