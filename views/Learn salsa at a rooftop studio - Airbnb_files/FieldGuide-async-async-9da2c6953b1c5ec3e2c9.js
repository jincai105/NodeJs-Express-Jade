!function(){var e=webpackJsonp([63],{"7rXo":function(e,t,n){"use strict";var i=n("lQnl"),o=n.n(i),a=n("t7ak"),r=n.n(a),s=n("G8+n"),c=function(){function e(){babelHelpers.classCallCheck(this,e),this.generateActions("setLoadingArticle","setLoadingTopic","resetCurrentArticle","logHelpCenterClick","addTopicTitle","logPanelViewTime","logSearchUsage","fetchDataSucceeded","fetchDataFailed","getUserIssuePrediction","toggleTopicInExpandedTopics","resetExpandedTopics")}return babelHelpers.createClass(e,[{key:"fetchData",value:function(){function e(){var e=this;this.actions.setLoadingTopic(!0),r.a.get("/help/dropdown",{window_location:window.location.href}).then(function(t){e.actions.fetchDataSucceeded(t),e.actions.setLoadingTopic(!1)},function(){e.actions.fetchDataFailed(),e.actions.setLoadingTopic(!1)})}return e}()},{key:"fetchArticle",value:function(){function e(e){var t=this;this.actions.setLoadingArticle(!0),o.a.get("/v1/help/faq/"+String(e)).then(function(e){t.dispatch(e.faq)},function(){t.dispatch({id:e})}).then(function(){t.actions.setLoadingArticle(!1)},function(){t.actions.setLoadingArticle(!1)})}return e}()},{key:"showArticle",value:function(){function e(e){this.dispatch({id:e,isInitial:!1})}return e}()}]),e}();t.a=s.a.createActions(c)},"G8+n":function(e,t,n){"use strict";var i=n("r3wS"),o=n.n(i),a=function(e){return"string"==typeof e?JSON.parse(e):e};t.a=new o.a({deserialize:a})},PSFX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("oIG2"),o=n.n(i),a=n("M/w6"),r=n.n(a),s=n("M1VO"),c=n.n(s),l=n("Jmof"),u=n.n(l),d=n("j9xI"),f=n.n(d),p=n("CJzf"),h=n("r/1J"),y=n("s5oY"),k=n("7rXo"),m=n("8qeL"),g=Object.assign({},p.h),b={ESC:"Escape"},v=function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeEntered=0,n.loadedForLocation=null,n.showCommunityCenterLink=o.a.current().can_see_community_links,n.state={shouldLogCommunityCenterImpression:n.showCommunityCenterLink,shouldLogFieldGuidePhoneImpression:!0,shouldLogFooterPhoneImpression:!0,isSticky:!1},n.loadPanelData=n.loadPanelData.bind(n),n.onClosePanelClick=n.onClosePanelClick.bind(n),n.onDocumentClick=n.onDocumentClick.bind(n),n.onToggle=n.onToggle.bind(n),n.setPanelRef=n.setPanelRef.bind(n),n.inExperiment=null,n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){function e(){c.a.on(m.a.FIELD_GUIDE_TOGGLE,this.onToggle);var e=document.getElementsByClassName("js-help-toggle")[0];e&&e.addEventListener("click",this.onToggle)}return e}()},{key:"componentDidUpdate",value:function(){function e(){var e=this;this.focusRequired&&this.panel&&(setTimeout(function(){e.panel.focus()},0),this.focusRequired=!1)}return e}()},{key:"componentWillUnmount",value:function(){function e(){c.a.off(m.a.FIELD_GUIDE_TOGGLE,this.onToggle),this.cleanUpAfterStickyState()}return e}()},{key:"onToggle",value:function(){function e(e){return f.a.queueEvent({event_name:"px_help_button",event_data:{section:"field_guide",operation:"click",datadog_key:"px_help_button.click",datadog_tags:"section:field_guide"}}),this.loadPanelData(),null===this.state.showHelpFeedbackLink&&this.setState({showHelpFeedbackLink:this.isInSubmitFeedbackLinkExperiment()}),this.state.isSticky?this.setNonsticky():this.setSticky(),void 0!==e&&e.preventDefault(),!1}return e}()},{key:"onClosePanelClick",value:function(){function e(){k.a.resetExpandedTopics(),this.setNonsticky()}return e}()},{key:"onDocumentClick",value:function(){function e(e){this.state.isSticky&&(this.panel.contains(e.target)||this.setNonsticky())}return e}()},{key:"setPanelRef",value:function(){function e(e){this.panel=e}return e}()},{key:"setSticky",value:function(){function e(){document.addEventListener("click",this.onDocumentClick,!0),this.setState({isSticky:!0}),this.logPanelImpressions(),this.focusRequired=!0}return e}()},{key:"setNonsticky",value:function(){function e(){this.cleanUpAfterStickyState(),this.state.isSticky&&this.timeEntered&&k.a.logPanelViewTime(Date.now()-this.timeEntered),this.setState({isSticky:!1})}return e}()},{key:"cleanUpAfterStickyState",value:function(){function e(){document.removeEventListener("click",this.onDocumentClick,!0)}return e}()},{key:"logPanelImpressions",value:function(){function e(){this.timeEntered=Date.now(),this.logCommunityCenterImpression()}return e}()},{key:"loadPanelData",value:function(){function e(){this.shouldFetchData()&&(this.loadedForLocation=window.location.href,k.a.fetchData(),o.a.isLoggedIn()&&k.a.getUserIssuePrediction("field_guide"))}return e}()},{key:"logCommunityCenterImpression",value:function(){function e(){this.state.shouldLogCommunityCenterImpression&&(f.a.logEvent({event_name:"community_center_link",event_data:{operation:"impression",page:"nav_bar",section:"help_dropdown"}}),this.setState({shouldLogCommunityCenterImpression:!1}))}return e}()},{key:"shouldFetchData",value:function(){function e(){return this.loadedForLocation!==window.location.href}return e}()},{key:"render",value:function(){function e(){if(!this.state.isSticky)return null;var e=this.props.styles;return u.a.createElement(h.a,{keyName:b.ESC,handler:this.onClosePanelClick},u.a.createElement("div",{className:this.state.isSticky?"skinny-help-side-panel-sticky":""},u.a.createElement("div",babelHelpers.extends({ref:this.setPanelRef},Object(p.b)(e.fieldGuide,this.state.isSticky&&e.sticky),{tabIndex:"-1",role:"region","aria-label":r.a.t("help.Airbnb Help")}),u.a.createElement(y.a,{captureScrolling:this.state.isSticky,onClosePanelClick:this.onClosePanelClick,showCommunityCenterLink:this.showCommunityCenterLink,showHelpFeedbackLink:this.state.showHelpFeedbackLink}))))}return e}()}]),t}(u.a.Component);v.propTypes=g,t.default=Object(p.f)(function(e){return{sticky:{display:"block"},fieldGuide:{width:"350px",position:"fixed",zIndex:3001,lineHeight:"normal",borderRadius:"0 0 2px 2px",boxShadow:"-3px 0 3px 0 rgba(0, 0, 0, 0.05)",top:0,right:0,bottom:0,display:"none",background:e.color.white}}})(v)},"r/1J":function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("yu5W"),s=n.n(r),c=n("Jmof"),l=n.n(c),u=n("rGv+"),d=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),f=Object(u.forbidExtraProps)({children:s.a.node.isRequired,handler:s.a.func.isRequired,keyName:s.a.string.isRequired,allowPropagation:s.a.bool}),p={allowPropagation:!1},h=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onKeyDown=n.onKeyDown.bind(n),n}return a(t,e),d(t,[{key:"onKeyDown",value:function(){function e(e){var t=this.props,n=t.handler,i=t.keyName,o=t.allowPropagation;e.key===i&&(n(e),o||e.stopPropagation())}return e}()},{key:"render",value:function(){function e(){var e=this.props.children;return l.a.createElement("div",{onKeyDown:this.onKeyDown},e)}return e}()}]),t}(l.a.Component);h.displayName="KeyDownHandler",h.propTypes=f,h.defaultProps=p,t.a=h},s5oY:function(e,t,n){"use strict";function i(){return new Promise(function(e){n.e(802).then(function(t){e(babelHelpers.interopRequireWildcard(n("5kjd")))}.bind(null,n)).catch(n.oe)}).then(function(e){return e.default||e})}function o(e){return r.a.createElement(s.b,babelHelpers.extends({loader:i},e))}t.a=o;var a=n("Jmof"),r=n.n(a),s=n("oJpz")}});"object"==typeof module&&(module.exports=e.default||e)}();