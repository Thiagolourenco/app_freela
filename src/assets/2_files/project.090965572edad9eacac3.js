webpackJsonp([60],{1019:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1748),s=r(3473),o=r(100),a=o(n.a,s.a,!1,null,null,null);e.default=a.exports},1078:function(t,e,r){t.exports={"page-project":Promise.all([r.e(0),r.e(60)]).then(r.bind(null,3843)),"page-project-sidebar":Promise.all([r.e(0),r.e(60)]).then(r.bind(null,3842))}},1255:function(t,e,r){"use strict";var n=r(1671),s=(r.n(n),function(t,e){return r.i(n.compile)(t)(e||{},{pretty:!0})});e.a={name:"PageSectionMenu",computed:{firstMetaParent:function(){for(var t=this.$route.matched.length-1;t>0;t-=1){var e=this.$route.matched[t];if(e.meta&&e.meta.pageName)return this.$route.matched[t-1]}return null},pageLevelLinks:function(){var t=this;return this.firstMetaParent?this.$store.getters["routes/pageLevelLinks"](this.firstMetaParent.path).map(function(e){var r=e.pageName,n=e.path;return{pageName:r,path:s(n,t.$route.params)}}):[]}}}},1671:function(t,e,r){function n(t,e){for(var r,n=[],s=0,o=0,a="",i=e&&e.delimiter||"/";null!=(r=v.exec(t));){var c=r[0],l=r[1],d=r.index;if(a+=t.slice(o,d),o=d+c.length,l)a+=l[1];else{var m=t[o],h=r[2],b=r[3],f=r[4],k=r[5],j=r[6],g=r[7];a&&(n.push(a),a="");var x=null!=h&&null!=m&&m!==h,R="+"===j||"*"===j,w="?"===j||"*"===j,T=r[2]||i,y=f||k;n.push({name:b||s++,prefix:h||"",delimiter:T,optional:w,repeat:R,partial:x,asterisk:!!g,pattern:y?u(y):g?".*":"[^"+p(T)+"]+?"})}}return o<t.length&&(a+=t.substr(o)),a&&n.push(a),n}function s(t,e){return i(n(t,e))}function o(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function a(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function i(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var s="",i=r||{},p=n||{},u=p.pretty?o:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var d,m=i[l.name];if(null==m){if(l.optional){l.partial&&(s+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(k(m)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(0===m.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<m.length;h++){if(d=u(m[h]),!e[c].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(d)+"`");s+=(0===h?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?a(m):u(m),!e[c].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');s+=l.prefix+d}}else s+=l}return s}}function p(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function c(t,e){return t.keys=e,t}function l(t){return t.sensitive?"":"i"}function d(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(t,e)}function m(t,e,r){for(var n=[],s=0;s<t.length;s++)n.push(f(t[s],e,r).source);return c(new RegExp("(?:"+n.join("|")+")",l(r)),e)}function h(t,e,r){return b(n(t,r),e,r)}function b(t,e,r){k(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,s=!1!==r.end,o="",a=0;a<t.length;a++){var i=t[a];if("string"==typeof i)o+=p(i);else{var u=p(i.prefix),d="(?:"+i.pattern+")";e.push(i),i.repeat&&(d+="(?:"+u+d+")*"),d=i.optional?i.partial?u+"("+d+")?":"(?:"+u+"("+d+"))?":u+"("+d+")",o+=d}}var m=p(r.delimiter||"/"),h=o.slice(-m.length)===m;return n||(o=(h?o.slice(0,-m.length):o)+"(?:"+m+"(?=$))?"),o+=s?"$":n&&h?"":"(?="+m+"|$)",c(new RegExp("^"+o,l(r)),e)}function f(t,e,r){return k(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?d(t,e):k(t)?m(t,e,r):h(t,e,r)}var k=r(1672);t.exports=f,t.exports.parse=n,t.exports.compile=s,t.exports.tokensToFunction=i,t.exports.tokensToRegExp=b;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},1672:function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},1685:function(t,e,r){"use strict";var n=r(1255),s=r(1692),o=r(100),a=o(n.a,s.a,!1,null,null,null);e.a=a.exports},1692:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-page-tabs"},[r("ul",{staticClass:"w-page-tabs__list",attrs:{role:"tablist"}},t._l(t.pageLevelLinks,function(e){return r("router-link",{key:e.path,attrs:{to:e.path,tag:"li","active-class":"is-active"}},[r("a",[t._v(t._s(t.$t(e.pageName)))])])}),1)])},s=[],o={render:n,staticRenderFns:s};e.a=o},1748:function(t,e,r){"use strict";var n=r(1685),s=r(124);e.a={name:"ProjectPage",components:{PageSectionMenu:n.a},computed:r.i(s.a)({projectId:function(t){return t.project.currentProjectId}}),watch:{projectId:{handler:function(t){t&&this.$store.getters["project/current/isDeleted"]&&this.$router.goHome()},immediate:!0}}}},2596:function(t,e){t.exports='\n<div data-bind="visible: canViewSidebar">\n\n\t\x3c!-- ko if: ko.components.isRegistered(sidebarComponentName()) --\x3e\n\t\t\x3c!-- ko component: {name: sidebarComponentName()} --\x3e\x3c!-- /ko --\x3e\n\t\x3c!-- /ko --\x3e\n\n\t\x3c!-- ko ifnot: ko.components.isRegistered(sidebarComponentName()) --\x3e\n\t\t\x3c!-- REMOVED - ko text:\'TODO: \' + sidebarComponentName() - --\x3e\x3c!-- - /ko - --\x3e\n\t\x3c!-- /ko --\x3e\n\n</div>\n\n\x3c!-- IMPORTANT - Mark this template loaded --\x3e\n\x3c!-- ko if: $data.readyToShow != null && readyToShow --\x3e\n    <div data-bind="template:{afterRender:function(){templateLoaded(true);}}" class="hidden"></div>\n\x3c!-- /ko --\x3e'},2597:function(t,e){t.exports="<div class=\"section\">\n\t\x3c!-- ko component: { name: \"widget-mainTabs\", params: { subnav: subnav } } --\x3e\x3c!-- /ko --\x3e\n\n\t<section class=\"view-body w-starter-overlay__container\" data-bind=\"css:{\n\t\t\t'sectionContent': ['overview', 'people'].indexOf(app.currentRoute().projectTab) == -1,\n\t\t\t'minHeight': ['overview','people'].indexOf(app.currentRoute().projectTab) == -1 && !app.isBoardsView(),\n\t\t\t'is-boardsView': app.isBoardsView,\n\t\t\t'tasksSidebarVisible': app.showBacklog\n\t\t}\">\n\n\t\t\x3c!-- ko if: app.currentRoute().projectTab == \"overview\" && app.onBoarding.check('project-overview')() --\x3e\n\t\t\t\x3c!-- ko component: {\n\t\t\t\t\tname: 'list-state-onboarding',\n\t\t\t\t\tparams: {\n\t\t\t\t\t\tsection: 'project-overview',\n\t\t\t\t\t\ttitle: app.tl('Project Overview'),\n\t\t\t\t\t\tdescription: app.tl('See how your project is going at a glance with metrics, updates and activity.')\n\t\t\t\t\t}\n\t\t\t\t} --\x3e\n\t\t\t\x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: app.currentRoute().projectTab == \"tasks\" && app.onBoarding.check('project-tasks')() && !(app.loggedInUser.inOwnerCompany() && app.loggedInUser.administrator()) --\x3e\n\t\t\t\x3c!-- ko component: {\n\t\t\t\t\tname: 'list-state-onboarding',\n\t\t\t\t\tparams: {\n\t\t\t\t\t\tsection: 'project-tasks',\n\t\t\t\t\t\ttitle: $component.tasksOnboardingTitle,\n\t\t\t\t\t\tdescription: $component.tasksOnboardingDescription\n\t\t\t\t\t}\n\t\t\t\t} --\x3e\n\t\t\t\x3c!-- /ko --\x3e\n\t\t\x3c!-- /ko --\x3e\n\t\t<header class=\"main-header\"\n\t\t\tdata-bind=\"\n\t\t\t\tvisible: projectPageTitle() != ''\n\t\t\t\">\n\t\t\t<div class=\"main-header__base\">\n\t\t\t\t<div class=\"main-header__left\">\n\t\t\t\t\t<h1 class=\"main-header__title\">\n\t\t\t\t\t\t<span class=\"lhs flex flex-items-center\"\n\t\t\t\t\t\t\tdata-bind=\"css: {'mr--medium': !taskList()}\"\n\t\t\t\t\t\t\tstyle=\"left: 0\">\n\t\t\t\t\t\t\t{{projectPageTitle}}\n\n\t\t\t\t\t\t\t\x3c!-- ko if: shouldShowTaskDependencyWarning --\x3e\n\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\tname: 'widget-task-updates-handler',\n\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\tprojectId: projectId,\n\t\t\t\t\t\t\t\t\t\t\tshowMessage: true,\n\t\t\t\t\t\t\t\t\t\t\tsize: 'medium'\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\x3c!--ko if: taskList() && taskList().isPrivate && ko.unwrap( taskList().isPrivate ) > 0 --\x3e\n\t\t\t\t\t\t\t<button class=\"btn btn-link main-header__title-options no-outline lhs pt--small pb--none pl--small pr--medium font-size--medium\" type=\"button\" aria-label=\"Privacy\">\n\t\t\t\t\t\t\t\t\x3c!-- ko component: { name:\"widget-privacy-icon\", params: {lockdownId:taskList().lockdownId, private:taskList().isPrivate, projectId:taskList().projectId, id:taskList().id, title:taskList().name, type:'taskList'} } --\x3e\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t</h1>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- ko if: ko.components.isRegistered(sectionHeaderComponentName()) --\x3e\n\t\t\t\t\t<div class=\"main-header__right\">\n\t\t\t\t\t\t\x3c!-- ko if: sectionHeaderComponentName() --\x3e\n\t\t\t\t\t\t\t\x3c!-- ko component:{ name:sectionHeaderComponentName(), params:sectionParams() } --\x3e\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\n\t\t\t\t\t\t\x3c!-- ko if: shouldShowFilterButton --\x3e\n\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\tname: 'ui-filterButton',\n\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\thasActiveFilter: hasActiveFilter\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t</div>\n\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t</div>\n\t\t</header>\n\n\t\t\x3c!-- ko if: sectionComponentName() --\x3e\n\t\t\t\x3c!-- ko component:{name:sectionComponentName()} --\x3e\x3c!-- /ko --\x3e\n\t\t\x3c!-- /ko --\x3e\n\t</section>\n</div\n\n\x3c!-- IMPORTANT - Mark this template loaded --\x3e\n\x3c!-- ko if: $data.readyToShow != null && readyToShow --\x3e\n    <div data-bind=\"template:{afterRender:function(){templateLoaded(true)}}\" class=\"hidden\"></div>\n\x3c!-- /ko --\x3e\n"},3473:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section"},[r("PageSectionMenu"),t._v(" "),r("router-view")],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},3842:function(t,e,r){var n,s,o=function(t,e){return function(){return t.apply(e,arguments)}};n=[r(164),r(2596)],void 0!==(s=function(t,e){var r,n;return n={overview:"",tasks:"viewTasksAndMilestones",gantt:"viewTasksAndMilestones",milestones:"viewTasksAndMilestones",messages:"viewMessagesAndFiles","messages-create":"canAddMessages",files:"viewMessagesAndFiles",time:"viewTimeLog",notebooks:"viewNotebook","notebooks-create":"canAddNotebooks",risks:"viewRiskRegister",links:"viewLinks",billing:"canAccessInvoiceTracking",people:"projectAdministrator",roles:"projectAdministrator",settings:"projectAdministrator",report:"viewTasksAndMilestones",roles:"projectAdministrator"},r=function(){function e(e){null==e&&(e={}),this.dispose=o(this.dispose,this),this.subscriptions=[],this.sidebarComponentName=t.pureComputed(function(t){return function(){if("project"===app.currentRoute().page&&null==app.currentRoute().projectTab)return"sidebar-project-overview";if(null!=app.currentRoute().projectTab)switch(app.currentRoute().projectTab){case"tasks":return null!=app.currentRoute().itemId&&"tasks"===app.currentRoute()[1]?"sidebar-project-task":"sidebar-project-tasks";case"tasklists":return"sidebar-project-tasks";case"files":return null!=app.currentRoute().itemId&&"files"===app.currentRoute()[1]?"sidebar-project-file":"sidebar-project-"+app.currentRoute().projectTab;default:return"sidebar-project-"+app.currentRoute().projectTab}return null}}()),this.subscriptions.push(this.sidebarComponentName),this.canViewSidebar=t.computed(function(t){return function(){var t,e,r;return null!=app.currentRoute().projectTab&&null!=app.currentRoute().project&&(r=app.currentRoute().projectTab,"tasklists"!==r&&"tasklist"!==r||(r="tasks"),"messages"!==r&&"notebooks"!==r||null==app.currentRoute().itemId||"create"!==app.currentRoute().itemId||(r+="-create"),t=n[r],e=app.currentRoute().project.permissions,null!=t&&""===t||e[t]())}}()),this.subscriptions.push(this.canViewSidebar)}return e.prototype.dispose=function(){this.subscriptions.forEach(function(t){return t.dispose()})},e}(),{viewModel:r,template:e}}.apply(e,n))&&(t.exports=s)},3843:function(t,e,r){var n,s;n=[r(164),r(2597),r(1118),r(1015)],void 0!==(s=function(t,e,r,n){var s;return s=function(){this.subscriptions=[],null!=app.currentRoute().project&&"deleted"===app.currentRoute().project.status()?app.featureFlip.check("newDashboard")()?app.hasher.replaceHash("home/work"):app.hasher.replaceHash("dashboard/activity"):this.subscriptions.push(app.currentRoute.subscribe(function(t){return function(e){if(null!=e.project)return"deleted"===e.project.status()&&(app.featureFlip.check("newDashboard")()?app.hasher.replaceHash("home/work"):app.hasher.replaceHash("dashboard/activity")),t.SetSubnavEnabledStatus(t.subnav)}}(this))),this.subscriptions.push(this.projectId=t.pureComputed(function(t){return function(){return app.currentRoute().projectId}}())),this.subscriptions.push(this.isTemplate=t.pureComputed(function(t){return function(){return app.currentRoute().project&&app.currentRoute().project.isTemplate()}}())),this.subscriptions.push(this.tasksOnboardingTitle=t.pureComputed(function(t){return function(){return null==app.currentRoute().project?"":app.currentRoute().project.isOnBoardingProject()?app.tl("Your Starter Project"):app.tl("Tasks")}}())),this.subscriptions.push(this.tasksOnboardingDescription=t.pureComputed(function(t){return function(){return null==app.currentRoute().project?"":app.currentRoute().project.isOnBoardingProject()?app.tl("We've created a project for you to get you started learning the basics. Try completing some tasks to get going."):app.tl("Use tasks to track and complete your work and keep people up to date")}}())),this.tasksClickHandler=function(t){return function(e){var r,n,s,o;if(t.projectId()>0&&("board"===app.currentRoute().project.tasksStartPage()||"default"===app.currentRoute().project.tasksStartPage()&&"board"===app.loggedInUser.preferences.projectTasksViewMode()))return null!=e&&(e.ctrlKey||e.metaKey)?window.open("#projects/"+t.projectId()+"/tasks/board"):app.isBoardsView()?app.currentRoute.valueHasMutated():app.GoTo("#projects/"+t.projectId()+"/tasks/board"),!1;if(t.projectId()>0&&(r="project"+t.projectId()+"-lastTaskListId",(n=app.cache.get(r))>0&&"tasklists"!==app.currentRoute().projectTab)){if(s=function(){app.cache.remove(r),setTimeout(function(){return null!=e&&(e.ctrlKey||e.metaKey)?window.open("#projects/"+t.projectId()+"/tasks"):app.GoTo("#projects/"+t.projectId()+"/tasks")})},o="#tasklists/"+n,null!=e&&(e.ctrlKey||e.metaKey))window.open(o);else{if(document.location.hash===o)return app.currentRoute.valueHasMutated(),!1;app.GoTo(o,{onNotFound:s})}return!1}return!0}}(this),this.subnav=[{name:app.tl("Overview"),routePart:"overview",enabled:t.observable(!0),permissionKey:null},{name:app.tl("Tasks"),routePart:"tasks",enabled:t.observable(!0),permissionKey:"viewTasksAndMilestones",alt:"tasklists",onClick:this.tasksClickHandler},{name:app.tl("Milestones"),routePart:"milestones",enabled:t.observable(!0),permissionKey:"viewTasksAndMilestones"},{name:app.tl("Messages"),routePart:"messages",enabled:t.observable(!0),permissionKey:"viewMessagesAndFiles"},{name:app.tl("Files"),routePart:"files",enabled:t.observable(!0),permissionKey:"viewMessagesAndFiles"},{name:app.tl("Time"),routePart:"time",enabled:t.observable(!0),permissionKey:"viewTimeLog"},{name:app.tl("Notebooks"),routePart:"notebooks",enabled:t.observable(!0),permissionKey:"viewNotebook"},{name:app.tl("Risks"),routePart:"risks",enabled:t.observable(!0),permissionKey:"viewRiskRegister",pageName:app.tl("Risk Register")},{name:app.tl("Links"),routePart:"links",enabled:t.observable(!0),permissionKey:"viewLinks"},{name:app.tl("Billing"),routePart:"billing",enabled:t.observable(!0),permissionKey:"canAccessInvoiceTracking"},{name:app.tl("Comments"),routePart:"comments",enabled:t.observable(!0),permissionKey:null},{name:app.tl("People"),routePart:"people",enabled:t.observable(!0),permissionKey:"canViewProjectMembers"},{name:app.tl("Settings"),routePart:"settings",enabled:t.observable(!0),permissionKey:"projectAdministrator",elementId:"tab_projectsettings"},{name:app.tl("Report"),routePart:"report",enabled:t.observable(!1),permissionKey:"projectAdministrator"}],this.subscriptions.push(app.ko.postbox.subscribe("users-added-to-project-"+app.currentRoute().projectId,function(t){return function(e){return Object.keys(app.cachedProjectStats).forEach(function(e){if(new RegExp("^"+t.projectId()+"-").test(e)&&-1!==e.indexOf("people"))return app.projectInfo.clearStatsByKey(e)})}}(this))),this.subscriptions.push(app.ko.postbox.subscribe("allTWEvents",function(t){return function(e){var r,n,s;e.projectId===t.projectId()&&~~t.projectId()&&(n=e.itemType,"project"===e.itemType&&"permissions"===e.subType&&"user"===(null!=(r=e.extraInfo)?r.objectType:void 0)&&(n="people"),Object.keys(app.cachedProjectStats).forEach(function(t){if(new RegExp("^"+e.projectId+"-").test(t)&&-1!==t.indexOf(n))return app.projectInfo.clearStatsByKey(t)})),("projectSettings"===e.itemType||"project"===e.itemType&&"permissions"===e.subType)&&parseInt(e.itemId,10)===app.currentRoute().projectId&&(s=function(){return app.UpdateProjectAndPermissions(t.projectId()).then(function(e){var r;if(t.SetSubnavEnabledStatus(t.subnav),"people"!==(r=app.currentRoute().projectTab)&&"settings"!==r)return app.currentRoute.valueHasMutated()})},null==e.extraInfo&&(e.extraInfo={}),null!=e.extraInfo.personId?parseInt(e.extraInfo.personId,10)===app.loggedInUser.id()&&s():"user"===e.extraInfo.objectType&&null!=e.extraInfo.objectId?parseInt(e.extraInfo.objectId,10)===app.loggedInUser.id()&&s():s())}}(this))),this.SetSubnavEnabledStatus(this.subnav),this.subscriptions.push(this.subnav.baseURL=t.pureComputed(function(t){return function(){return"/#/projects/"+t.projectId()+"/"}}(this))),this.subnav.routePartName="projectTab",this.subnav.setPageTitle=!1,this.subnav.pageTitleBase=app.GetPageTitle(),this.subnavProjectTab="projectTab",this.subscriptions.push(this.matchedSubNav=t.pureComputed(function(t){return function(){var e;return e=app.currentRoute()[t.subnavProjectTab],e?t.subnav.filter(function(t){return t.routePart===e||t.alt===e})[0]||null:null}}(this))),this.subscriptions.push(this.sectionComponentName=t.pureComputed(function(t){return function(){return t.matchedSubNav()?"overview"===t.matchedSubNav().routePart&&t.isTemplate()?"section-project-timeline":"section-project-"+t.matchedSubNav().routePart:""}}(this))),this.sectionHeaderComponentName=t.pureComputed(function(t){return function(){return!t.matchedSubNav()||"messages"===t.matchedSubNav().routePart&&null!=app.currentRoute().itemId&&"create"!==app.currentRoute().itemId?"":"section-project-"+t.matchedSubNav().routePart+"-header-buttons"}}(this)),this.subscriptions.push(this.sectionHeaderComponentName),this.subscriptions.push(this.sectionParams=t.pureComputed(function(t){return function(){return{parentVM:t}}}(this))),this.subscriptions.push(this.taskListSharedPureComputed=t.pureComputed(function(e){return function(){return"tasklists"===app.currentRoute().projectTab?app.shared.getPureComputed("viewModel/taskLists/"+app.currentRoute().itemId):t.pureComputed(function(){return null})}}())),this.subscriptions.push(this.taskList=t.pureComputed(function(t){return function(){var e;return null!=(e=t.taskListSharedPureComputed()())?e.taskList():void 0}}(this))),this.subscriptions.push(this.taskListName=t.pureComputed(function(t){return function(){var e;return null!=(e=t.taskList())&&"function"==typeof e.name?e.name():void 0}}(this))),this.subscriptions.push(this.taskSharedPureComputed=t.pureComputed(function(e){return function(){return"tasks"===app.currentRoute().projectTab&&null!=app.currentRoute().itemId?app.shared.getPureComputed("viewModel/tasks/"+app.currentRoute().itemId):t.pureComputed(function(){return null})}}())),this.subscriptions.push(this.task=t.pureComputed(function(t){return function(){var e;return null!=(e=t.taskSharedPureComputed()())?e.task():void 0}}(this))),this.subscriptions.push(this.projectPageTitle=t.computed(function(t){return function(){var e,r;return null==(e=t.matchedSubNav())?"":(app.currentRoute().project.name()+" - "+e.name+" - "+app.account.name(),r={keepItForThePage:!1,keepItForTheSubPage:!1},function(){var t,n,s,o,a;switch(e.routePart){case"milestones":return r.keepItForTheSubPage=!0,isNaN(app.currentRoute().itemId)?e.name:app.tl("Milestone Details");case"links":return null!=app.currentRoute().itemId?app.tl("Link Details"):e.name;case"files":return null!=app.currentRoute().itemId?app.tl("File Details"):e.name;case"notebooks":return"create"===app.currentRoute().itemId?app.tl("Create a New Notebook"):isNaN(app.currentRoute().itemId)?this.matchedSubNav().name:" ";case"messages":return"create"===app.currentRoute().itemId?app.tl("Post a New Message"):isNaN(app.currentRoute().itemId)?this.matchedSubNav().name:"";case"people":return null==app.currentRoute().itemId||"people"===app.currentRoute().itemId?app.tl("People on this Project"):app.tl("Project Roles");case"tasks":return app.isBoardsView()&&app.isShowingFullScreenMode()?"":app.isBoardsView()?app.tl("Tasks Board"):"tasklists"!==app.currentRoute().projectTab||isNaN(app.currentRoute().itemId)?"tasks"!==app.currentRoute().projectTab||isNaN(app.currentRoute().itemId)?app.tl("Tasks"):null!=this.task()?0===this.task().parentTaskId()?app.tl("Task Details"):app.tl("Subtask Details"):app.tl("Task Details"):this.taskListName();case"report":return null!=(null!=(t=app.currentRoute())&&null!=(n=t.project)&&"function"==typeof n.name?n.name():void 0)&&null!=(null!=(s=app.currentRoute())&&null!=(o=s.project)&&null!=(a=o.company)&&"function"==typeof a.name?a.name():void 0)?app.tl("Project Report: [_s] [_s]",app.currentRoute().project.name(),"("+app.currentRoute().project.company.name()+")"):app.tl("Project Report");default:return null!=e.pageName?e.pageName:e.name}}.call(t))}}(this))),this.subscriptions.push(this.savedFiltersKey=t.pureComputed(function(t){return function(){var t,e,r;return r=app.currentRoute(),r.page,e=null!=(t=r.request_)?t:"",null!=r.projectTab&&r.hasFilter?e.includes("/create")?"":null==r.projectMilestonesTab||isNaN(parseInt(r.projectMilestonesTab,10))?"tasklists"===r.projectTab?"projectTasks":null!=r.itemId?"":"project"+app.utility.Capitalize(r.projectTab):"":""}}())),this.subscriptions.push(this.currentFilter=n.getFilter(app.savedFiltersKey,this.projectId,!1)),this.subscriptions.push(this.currentProjectFilter=t.pureComputed(function(t){return function(){if(null!=t.currentFilter()&&null!=app.currentFilter())return"projectTasksBoard"===app.currentFilter().section()?app.currentFilter():t.currentFilter()}}(this))),this.subscriptions.push(this.currentProjectFilter=t.pureComputed(function(t){return function(){if(null!=t.currentFilter()&&null!=app.currentFilter())return"projectTasksBoard"===app.currentFilter().section()?app.currentFilter():t.currentFilter()}}(this))),this.subscriptions.push(this.hasActiveFilter=t.pureComputed(function(t){return function(){if(null!=t.currentFilter())return t.currentFilter().active()}}(this))),this.subscriptions.push(app.ko.postbox.subscribe("savedFilter-cleared",function(t){return function(e){null!=t.currentFilter()&&t.currentFilter().section()===e.section&&e.uniqueId!==t.currentFilter().uniqueId&&t.currentFilter().Clear()}}(this))),this.subscriptions.push(this.shouldShowTaskDependencyWarning=t.pureComputed(function(t){return function(){var e,r;return r=app.currentRoute(),null!=t.projectId()&&(t.projectId()>0&&("tasks"===(e=r.projectTab)||"tasklists"===e))}}(this))),this.subscriptions.push(this.shouldShowFilterButton=t.pureComputed(function(t){return function(){var e,r,n;return n=app.currentRoute(),r=null!=(e=n.request_)?e:"",("time"!==app.currentRoute().projectTab||!app.currentRoute().project||!app.currentRoute().project.isTemplate())&&(!(null!=n.itemId&&!r.includes("tasklists/"))&&((null==n.projectTab||"tasks"!==n.projectTab||null==n.itemId)&&(""!==t.savedFiltersKey()&&n.hasFilter)))}}(this))),app.InitOnShow(this)},s.prototype.OnShow=function(){},s.prototype.OnClickStar=function(t,e){var r;app.currentRoute().project.starred(!app.currentRoute().project.starred()),r=app.currentRoute().project.starred(),app.api.put("projects/"+app.currentRoute().project.id()+"/"+(r?"star.json":"unstar.json")).then(function(t){return function(t){return"OK"!==t.response.STATUS&&(app.flash.Error(app.tl("Something went wrong, please try again")),app.currentRoute().project.starred(!app.currentRoute().project.starred())),app.ko.postbox.publish("projects-update-stats",{})}}())},s.prototype.SetSubnavEnabledStatus=function(t){return function(t){var e,r,n,s;if(null!=(null!=(s=app.currentRoute().project)?s.activePages:void 0))for(e=0,r=t.length;e<r;e++)switch(n=t[e],n.routePart){case"tasks":case"milestones":case"messages":case"files":case"notebooks":case"links":case"billing":case"time":n.enabled(!("1"!==app.currentRoute().project.activePages[n.routePart]()||!app.currentRoute().project.permissions[n.permissionKey]()));break;case"comments":n.enabled("1"===app.currentRoute().project.activePages.comments());break;case"risks":n.enabled(!("1"!==app.currentRoute().project.activePages.riskRegister()||!app.currentRoute().project.permissions[n.permissionKey]()));break;case"people":n.enabled(!app.enforceProject()&&app.currentRoute().project.permissions[n.permissionKey]()||app.currentRoute().project.permissions.projectAdministrator());break;case"settings":n.enabled(!app.enforceProject()&&app.currentRoute().project.permissions[n.permissionKey]()&&app.currentRoute().project.isActive())}}}(),s.prototype.dispose=function(){this.subscriptions.forEach(function(t){return t.dispose()}),app.removeValidRouteSubscriptions(this),null!=this.checkPos&&clearInterval(this.checkPos)},{viewModel:s,template:e}}.apply(e,n))&&(t.exports=s)}});
//# sourceMappingURL=project.090965572edad9eacac3.js.map