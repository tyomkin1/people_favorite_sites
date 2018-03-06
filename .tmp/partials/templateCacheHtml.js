angular.module("inspinia").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/common/content.html","<div id=\"wrapper\"><div id=\"page-wrapper\" class=\"gray-bg\"><div class=\"\" ng-include=\"\'app/components/common/topnavbar.html\'\"></div><div ui-view=\"\"></div><div ng-include=\"\'app/components/common/footer.html\'\"></div></div></div>");
$templateCache.put("app/components/common/footer.html","<div class=\"row footer\"></div>");
$templateCache.put("app/components/common/ibox_tools.html","<div class=\"ibox-tools\" uib-dropdown=\"\"><a ng-click=\"showhide()\"><i class=\"fa fa-chevron-down\"></i></a></div>");
$templateCache.put("app/components/common/ibox_up_tools.html","<div class=\"ibox-tools\" uib-dropdown=\"\"><a ng-click=\"showhide()\"><i class=\"fa fa-chevron-up\"></i></a></div>");
$templateCache.put("app/components/common/navigation.html","<nav class=\"navbar-default navbar-static-side white-bg\" role=\"navigation\"><div class=\"sidebar-collapse\"><ul side-navigation=\"\" class=\"nav metismenu\" id=\"side-menu\" ng-class=\"{\'rtl-nav\':settings.rtl_ltr}\"><li class=\"nav-header\"><div class=\"profile-element\" uib-dropdown=\"\"><div><span class=\"clear\"><span class=\"block m-t-xs\"></span> <span class=\"text-muted text-xs block\">{{vm.user.name}}</span></span></div></div><div class=\"logo-element\"><img src=\"./assets/images/favicon_32x32.png\" alt=\"\"></div></li><li ui-sref-active=\"active\"><a ui-sref=\"index.stock-branch-bind\"><i class=\"fa fa-dashboard\"></i> <span class=\"nav-label\" translate=\"\">Stock Branch Binds</span></a></li></ul></div></nav>");
$templateCache.put("app/components/common/topnavbar.html","<div class=\"row border-bottom\" style=\"margin-left:0px;margin-right:0px;\"><nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\"><ul class=\"nav navbar-top-links navbar-left pull-left login-label hidden-xs\"></ul><ul class=\"nav navbar-top-links navbar-left pull-left login-label-min visible-xs hidden-xxs\"></ul><ul class=\"nav navbar-top-links navbar-right pull-right\"><li><a class=\"btn bnt-site\" ng-click=\"vm.logout()\"><i class=\"fa fa-sign-out\"></i>Logout</a></li></ul></nav></div>");
$templateCache.put("app/components/login/login.html","<div class=\"admin-login\"><div class=\"row loginColumns animated fadeIn\"><div class=\"col-xs-12 text-center\"><div class=\"ibox-content\"><img src=\"./assets/images/logo.webp\" alt=\"\" class=\"logo_img\"><form class=\"\" name=\"vm.form\" novalidate=\"\" autocomplete=\"off\" ng-submit=\"vm.login()\"><div class=\"form-group\"><input id=\"username\" type=\"text\" class=\"form-control\" name=\"username\" ng-model=\"vm.user.username\" required=\"\" placeholder=\"Login\" autocomplete=\"off\"></div><div class=\"form-group\"><input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" ng-model=\"vm.user.password\" required=\"\" ng-minlength=\"5\" ng-maxlength=\"15\" placeholder=\"Password\" autocomplete=\"off\"><div class=\"error-block\" ng-messages=\"vm.form.password.$error\"><div ng-message=\"minlength || maxlength\">Complete password length must be between 5-15 characters.</div></div></div><button type=\"submit\" class=\"btn btn-primary block full-width m-b\" ng-disabled=\"vm.disableBtn\">Login</button></form></div></div></div></div>");
$templateCache.put("app/components/work-list/work-list.html","<div class=\"wrapper wrapper-content work-list animated fadeInRight\"><div class=\"row\"><div class=\"col-lg-12\" ng-class=\"{\'col-lg-7\': ((vm.isShowDetails))}\"><div class=\"ibox\"><div class=\"ibox-title text-right\"><a class=\"btn bnt-site\" ng-click=\"vm.isShowDetails = true; vm.isEditable = true; vm.add()\">Add</a></div><div class=\"ibox-content\"><div class=\"table-responsive table-main\"><table class=\"table table-bordered\"><thead><tr><th>Username</th><th>Photo</th><th>Phone</th><th>Address</th><th>Email</th></tr></thead><tbody ng-class=\"{\'odd\':$odd}\" class=\"\" ng-repeat=\"user in vm.users track by user.id\"><tr ng-click=\"vm.showDetails(user); vm.isShowDetails = true; vm.isEditable = false;\" ng-class=\"{\'active-user\':(vm.users[$index].id === vm.user.id)}\"><td ng-bind=\"user.username\"></td><td><img ng-if=\"user.path_avatar || user.avatar\" ng-src=\"{{user.path_avatar || user.avatar}}\" class=\"avatar\" alt=\"avatar\"> <img ng-if=\"!user.path_avatar && !user.avatar\" class=\"avatar\" ng-src=\"./assets/images/avatar-default.png\" alt=\"avatar default\"></td><td ng-bind=\"user.phone\"></td><td><span ng-bind=\"(user.address.city) + \', \' + (user.address.street) + \', \' + (user.address.suite)\"></span></td><td ng-bind=\"user.email\"></td></tr></tbody></table></div></div></div></div><div ng-if=\"vm.isShowDetails\" class=\"col-lg-5\"><div class=\"show-details\"><div class=\"ibox\"><div class=\"ibox-title\"><div class=\"ibox-tools dropdown\"><a ng-click=\"vm.isShowDetails = false; vm.closeUserDetails()\"><i class=\"fa fa-times\"></i></a></div></div><div class=\"ibox-content\"><div class=\"tab-content\"><div id=\"contact-1\" class=\"tab-pane active\"><div class=\"row\"><div class=\"col-lg-12\"><h2 class=\"text-center\"><div class=\"form-group group\"><h2 ng-if=\"!vm.isEditable\" class=\"form-control-static-title\" ng-bind=\"vm.user.username || \'-\'\"></h2><input ng-if=\"vm.isEditable\" type=\"text\" ng-model=\"vm.user.username\" class=\"form-control\" placeholder=\"Username\"> <span class=\"bar\"></span></div></h2><div class=\"wrapper-user-avatar\" ng-if=\"!vm.isEditable\"><img ng-if=\"vm.user.path_avatar || vm.user.avatar\" ng-src=\"{{vm.user.path_avatar || vm.user.avatar}}\" class=\"avatar-user\" alt=\"avatar\"> <img ng-if=\"!vm.user.avatar\" class=\"avatar-user\" ng-src=\"./assets/images/avatar-default.png\" alt=\"avatar default\"></div><div ng-if=\"vm.isEditable\" class=\"relative cursor-pointer wrapper_logo wrapper-user-avatar\"><div class=\"logo cursor-pointer\" ngf-select=\"vm.uploadPicture($files, $event, \'updateImage\', \'avatar\')\" accept=\"image/*\" ng-disabled=\"vm.btnDisable\" ngf-validate=\"{pattern: \'.png,.gif,.jpg,.jpeg\'}\"><img ng-if=\"vm.user.path_avatar || vm.user.avatar\" class=\"avatar-user\" ng-src=\"{{vm.user.path_avatar || vm.user.avatar}}\" alt=\"\"> <img ng-if=\"!vm.user.path_avatar && !vm.user.avatar\" class=\"avatar-user\" ng-src=\"./assets/images/avatar-default.png\" alt=\"\"></div><span class=\"delete-avatar glyphicon glyphicon-remove\" title=\"Delete avatar\" ng-hide=\"!vm.user.avatar || !vm.user.path_avatar || vm.user.avatar == \'null\'\" ng-click=\"vm.deleteAva()\"></span></div><div class=\"row\"><div class=\"col-sm-6 col-xs-12\"><div class=\"form-group group\"><label>Phone</label><p ng-if=\"!vm.isEditable\" class=\"form-control-static\" ng-bind=\"vm.user.phone || \'-\'\"></p><input ng-if=\"vm.isEditable\" type=\"text\" ng-model=\"vm.user.phone\" class=\"form-control\" placeholder=\"Phone\"> <span class=\"bar\"></span></div></div><div class=\"col-sm-6 col-xs-12\"><div class=\"form-group group\"><label>City</label><p ng-if=\"!vm.isEditable\" class=\"form-control-static\" ng-bind=\"vm.user.address.city || \'-\'\"></p><input ng-if=\"vm.isEditable\" type=\"text\" ng-model=\"vm.user.address.city\" class=\"form-control\" placeholder=\"City\"> <span class=\"bar\"></span></div></div></div><div class=\"row\"><div class=\"col-sm-6 col-xs-12\"><div class=\"form-group group\"><label>Street</label><p ng-if=\"!vm.isEditable\" class=\"form-control-static\" ng-bind=\"vm.user.address.street || \'-\'\"></p><input ng-if=\"vm.isEditable\" type=\"text\" ng-model=\"vm.user.address.street\" class=\"form-control\" placeholder=\"Street\"> <span class=\"bar\"></span></div></div><div class=\"col-sm-6 col-xs-12\"><div class=\"form-group group\"><label>Suite</label><p ng-if=\"!vm.isEditable\" class=\"form-control-static\" ng-bind=\"vm.user.address.suite || \'-\'\"></p><input ng-if=\"vm.isEditable\" type=\"text\" ng-model=\"vm.user.address.suite\" class=\"form-control\" placeholder=\"Suite\"> <span class=\"bar\"></span></div></div></div><div class=\"row\"><div class=\"col-sm-6 col-xs-12\"><div class=\"form-group group\"><label>Email</label><p ng-if=\"!vm.isEditable\" class=\"form-control-static\" ng-bind=\"vm.user.email || \'-\'\"></p><input ng-if=\"vm.isEditable\" type=\"text\" ng-model=\"vm.user.email\" class=\"form-control\" placeholder=\"Email\"> <span class=\"bar\"></span></div></div></div></div></div><div><div class=\"btn-wrapper\"><button class=\"btn bnt-site\" ng-disabled=\"vm.isEditable\" ng-click=\"vm.isEditable = true;\">Edit</button></div><div class=\"btn-wrapper\"><button ng-disabled=\"!vm.isEditable\" class=\"btn bnt-site\" ng-click=\"vm.save(vm.user)\">Save</button></div><div class=\"btn-wrapper\"><button class=\"btn bnt-site delete\" ng-disabled=\"!vm.user.id\" ng-click=\"vm.remove(vm.user); vm.isEditable = false;\">Delete</button></div></div></div></div></div></div></div></div></div></div>");}]);