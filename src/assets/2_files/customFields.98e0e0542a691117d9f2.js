webpackJsonp([64],{1046:function(t,n,e){t.exports={"modal-addOrEditCustomField":Promise.all([e.e(0),e.e(64)]).then(e.bind(null,3611)),"section-custom-fields-list":Promise.all([e.e(0),e.e(64)]).then(e.bind(null,3889)),"widget-link-custom-fields":Promise.all([e.e(0),e.e(64)]).then(e.bind(null,4245))}},2324:function(t,n){t.exports='<ul class="w-colors-list">\n\t\x3c!-- ko foreach: app.consts.CATEGORYCOLORS --\x3e\n\t\t<li class="w-colors-list__color-item">\n\t\t\t<a href="javascript:;" class="w-colors-list__color-link" data-bind="click: $component.OnSelectOptionColor.bind($component, $parent, $data), style: {\'color\': \'#\'+$data}"></a>\n\t\t</li>\n\t\x3c!-- /ko --\x3e\n</ul>'},2325:function(t,n){t.exports='<div class="sectionFormLightbox m-add-edit-custom-field" data-bind="attr:{id:holderId}">\n\n\t<div class="modal-header">\n\t\t<h2 class="modal-title">{{modalTitle}}</h2>\n\t</div>\n\n\t<div class="modal-body">\n\n\t\t<div class="lightBoxTabs pt--medium">\n\t\t\t\x3c!-- ko component: { name: "ui-simple-tabs", params:{ tabs: tabs } } --\x3e\x3c!-- /ko --\x3e\n\t\t</div>\n\n\t\t<form data-bind="submit: OnSubmit">\n\n\n\t\t\t<div class="form-content" data-bind="visible: tabs.selCode() === \'details\'">\n\t\t\t\t<label>{{app.tl(\'Name\')}}</label>\n\t\t\t\t<input type="text" class="form-control mb--medium" maxlength="255" required data-bind="textInput: field.name">\n\n\t\t\t\t<label class="block">{{app.tl(\'Description\')}}</label>\n\t\t\t\t<textarea class="form-control p--medium" maxlength="255" data-bind="textInput: field.description"></textarea>\n\t\t\t</div>\n\n\t\t\t<div class="form-content" data-bind="visible: tabs.selCode() === \'type\'">\n\t\t\t\t<div class="mb--medium">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t{{app.tl(\'Type\')}}\n\t\t\t\t\t\t\x3c!-- ko if: mode === \'edit\' --\x3e\n\t\t\t\t\t\t\t<span class="ml--small tipped-hide" data-tipped="{{ app.tl(\'You cannot edit a custom field\\\'s type once it is set\')}}">\n\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\tname: \'info-circle-regular\'\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t</label>\n\t\t\t\t\t<select\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tstyle="width: 100%"\n\t\t\t\t\t\tclass="form-control mb--medium select2"\n\t\t\t\t\t\tdata-bind="select2:{\n\t\t\t\t\t\t\tdata: fieldTypeOptions,\n\t\t\t\t\t\t\tvalue: field.type,\n\t\t\t\t\t\t\tplaceholder: app.tl(\'Choose\')+app.localizationPreferences().ellipsis\n\t\t\t\t\t\t},\n\t\t\t\t\t\tenable: mode === \'add\'">\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- ko if: shouldShowFieldOptions --\x3e\n\t\t\t\t\t<div class="m-add-edit-custom-field__dropdown-options">\n\t\t\t\t\t\t<label class="my--medium">{{app.tl(\'Options\')}}</label>\n\t\t\t\t\t\t<ul class="list-unstyled"\n\t\t\t\t\t\t\tdata-bind="dragulaExtra: {\n\t\t\t\t\t\t\t\tdata: field.options.choices,\n\t\t\t\t\t\t\t\tmoves: DragulaMoves,\n\t\t\t\t\t\t\t\tinvalid: DragulaInvalid,\n\t\t\t\t\t\t\t\tafterDrop: OnDrop\n\t\t\t\t\t\t}">\n\t\t\t\t\t\t\t<li class="m-add-edit-custom-field__dropdown-option flex mb--medium">\n\t\t\t\t\t\t\t\t<span class="m-add-edit-custom-field__drag-handle">\n\t\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\t\tname: \'draghandle-tw-solid\',\n\t\t\t\t\t\t\t\t\t\t\t\tclass: \'m-add-edit-custom-field__drag-icon\',\n\t\t\t\t\t\t\t\t\t\t\t\tsize: \'1x\'\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\x3c!-- ko if: $parent.field.type() === \'dropdown\' --\x3e\n\t\t\t\t\t\t\t\t\t<span class="mr--medium">\n\t\t\t\t\t\t\t\t\t\t<a class="m-add-edit-custom-field__color-picker"\n\t\t\t\t\t\t\t\t\t\t\thref="javascript:;"\n\t\t\t\t\t\t\t\t\t\t\tdata-bind="tippedDelegate"\n\t\t\t\t\t\t\t\t\t\t\tdata-tipped-options="skin:\'light\', showOn: \'click\', hideOn: \'click\', hideOnClickOutside: true, fadeIn: 120, showDelay: 0, fadeOut: 0, hideAfter: 0, maxWidth: 200, position: \'bottomright\'"\n\t\t\t\t\t\t\t\t\t\t\tdata-content="{{$component.colorsTippedContent}}">\n\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- ko if: color == \'\' --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="m-add-edit-custom-field__color-picker-color empty"></span>\n\t\t\t\t\t\t\t\t\t\t\t\x3c!--/ko--\x3e\n\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- ko if: color != \'\' --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="m-add-edit-custom-field__color-picker-color" data-bind="style:{backgroundColor: color}"></span>\n\t\t\t\t\t\t\t\t\t\t\t\x3c!--/ko--\x3e\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="cursor--pointer">\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname: \'chevron-down-regular\'\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\t<input type="text" class="m-add-edit-custom-field__option-text form-control" maxlength="255" data-bind="textInput: value, event: { keydown: $component.OnKeyDown },">\n\t\t\t\t\t\t\t\t<span class="ml--medium py--small cursor--pointer" data-bind="click: $component.OnClickDeleteOption">\n\t\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\t\tname: \'delete-regular\',\n\t\t\t\t\t\t\t\t\t\t\t\tclass: \'m-add-edit-custom-field__delete-icon\',\n\t\t\t\t\t\t\t\t\t\t\t\tsize: \'1x\'\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<button type="button" class="m-add-edit-custom-field__add-option btn btn-sm btn-link lhs no-outline" data-bind="click: $component.OnClickAddOption">\n\t\t\t\t\t\t\t<span class="mr--small">\n\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\tname: \'add-regular\',\n\t\t\t\t\t\t\t\t\t\t\tsize: \'1x\'\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{app.tl(\'Add Option\')}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t</div>\n\n\n\n\t\t</form>\n\n\t</div>\n\n\t<div class="modal-footer flex">\n\t\t<button type="button" class="btn btn-default" data-bind="click: Lightbox.cancel">{{app.tl(\'Close\')}}</button>\n\t\t<button type="submit" class="btn btn-success ml--auto mr--none" data-bind="click: OnSubmit, loader: field.isUpdating, disable: !canSubmit(), css:{disabledSubmit:!canSubmit()}">\n\t\t\t{{ buttonText }}\n\t\t</button>\n\t</div>\n</div>\n<span data-bind="template: { afterRender: function(){ OnShow() } }"></span>'},2659:function(t,n){t.exports='<ul class="tippedMenu">\n    <li>\n        <a href="javascript:;" data-bind="click: $component.OnClickEditCustomField">\n            {{app.tl(\'Edit\')}}\n        </a>\n    </li>\n    <li>\n        <a href="javascript:;" data-bind="click: $component.OnClickDeleteCustomField">\n            {{app.tl(\'Delete\')}}\n        </a>\n    </li>\n</ul>'},2660:function(t,n){t.exports='<div class="s-custom-fields-list {{widgetClass}}">\n\t<div class="s-custom-fields-list__header flex mb--xlarge">\n\t\t<h3>{{headingText}}</h3>\n\t\t\x3c!-- ko if: data.list().length --\x3e\n\t\t\t<button class="btn btn-success" data-bind="click: OnClickAddCustomField">{{app.tl(\'Add Custom Field\')}}</button>\n\t\t\x3c!-- /ko --\x3e\n\t</div>\n\t\x3c!-- ko if: data.state() == \'loading\' --\x3e\n\t\t\x3c!-- ko component: {name: \'list-state-loading-new\'} --\x3e\x3c!-- /ko --\x3e\n\t\x3c!-- /ko --\x3e\n\t\x3c!-- ko if: data.state() == \'error\' --\x3e\n\t\t\x3c!-- ko component: {name: \'list-state-error\', params:{onTryAgainAction: data.TryLoadAgain, errorStatus: data.APIErrorStatus}} --\x3e\x3c!-- /ko --\x3e\n\t\x3c!-- /ko --\x3e\n\t\x3c!-- ko if: data.list().length == 0 && (data.state() == \'blank\' || data.state() == \'content\') --\x3e\n\t\t<div class="s-custom-fields-list__blank-slate">\n\t\t\t\x3c!--ko component: {\n\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\tparams: {\n\t\t\t\t\t\tname: \'custom-field\',\n\t\t\t\t\t\tclass: \'s-custom-fields-list__blank-slate_icon\'\n\t\t\t\t\t}\n\t\t\t\t} --\x3e\n\t\t\t\x3c!-- /ko --\x3e\n\t\t\t<h4 class="s-custom-fields-list__blank-slate_header">{{ blankSlateHeading }}</h4>\n\t\t\t<p class="s-custom-fields-list__blank-slate_text">{{ blankSlateText }}</p>\n\t\t\t<button class="btn btn-success mt--xlarge" data-bind="click: $component.OnClickAddCustomField">{{ blankSlateButton }}</button>\n\t\t</div>\n\t\x3c!-- /ko --\x3e\n\t\x3c!-- ko if: data.state() == \'content\' && data.list().length > 0 --\x3e\n\t\t<div class="s-custom-fields-list__content">\n\t\t\t\x3c!-- ko foreach: data.list --\x3e\n\t\t\t\t\x3c!-- ko if: $component.shouldShowFieldType(type()) --\x3e\n\t\t\t\t\t<div class="w-custom-field">\n\t\t\t\t\t\t<div class="w-custom-field__header flex">\n\t\t\t\t\t\t\t\x3c!-- ko if: isUpdating --\x3e\n\t\t\t\t\t\t\t\t<span class="w-custom-field__header-loading mr--small">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\x3c!-- ko ifnot: isUpdating --\x3e\n\t\t\t\t\t\t\t\t<span class="w-custom-field__header-options"\n\t\t\t\t\t\t\t\t\tdata-content="{{$component.optionsTippedContent}}"\n\t\t\t\t\t\t\t\t\tdata-tipped-options="\n\t\t\t\t\t\t\t\t\t\tskin: \'light\',\n\t\t\t\t\t\t\t\t\t\tshowOn: \'click\',\n\t\t\t\t\t\t\t\t\t\thideOn: false,\n\t\t\t\t\t\t\t\t\t\thideAfter: 300,\n\t\t\t\t\t\t\t\t\t\tposition: \'bottommiddle\'"\n\t\t\t\t\t\t\t\t\tdata-bind="tippedDelegate">\n\t\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\tname: \'ellipsis-v-regular\',\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t<span class="w-custom-field__header-details">\n\t\t\t\t\t\t\t\t<span class="w-custom-field__header-title">{{ name }}</span>\n\t\t\t\t\t\t\t\t<span class="w-custom-field__header-type">({{ app.tl(app.consts.CUSTOM_FIELD_TYPES[type()]) }})</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\x3c!-- ko if: app.customFieldsHelper.doesFieldTypeHaveOptions(type()) --\x3e\n\t\t\t\t\t\t\t\t<span class="cursor--pointer" data-bind="click: $component.toggleField">\n\t\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\tname: chevronIcon()\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\x3c!-- ko if: app.customFieldsHelper.doesFieldTypeHaveOptions(type()) && isExpanded() --\x3e\n\t\t\t\t\t\t\t<div class="w-custom-field__body">\n\t\t\t\t\t\t\t\t\x3c!-- ko if: options && options.choices --\x3e\n\t\t\t\t\t\t\t\t\t<ul class="w-custom-field__options my--medium"\n\t\t\t\t\t\t\t\t\t\tdata-bind="dragulaExtra: {\n\t\t\t\t\t\t\t\t\t\t\tdata: options.choices,\n\t\t\t\t\t\t\t\t\t\t\tmoves: $component.DragulaMoves,\n\t\t\t\t\t\t\t\t\t\t\tinvalid: $component.DragulaInvalid,\n\t\t\t\t\t\t\t\t\t\t\tafterDrop: $component.OnDrop\n\t\t\t\t\t\t\t\t\t}">\n\t\t\t\t\t\t\t\t\t\t<li class="w-custom-field__option h-show-hover--parent list-unstyled flex">\n\t\t\t\t\t\t\t\t\t\t\t<span class="w-custom-field__drag-handle h-show-hover--child mr--medium">\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname: \'draghandle-tw-solid\',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass: \'w-custom-field__drag-icon\',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsize: \'1x\'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- ko if: color != null --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="w-custom-field__color mr--medium" data-bind="style:{backgroundColor: color}"></span>\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t\t\t\t\t{{value}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t</div>\n\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\x3c!-- ko if: data.hasMoreRecords --\x3e\n\t\t\t\t<div class="block width--100 mb--medium">\n\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\tname: \'widget-loadMore\',\n\t\t\t\t\t\t\tparams:{\n\t\t\t\t\t\t\t\tdataLoader: data\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t</div>\n\t\t\t\x3c!-- /ko --\x3e\n\t\t</div>\n\t\x3c!-- /ko --\x3e\n</div>'},3097:function(t,n){t.exports='<div class="w-link-custom-fields {{widgetClass}}">\n\t\x3c!-- ko if: shouldShowBlankSlate --\x3e\n\t\t<div class="w-link-custom-fields__blank-slate">\n\t\t\t\x3c!--ko component: {\n\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\tparams: {\n\t\t\t\t\t\tname: \'custom-field\',\n\t\t\t\t\t\tclass: \'w-link-custom-fields__blank-slate--icon\'\n\t\t\t\t\t}\n\t\t\t\t} --\x3e\n\t\t\t\x3c!-- /ko --\x3e\n\n\t\t\t<div class="mt--medium">\n\t\t\t\t{{blankSlateMessage}}\n\t\t\t</div>\n\n\t\t\t\x3c!-- ko if: allCustomFields().length > 0 --\x3e\n\t\t\t\t<button type="button" class="btn btn-success mt--xlarge" data-bind="click: OnClickAddCustomFields">\n\t\t\t\t\t{{app.tl(\'Add Custom Field\')}}\n\t\t\t\t</button>\n\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\x3c!-- ko if: allCustomFields().length == 0 --\x3e\n\t\t\t\t\x3c!-- ko if: app.loggedInUser.permissions.canManageCustomFields --\x3e\n\t\t\t\t\t\x3c!-- ko if: $component.entity == \'task\' --\x3e\n\t\t\t\t\t\t<button type="button" class="btn btn-success mt--xlarge" data-bind="click: OnClickCreateCustomField">\n\t\t\t\t\t\t\t{{app.tl(\'Go create a task custom field\')}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\x3c!-- /ko--\x3e\n\t\t\t\t\t\x3c!-- ko if: $component.entity == \'project\' --\x3e\n\t\t\t\t\t\t<button type="button" class="btn btn-success mt--xlarge" data-bind="click: OnClickCreateCustomField">\n\t\t\t\t\t\t\t{{app.tl(\'Go create a project custom field\')}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\x3c!-- /ko--\x3e\n\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\x3c!-- ko ifnot: app.loggedInUser.permissions.canManageCustomFields --\x3e\n\t\t\t\t\t<div class="mt--medium">\n\t\t\t\t\t\t{{app.tl(\'Ask an administrator in [_s] for permission to manage custom fields\', app.account.companyname())}}\n\t\t\t\t\t</div>\n\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\x3c!-- /ko --\x3e\n\t\t</div>\n\t\x3c!-- /ko --\x3e\n\t\x3c!-- ko if: shouldShowContent --\x3e\n\t\t<div class="w-link-custom-fields__content">\n\t\t\t\x3c!-- ko if: selectedCustomFields().length --\x3e\n\t\t\t\t\x3c!-- ko foreach: selectedCustomFields --\x3e\n\t\t\t\t\t\x3c!-- ko template: { name: \'custom-fields-template\', data: $data } --\x3e\x3c!-- /ko --\x3e\n\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\x3c!-- ko if: availableCustomFields().length > 0 --\x3e\n\t\t\t\t<div class="mb--large" data-bind="css: {\'w-link-custom-fields--border\': selectedCustomFields().length > 0}">\n\t\t\t\t\t<select data-bind="\n\t\t\t\t\t\tselect2: {\n\t\t\t\t\t\t\tdata: availableCustomFields,\n\t\t\t\t\t\t\tvalue: selectedCustomFieldId,\n\t\t\t\t\t\t\tplaceholder: app.tl(\'Select Field\')\n\t\t\t\t\t\t}"\n\t\t\t\t\t\tclass="select2"\n\t\t\t\t\t\tstyle="width:40%;">\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\x3c!-- /ko --\x3e\n\t\t</div>\n\t\x3c!-- /ko --\x3e\n</div>\n\n<script id="custom-fields-template" type="text/html">\n\t<div class="w-link-custom-fields__field h-show-hover--parent" data-bind="css: {\'w-link-custom-fields--border\': $index() > 0 }">\n\t\t<div class="w-link-custom-fields__field-header">\n\t\t\t<div class="flex">\n\t\t\t\t<label class="h-text-overflow pb--small mb--none" title="{{name}}">\n                    {{ name }}\n                </label>\n\t\t\t\t\x3c!-- ko if: $component.isFieldInvalid(customFieldId()) --\x3e\n\t\t\t\t\t<span class="ml--small tipped-hide" data-tipped="{{ app.tl(\'The selected value for this field is no longer a valid option\')}}">\n\t\t\t\t\t\t\x3c!--ko component: {\n\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\tname: \'info-circle-regular\',\n\t\t\t\t\t\t\t\t\tcolor: \'#ff6461\'\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t</span>\n\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t<a href="javascript;" class="ml--auto h-show-hover--child" data-bind="click: $component.OnClickDeleteCustomField">\n\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\tname: \'close-solid\',\n\t\t\t\t\t\t\t\tcolor: \'#ccc\'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<p class="font-size--small mb--medium h-word-break">{{ description }}</p>\n\t\t</div>\n\t\t<div class="w-link-custom-fields__field-content mb--large">\n\t\t\t\x3c!-- ko if: type() === \'text-short\' --\x3e\n\t\t\t\t<div class="w-input-with-icons w-input-with-icons--right w-link-custom-fields__input">\n\t\t\t\t\t<input class="form-control w-link-custom-fields__text-input w-input-with-icons__input" type="text" title="{{value}}" maxlength="255" placeholder="{{app.tl(\'Enter some text\')}}" data-bind="textInput: value, attr: {id: \'customField_\'+customFieldId()}"/>\n\t\t\t\t\t<span class="w-input-with-icons__icon w-input-with-icons__icon--right w-link-custom-fields__icon" data-bind="click: $component.OnClickClear, css: { \'is-hidden\': $component.isCustomFieldEmpty(value) }">\n\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\tname: \'close-solid\',\n\t\t\t\t\t\t\t\t\tcolor: \'#ccc\'\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\x3c!-- ko if: type() === \'number-integer\' --\x3e\n\t\t\t\t<div class="w-input-with-icons w-input-with-icons--right w-link-custom-fields__input">\n\t\t\t\t\t<input class="form-control w-link-custom-fields__number-input w-input-with-icons__input" type="number" step="1" min="-99999999" max="999999999" placeholder="{{app.tl(\'Enter a number\')}}" data-bind="textInput: value, attr: {id: \'customField_\'+customFieldId()}, event: {keydown: $component.OnKeyDown, keypress: $component.checkNumberSize}"/>\n\t\t\t\t\t<span class="w-input-with-icons__icon w-input-with-icons__icon--right w-link-custom-fields__icon" data-bind="click: $component.OnClickClear, css: { \'is-hidden\': $component.isCustomFieldEmpty(value) }">\n\t\t\t\t\t\t\x3c!-- ko component: {\n\t\t\t\t\t\t\t\tname: \'ui-common-icon\',\n\t\t\t\t\t\t\t\tparams: {\n\t\t\t\t\t\t\t\t\tname: \'close-solid\',\n\t\t\t\t\t\t\t\t\tcolor: \'#ccc\'\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t} --\x3e\n\t\t\t\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\x3c!-- /ko --\x3e\n\t\t\t\x3c!-- ko if: type() === \'dropdown\' --\x3e\n\t\t\t\t<select data-bind="\n\t\t\t\t\tattr: {id: \'customField_\'+customFieldId()},\n\t\t\t\t\tselect2: {\n\t\t\t\t\t\tvalue: value,\n\t\t\t\t\t\tdata: $component.getDropdownFieldOptions(options),\n\t\t\t\t\t\ttemplateResult: app.select2CustomFieldTemplateResult,\n\t\t\t\t\t\ttemplateSelection: app.select2CustomFieldTemplateResult,\n\t\t\t\t\t\tplaceholder: $component.getDropdownPlaceholder(customFieldId),\n\t\t\t\t\t\tallowClear: true\n\t\t\t\t\t}"\n\t\t\t\t\tclass="select2"\n\t\t\t\t\tstyle="width:40%;">\n\t\t\t\t</select>\n\t\t\t\x3c!-- /ko --\x3e\n\t\t</div>\n\t</div>\n<\/script>\n'},3611:function(t,n,e){var i,s,o=function(t,n){return function(){return t.apply(n,arguments)}},l=[].indexOf||function(t){for(var n=0,e=this.length;n<e;n++)if(n in this&&this[n]===t)return n;return-1};i=[e(2325),e(2324),e(1364)],void 0!==(s=function(t,n,e){var i;return i=function(){function t(t){var i,s;null==t&&(t={}),this.dispose=o(this.dispose,this),this.DragulaInvalid=o(this.DragulaInvalid,this),this.DragulaMoves=o(this.DragulaMoves,this),this.canSubmitForm=o(this.canSubmitForm,this),this.prepareFieldOptions=o(this.prepareFieldOptions,this),this.OnKeyDown=o(this.OnKeyDown,this),this.OnClickAddOption=o(this.OnClickAddOption,this),this.OnClickDeleteOption=o(this.OnClickDeleteOption,this),this.OnDrop=o(this.OnDrop,this),this.OnSubmit=o(this.OnSubmit,this),this.modalRef=t.modalRef,this.args=this.modalRef.args,this.colorsTippedContent=n,this.holderId="addOrEditCustomField",this.mode=null!=(i=this.args.mode)?i:"add",this.subscriptions=[],"add"===this.mode?(this.field=new e,this.field.entity(null!=(s=this.args.entity)?s:"project")):this.field=this.args.field.Clone(),this.modalTitle="add"===this.mode?app.tl("Add Custom Field"):app.tl("Edit Custom Field"),this.tabs=[{name:app.tl("Details"),code:"details",enabled:!0},{name:app.tl("Type"),code:"type",enabled:!0},{name:app.tl("Privacy"),code:"privacy",enabled:!1}],this.tabs.selCode=ko.observable(this.args.tab||"details"),this.fieldTypeOptions=Object.keys(app.consts.CUSTOM_FIELD_TYPES).map(function(t){return{id:t,text:app.tl(app.consts.CUSTOM_FIELD_TYPES[t])}}),this.subscriptions.push(this.canSubmit=ko.pureComputed(this.canSubmitForm)),this.subscriptions.push(this.buttonText=ko.pureComputed(function(t){return function(){return t.field.isUpdating()?app.tl("Saving Custom Field"):app.tl("Save Custom Field")}}(this))),this.subscriptions.push(this.shouldShowFieldOptions=ko.pureComputed(function(t){return function(){return app.customFieldsHelper.doesFieldTypeHaveOptions(t.field.type())}}(this))),this.subscriptions.push(this.availableColors=ko.pureComputed(function(t){return function(){var n;return n=t.field.options.choices().map(function(t){return t.color().replace("#","")}),n.length>=app.consts.CATEGORYCOLORS.length?app.consts.CATEGORYCOLORS:app.consts.CATEGORYCOLORS.filter(function(t){return l.call(n,t)<0})}}(this))),this.subscriptions.push(this.field.type.subscribe(this.prepareFieldOptions))}return t.prototype.OnShow=function(){var t;t=function(t){return function(n){t.args.onCloseCallBack&&t.args.onCloseCallBack(n),app.modals.remove(t.modalRef)}}(this),Lightbox.showBoxByID(this.holderId,450,600,!0,{clickOverlayToClose:!1,onCloseCallBack:t}),app.FocusFirstInput(this.holderId)},t.prototype.OnSubmit=function(){if(this.canSubmit())return this.field.Save().then(function(){return Lightbox.close()}).catch(function(t){var n,e;return null!=t.errorType&&"validation"===t.errorType?app.flash.Error(t.message.join("<br>")):null!=t.status&&(403===t.status||400===t.status)&&(null!=(n=t.responseJSON)&&null!=(e=n.errors)?e.length:void 0)?app.flash.Error(t.responseJSON.errors[0].detail):void 0})},t.prototype.OnDrop=function(t){this.field.options.choices(t.targetItems())},t.prototype.OnSelectOptionColor=function(t,n){return t.color("#"+n),Tipped.hideAll()},t.prototype.OnClickDeleteOption=function(t){var n;if(-1!==(n=app.utility.FindIndexByKeyValue(this.field.options.choices(),"uid",t.uid())))return this.field.options.choices.splice(n,1)},t.prototype.OnClickAddOption=function(){return this.field.AddDropdownOption({color:this.getRandomColor()}),app.NextTick(function(t){return function(){return t.focusFirstEmptyOption()}}(this)),!1},t.prototype.OnKeyDown=function(t,n){return 13===n.keyCode&&this.OnClickAddOption(),!0},t.prototype.prepareFieldOptions=function(t){var n,e,i;if("dropdown"===t&&0===this.field.options.choices().length){for(i=[0,1],n=0,e=i.length;n<e;n++)i[n],this.field.AddDropdownOption({color:this.getRandomColor()});return app.NextTick(function(t){return function(){return t.focusFirstEmptyOption()}}(this))}},t.prototype.focusFirstEmptyOption=function(){var t,n,e,i;for(i=document.getElementsByClassName("m-add-edit-custom-field__option-text"),n=0,e=i.length;n<e;n++)if(t=i[n],""===t.value.trim())return void t.focus()},t.prototype.canSubmitForm=function(){return!this.field.isUpdating()&&(!!this.field.name().trim().length&&(null!=this.field.type()&&(!this.shouldShowFieldOptions()||0!==this.field.options.choices().length)))},t.prototype.DragulaMoves=function(t,n,e){return t.parentNode.children.length>1&&e.classList.contains("m-add-edit-custom-field__drag-handle")},t.prototype.DragulaInvalid=function(){return!1},t.prototype.getRandomColor=function(){var t,n;return t=this.availableColors(),0===t.length?"":(n=Math.floor(Math.random()*t.length),"#"+t[n])},t.prototype.dispose=function(){this.subscriptions.forEach(function(t){return t.dispose()})},t}(),{viewModel:i,template:t}}.apply(n,i))&&(t.exports=s)},3889:function(t,n,e){var i,s,o=function(t,n){return function(){return t.apply(n,arguments)}},l=[].indexOf||function(t){for(var n=0,e=this.length;n<e;n++)if(n in this&&this[n]===t)return n;return-1};i=[e(164),e(2660),e(2659),e(1116),e(1364)],void 0!==(s=function(t,n,e,i,s){var a,d;return d=["project","task"],a=function(){function n(n){this.dispose=o(this.dispose,this),this.DragulaInvalid=o(this.DragulaInvalid,this),this.DragulaMoves=o(this.DragulaMoves,this),this.OnDrop=o(this.OnDrop,this),this.OnNotifyTWEvent=o(this.OnNotifyTWEvent,this);var a,c;this.subscriptions=[],this.entity=t.unwrap(null!=(a=n.entity)?a:"project"),console.assert((c=this.entity,l.call(d,c)>=0),"invalid entity type '"+this.entity+"'"),this.widgetClass="s-custom-fields-list--"+this.entity+"s",this.fieldTypesToShow=Object.keys(app.consts.CUSTOM_FIELD_TYPES),this.optionsTippedContent=e,this.data=new i(app.prefixApi("customfields.json?entities="+this.entity,"API_PREFIX_V3","API_PREFIX_V3"),{ItemClass:s,loadNow:!0}),this.subscriptions.push(this.entityPlural=t.pureComputed(function(t){return function(){return t.entity+"s"}}(this))),this.subscriptions.push(this.headingText=t.pureComputed(function(t){return function(){return app.tl(app.utility.Capitalize(t.entityPlural()))}}(this))),this.subscriptions.push(this.blankSlateHeading=t.pureComputed(function(t){return function(){return app.tl(app.utility.Capitalize(t.entity)+" Custom Fields")}}(this))),this.subscriptions.push(this.blankSlateText=t.pureComputed(function(t){return function(){return"tasks"===t.entityPlural()?app.tl("Custom fields for tasks let you add additional data to tasks. Track task-specific information that matches your company's workflows."):"projects"===t.entityPlural()?app.tl("Custom fields for projects let you add additional data to your projects. Track project-specific information, and later filter your projects by the values of these custom fields"):app.tl("Custom fields let you add additional data to your "+t.entityPlural()+". You can select from multiple field types and create a field that's important to your workflow, team and company.")}}(this))),this.subscriptions.push(this.blankSlateButton=t.pureComputed(function(t){return function(){return"tasks"===t.entityPlural()?app.tl("Create a Task Custom Field"):"projects"===t.entityPlural()?app.tl("Create a Project Custom Field"):app.tl("Create a Custom Field")}}(this))),this.subscriptions.push(app.ko.postbox.subscribe("allTWEvents",this.OnNotifyTWEvent))}return n.prototype.OnNotifyTWEvent=function(t){"customField"===t.itemType&&this.data.Sync({params:{showDeleted:!1}})},n.prototype.OnClickAddCustomField=function(){app.modal.Show("addOrEditCustomField",{entity:this.entity})},n.prototype.OnClickEditCustomField=function(t){app.modal.Show("addOrEditCustomField",{mode:"edit",field:t})},n.prototype.OnClickDeleteCustomField=function(t){t.Delete()},n.prototype.OnDrop=function(t){var n;n=t.targetContext.$data,n.Save({silent:!0})},n.prototype.shouldShowFieldType=function(t){return l.call(this.fieldTypesToShow,t)>=0},n.prototype.toggleField=function(t){return t.isExpanded(!t.isExpanded())},n.prototype.DragulaMoves=function(t,n,e){return t.parentNode.children.length>1&&e.classList.contains("w-custom-field__drag-handle")},n.prototype.DragulaInvalid=function(){return!1},n.prototype.dispose=function(){this.subscriptions.forEach(function(t){return t.dispose()})},n}(),{viewModel:a,template:n}}.apply(n,i))&&(t.exports=s)},4245:function(t,n,e){var i,s,o=function(t,n){return function(){return t.apply(n,arguments)}},l=[].indexOf||function(t){for(var n=0,e=this.length;n<e;n++)if(n in this&&this[n]===t)return n;return-1};i=[e(164),e(3097)],void 0!==(s=function(t,n){var e;return e=function(){function n(n){this.dispose=o(this.dispose,this),this.getDropdownFieldOptions=o(this.getDropdownFieldOptions,this),this.initializeAllCustomFields=o(this.initializeAllCustomFields,this),this.isCustomFieldEmpty=o(this.isCustomFieldEmpty,this),this.isFieldInvalid=o(this.isFieldInvalid,this),this.OnClickClear=o(this.OnClickClear,this),this.OnKeyDown=o(this.OnKeyDown,this),this.OnChangeSelectedCustomFields=o(this.OnChangeSelectedCustomFields,this),this.OnClickCreateCustomField=o(this.OnClickCreateCustomField,this),this.OnClickDeleteCustomField=o(this.OnClickDeleteCustomField,this),this.OnClickAddCustomFields=o(this.OnClickAddCustomFields,this);var e,i;this.subscriptions=[],this.entity=t.unwrap(null!=(e=n.entity)?e:"project"),this.widgetClass="w-link-custom-fields--"+this.entity+"s",this.isLoading=t.observable(!0),this.allCustomFields=t.observableArray([]),this.selectedCustomFieldId=t.observable(null),this.selectedCustomFields=app.utility.EnsureObservable(n.selectedCustomFields,!0),this.shouldShowCustomFields=t.observable(this.selectedCustomFields().length>0),this.hasInvalidCustomFields=app.utility.EnsureObservable(null!=(i=n.hasInvalidCustomFields)&&i),this.subscriptions.push(this.availableCustomFields=t.computed(function(t){return function(){return t.allCustomFields().filter(function(t){return!t.isSelected()}).map(function(t){return{id:t.id(),text:app.utility.Truncate(t.name(),45)}})}}(this))),this.subscriptions.push(this.invalidCustomFields=t.pureComputed(function(t){return function(){var n,e,i,s,o,a,d,c;if(i=[],t.isLoading())return i;for(o=t.selectedCustomFields(),e=0,s=o.length;e<s;e++)n=o[e],"dropdown"===n.type()&&(c=null!=(a=n.options)&&"function"==typeof a.choices?a.choices().map(function(t){return t.value()}):void 0,null!=n.value()&&(d=n.value(),l.call(c,d)<0)&&i.push(n.customFieldId()));return i}}(this))),this.subscriptions.push(this.shouldShowBlankSlate=t.pureComputed(function(t){return function(){return!t.isLoading()&&(0===t.allCustomFields().length||!t.shouldShowCustomFields())}}(this))),this.subscriptions.push(this.shouldShowContent=t.pureComputed(function(t){return function(){return!t.isLoading()&&!t.shouldShowBlankSlate()}}(this))),this.subscriptions.push(this.blankSlateMessage=t.pureComputed(function(t){return function(){if(0===t.allCustomFields().length)return app.tl("You currently have no custom fields available");switch(t.entity){case"project":if(t.allCustomFields().length>1)return app.tl("You have [_s] custom fields available for this project",t.allCustomFields().length);if(1===t.allCustomFields().length)return app.tl("You have [_s] custom field available for this project",1);break;case"task":if(t.allCustomFields().length>1)return app.tl("You have [_s] custom fields available for this task",t.allCustomFields().length);if(1===t.allCustomFields().length)return app.tl("You have [_s] custom field available for this task",1)}}}(this))),this.subscriptions.push(this.customFieldDropdownPlaceholder=t.pureComputed(function(t){return function(){return 0===t.selectedCustomFields().length?app.tl("Select a Custom Field"):app.tl("Select another Custom Field")}}(this))),this.subscriptions.push(this.selectedCustomFieldId.subscribe(function(t){return function(n){var e;null!=(e=t.allCustomFields().find(function(t){return~~t.id()==~~n}))&&(e.isSelected(!0),t.selectedCustomFields.push(e))}}(this))),this.subscriptions.push(this.selectedCustomFields.subscribe(this.OnChangeSelectedCustomFields)),this.subscriptions.push(this.invalidCustomFields.subscribe(function(t){return function(n){return t.hasInvalidCustomFields(n.length>0)}}(this))),this.initializeAllCustomFields()}return n.prototype.OnClickAddCustomFields=function(){this.shouldShowCustomFields(!0)},n.prototype.OnClickDeleteCustomField=function(t){var n;this.selectedCustomFieldId(null),-1!==(n=app.utility.FindIndexByKeyValue(this.selectedCustomFields(),"customFieldId",t.customFieldId()))&&(t.value(null),t.isSelected(!1),this.selectedCustomFields.splice(n,1))},n.prototype.OnClickCreateCustomField=function(){app.GoTo("settings/customfields")},n.prototype.OnChangeSelectedCustomFields=function(){this.shouldShowCustomFields(this.selectedCustomFields().length>0)},n.prototype.OnKeyDown=function(t,n){return 69!==n.keyCode},n.prototype.OnClickClear=function(t){t.value(null)},n.prototype.getDropdownPlaceholder=function(t){return this.isFieldInvalid(t())?app.tl("Please choose a valid option")+app.localizationPreferences().ellipsis:app.tl("Choose an option")+app.localizationPreferences().ellipsis},n.prototype.isFieldInvalid=function(t){return l.call(this.invalidCustomFields(),t)>=0},n.prototype.isCustomFieldEmpty=function(t){return!t()||t().length<=0},n.prototype.initializeAllCustomFields=function(){var n;return n=app.prefixApi("customfields.json?entities="+this.entity,"API_PREFIX_V3","API_PREFIX_V3"),app.api.get(n).then(function(n){return function(e){var i;return i=t.mapping.fromJS(e.response.customfields)(),n.mergeSelectedIntoAll(n.selectedCustomFields(),i),n.allCustomFields(i),n.selectedCustomFields(n.allCustomFields().filter(function(t){return t.isSelected()})),n.isLoading(!1)}}(this))},n.prototype.mergeSelectedIntoAll=function(n,e){var i,s,o,l,a,d;for(s=0,o=e.length;s<o;s++)i=e[s],d=n.find(function(n){return t.unwrap(n.customFieldId)===i.id()}),i.customFieldId=i.id,null==i.value&&(i.value=t.observable(null)),i.value(t.unwrap(null!=(l=null!=d?d.value:void 0)?l:null)),null==i.initialValue&&(i.initialValue=t.observable(null)),i.initialValue(t.unwrap(null!=(a=null!=d?d.value:void 0)?a:null)),null==i.isSelected&&(i.isSelected=t.observable(null)),i.isSelected(null!=d)},n.prototype.checkNumberSize=function(t,n){var e,i;return e=999999999,i=-99999999,!(t.value()>e||t.value()<i)},n.prototype.getDropdownFieldOptions=function(n){var e;return e=t.mapping.toJS(n.choices),e.map(function(t){return{id:t.value,text:t.value,color:t.color}})},n.prototype.dispose=function(){this.subscriptions.forEach(function(t){return t.dispose()})},n}(),{viewModel:e,template:n}}.apply(n,i))&&(t.exports=s)}});
//# sourceMappingURL=customFields.98e0e0542a691117d9f2.js.map