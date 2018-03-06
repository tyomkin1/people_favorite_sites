(function() {
  "use strict";
  function WorkListController(getUsers, $localForage, $window) {
    var vm = this;
    vm.users = getUsers;
    vm.isShowDetails = false;
    vm.user = {};

    vm.users.forEach(function(item) {
      if ($localForage.length() !== vm.users.length) {
        $localForage.setItem(item.id, item).then(function() {});
      }
      if (item.avatar) {
        item["path_avatar"] = $window.URL.createObjectURL(item.avatar);
      }
    });

    vm.showDetails = showDetails;
    vm.showDetailsFavorites = showDetailsFavorites;
    vm.closeUserDetails = closeUserDetails;
    vm.add = add;
    vm.save = save;
    vm.uploadPicture = uploadPicture;
    vm.remove = remove;
    vm.deleteAva = deleteAva;

    function showDetails(user) {
      vm.user = jQuery.extend(true, {}, user);
    }

    function showDetailsFavorites(user) {
      vm.user = jQuery.extend(true, {}, user);
    }

    function closeUserDetails() {
      vm.user = {};
    }

    function add() {
      vm.user = {};
    }

    function save(user) {
      if (!user.id) {
        getUserNewId().then(function(key) {
          saveInner(user, key);
        });
      } else {
        saveInner(user);
      }
    }

    function saveInner(user, key) {
      if (key) {
        user.id = key;
      }
      $localForage.setItem(user.id, user).then(function() {
        $localForage.getItem(user.id).then(function(data) {
          forEachItem(data, key);
        });
      });
    }

    function forEachItem(user, key) {
      var i,
        length = vm.users.length;
      if (key) {
        vm.users[length] = user;
      } else {
        for (i = 0; i < length; i++) {
          if (+vm.users[i].id === +user.id) {
            vm.users[i] = user;
            return;
          }
        }
      }
      vm.isEditable = false;
    }

    function uploadPicture(files, event, end_url, name) {
      var path = "path_" + name;
      if (event) {
        if (event.type === "change") {
          if (files) {
            if (files.length > 0) {
              vm.user[name] = files[0];
              vm.user[path] = $window.URL.createObjectURL(files[0]);
            }
          }
        }
      }
    }

    function remove(user) {
      $localForage.removeItem(user.id).then(function() {
        $localForage.getItem(user.id).then(function() {
          removeforEachItem(user);
        });
      });
    }

    function removeforEachItem(user) {
      var i,
        length = vm.users.length;
      for (i = 0; i < length; i++) {
        if (+vm.users[i].id === +user.id) {
          vm.users.splice(i, 1);
          if (length > 1) {
            vm.user = vm.users[i] ? vm.users[i] : vm.users[i - 1];
          } else {
            vm.user = {};
            vm.isShowDetails = false;
          }
          return;
        }
      }
    }

    function getUserNewId() {
      var keys, max;
      return (keys = $localForage.keys().then(function(res) {
        max = Math.max.apply(null, res);
        return max + 1;
      }));
    }

    function deleteAva() {
      delete vm.user.avatar;
      delete vm.user.path_avatar;
    }
  }

  WorkListController.$inject = ["getUsers", "$localForage", "$window"];
  angular
    .module("inspinia")
    .controller("WorkListController", WorkListController);
})();
