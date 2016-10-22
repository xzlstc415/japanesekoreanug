// (function() {
//
//   var Comment = function($q) {
//     var vm = this;
//
//     var comments = [
//       {
//         id: 1,
//         content: "If we're changing our \"foundation_and_overrides.scss\" file, what happens if we update zurb foundation? Will this file be overwritten?",
//         user: {
//           id: 1
//         }
//       },
//       {id: 2, name: "wave"},
//       {id: 3, name: "warding"},
//       {id: 4, name: "bottom"}
//     ];
//
//     var query = function(params) {
//       var deferred = $q.defer();
//
//       deferred.resolve({data: tags});
//
//       return deferred.promise;
//     };
//
//     var get = function(id) {
//       var deferred = $q.defer();
//
//       var tag = _.find(tags, function(tag) {
//         return tag.id == id;
//       });
//
//       if (!!tag) {
//         deferred.resolve({data: tag});
//       } else {
//         deferred.resolve({errors: ["can't find tag"]});
//       }
//
//       return deferred.promise;
//     };
//
//     vm.query = query;
//     vm.get = get;
//
//     return vm;
//   };
//
//   Comment.$inject = ['$q'];
//
//   angular.module('yujihomo')
//     .service('Comment', Comment);
// })();
