/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _populate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate */ "./src/populate.js");



function grabCategory(categoryName) {
  return _populate__WEBPACK_IMPORTED_MODULE_1__["allCategories"].find(function (category) {
    return category.category === categoryName;
  });
}

function grabLists(categoryName, listName) {
  return grabCategory(categoryName).lists.find(function (list) {
    return list.list === listName;
  });
}

function grabTasks(categoryName, listName) {
  return Object.values(grabLists(categoryName, listName).tasks);
}

function displayTasks(categoryName, listName) {
  var contentArea = document.getElementById('content');
  var tasks = grabTasks(categoryName, listName);
  tasks.forEach(function (task) {
    var showTaskDescription = document.createElement('h4');
    showTaskDescription.innerHTML = task.description;
    var showTaskDate = document.createElement('p');
    showTaskDate.innerHTML = task.datetime;
    contentArea.appendChild(showTaskDescription);
    contentArea.appendChild(showTaskDate);
  });
}

function storeLocally(categoryName, category) {
  localStorage.setItem(categoryName, JSON.stringify(category));
}

function addCategory(categoryName) {
  storeLocally(categoryName, Object(_state__WEBPACK_IMPORTED_MODULE_0__["newCategory"])());
}

function addList(categoryName, listName) {
  var category = grabCategory(categoryName);
  category.lists.push(Object(_state__WEBPACK_IMPORTED_MODULE_0__["newList"])(listName));
  storeLocally(categoryName, category);
}

function addTask(categoryName, listName, task) {
  // validate datetime is in the future
  var newDescription = task[0];
  var newDatetime = task[1];
  var newTask = newTask(newDescription, newDatetime);

  if (!grabCategory(categoryName)) {
    addCategory(categoryName);
  }

  if (!grabLists(categoryName, listName)) {
    addList(categoryName, listName);
  }

  var category = grabCategory(categoryName);
  category.lists.tasks.push(newTask);
  storeLocally(categoryName, category);
}

function deleteCategory(categoryName) {
  localStorage.removeItem(categoryName);
}

function deleteList(categoryName, listName) {
  var category = grabCategory(categoryName);
  var listIndex = category.lists.findIndex(function (list) {
    return list.name === listName;
  });

  if (listIndex >= 0) {
    category.lists.splice(listIndex, 1);
  }

  storeLocally(categoryName, category);
}

function deleteTask(categoryName, listName, task) {
  var list = grabLists(categoryName, listName);
  var taskIndex = list.tasks.findIndex(function (x) {
    return x.description === task[0] && x.datetime === task[1];
  });

  if (taskIndex >= 0) {
    list.tasks.splice(taskIndex, 1);
  }

  storeLocally(categoryName, grabCategory(categoryName));
} // Generate forms when 'New' buttons are clicked.


var newCategoryButton = document.getElementById('new-category');
newCategoryButton.addEventListener('click', function () {
  Object(_populate__WEBPACK_IMPORTED_MODULE_1__["newCategoryForm"])();
});
var newListButton = document.getElementById('new-list');
newListButton.addEventListener('click', function () {
  Object(_populate__WEBPACK_IMPORTED_MODULE_1__["newListForm"])();
});
var newTaskButton = document.getElementById('new-task');
newTaskButton.addEventListener('click', function () {
  Object(_populate__WEBPACK_IMPORTED_MODULE_1__["newTaskForm"])();
});

/***/ }),

/***/ "./src/populate.js":
/*!*************************!*\
  !*** ./src/populate.js ***!
  \*************************/
/*! exports provided: newCategoryForm, newListForm, newTaskForm, allCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCategoryForm", function() { return newCategoryForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newListForm", function() { return newListForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTaskForm", function() { return newTaskForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCategories", function() { return allCategories; });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "./src/validate.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_validate__WEBPACK_IMPORTED_MODULE_0__);
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }



function populateForm(fields, submit, validation) {
  var form = document.getElementById('creation-form');

  while (form.firstChild) {
    form.removeChild(form.lastChild);
  }

  ;
  fields.forEach(function (item) {
    var field = document.createElement('span');
    field.setAttribute('class', 'field');
    field.appendChild(item);
    form.appendChild(field);
  });
  var submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('id', 'submit-button');
  submitButton.setAttribute('value', submit);
  submitButton.setAttribute('onsubmit', "return ".concat(validation));
  form.appendChild(submitButton);
}

function allCategories() {
  var categories = [];
  var names = Object.keys(localStorage);
  var i = names.length;

  while (_readOnlyError("i"), i--) {
    categories.push(JSON.parse(localStorage.getItem(names[i])));
  }

  return categories;
}

function newCategoryForm() {
  var categoryName = document.createElement('input');
  categoryName.setAttribute('type', 'text');
  categoryName.setAttribute('id', 'category-name-field');
  categoryName.setAttribute('placeholder', 'Category Name');
  populateForm([categoryName], "Create Category", "");
}

var categories = Object.keys(localStorage);

function showCategories() {
  var listCategoryLabel = document.createElement('label');
  listCategoryLabel.setAttribute('for', 'category');
  listCategoryLabel.innerHTML = 'Category:';
  var listCategory = document.createElement('select');
  listCategory.setAttribute('name', 'category');
  categories.forEach(function (category) {
    var categoryName = document.createElement('option');
    categoryName.setAttribute('value', category);
    categoryName.innerHTML = category;
    listCategory.appendChild(categoryName);
  });
  return [listCategoryLabel, listCategory];
}

function newListForm() {
  var listName = document.createElement('input');
  listName.setAttribute('type', 'text');
  listName.setAttribute('id', 'list-name-field');
  listName.setAttribute('placeholder', 'List Name');
  var categoryDropdown = showCategories();
  populateForm([categoryDropdown[0], categoryDropdown[1], listName], "Create List", "validateList()");
}

var lists = ['Safety Classes', 'Horse Riding Practice', 'Drone Photography'];

function showLists() {
  var taskListLabel = document.createElement('label');
  taskListLabel.setAttribute('for', 'list');
  taskListLabel.innerHTML = 'List:';
  var taskList = document.createElement('select');
  taskList.setAttribute('name', 'list');
  lists.forEach(function (list) {
    var listName = document.createElement('option');
    listName.setAttribute('value', list);
    listName.innerHTML = list;
    taskList.appendChild(listName);
  });
  return [taskListLabel, taskList];
}

function newTaskForm() {
  var taskName = document.createElement('input');
  taskName.setAttribute('type', 'text');
  taskName.setAttribute('id', 'task-name-field');
  taskName.setAttribute('placeholder', 'Task Name');
  var categoryDropdown = showCategories();
  var listDropdown = showLists();
  populateForm([categoryDropdown[0], categoryDropdown[1], listDropdown[0], listDropdown[1], taskName], "Create Task", "validateTask()");
}



/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: newCategory, newTask, newList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCategory", function() { return newCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTask", function() { return newTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newList", function() { return newList; });
var newCategory = function newCategory() {
  var lists = [];
  return {
    lists: lists
  };
};

var newList = function newList(name) {
  var color = "#E03A53";
  var tasks = [];
  return {
    name: name,
    color: color,
    tasks: tasks
  };
};

var newTask = function newTask(description, datetime) {
  return {
    description: description,
    datetime: datetime
  };
};



/***/ }),

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validateList() {
  var list = document.getElementById('list-name-field').value;

  if (list.length > 26) {
    alert("List name must be under 26 characters!");
    return false;
  }
}

function validateTask() {
  var task = document.getElementById('task-name-field').value;

  if (task.length > 120) {
    alert("Description must be under 120 characters!");
    return false;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wb3B1bGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRlLmpzIl0sIm5hbWVzIjpbImdyYWJDYXRlZ29yeSIsImNhdGVnb3J5TmFtZSIsImFsbENhdGVnb3JpZXMiLCJmaW5kIiwiY2F0ZWdvcnkiLCJncmFiTGlzdHMiLCJsaXN0TmFtZSIsImxpc3RzIiwibGlzdCIsImdyYWJUYXNrcyIsIk9iamVjdCIsInZhbHVlcyIsInRhc2tzIiwiZGlzcGxheVRhc2tzIiwiY29udGVudEFyZWEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9yRWFjaCIsInRhc2siLCJzaG93VGFza0Rlc2NyaXB0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRlc2NyaXB0aW9uIiwic2hvd1Rhc2tEYXRlIiwiZGF0ZXRpbWUiLCJhcHBlbmRDaGlsZCIsInN0b3JlTG9jYWxseSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImFkZExpc3QiLCJwdXNoIiwibmV3TGlzdCIsImFkZFRhc2siLCJuZXdEZXNjcmlwdGlvbiIsIm5ld0RhdGV0aW1lIiwibmV3VGFzayIsImRlbGV0ZUNhdGVnb3J5IiwicmVtb3ZlSXRlbSIsImRlbGV0ZUxpc3QiLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJuYW1lIiwic3BsaWNlIiwiZGVsZXRlVGFzayIsInRhc2tJbmRleCIsIngiLCJuZXdDYXRlZ29yeUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdDYXRlZ29yeUZvcm0iLCJuZXdMaXN0QnV0dG9uIiwibmV3TGlzdEZvcm0iLCJuZXdUYXNrQnV0dG9uIiwibmV3VGFza0Zvcm0iLCJwb3B1bGF0ZUZvcm0iLCJmaWVsZHMiLCJzdWJtaXQiLCJ2YWxpZGF0aW9uIiwiZm9ybSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsIml0ZW0iLCJmaWVsZCIsInNldEF0dHJpYnV0ZSIsInN1Ym1pdEJ1dHRvbiIsImNhdGVnb3JpZXMiLCJuYW1lcyIsImtleXMiLCJpIiwibGVuZ3RoIiwicGFyc2UiLCJnZXRJdGVtIiwic2hvd0NhdGVnb3JpZXMiLCJsaXN0Q2F0ZWdvcnlMYWJlbCIsImxpc3RDYXRlZ29yeSIsImNhdGVnb3J5RHJvcGRvd24iLCJzaG93TGlzdHMiLCJ0YXNrTGlzdExhYmVsIiwidGFza0xpc3QiLCJ0YXNrTmFtZSIsImxpc3REcm9wZG93biIsImNvbG9yIiwidmFsaWRhdGVMaXN0IiwidmFsdWUiLCJhbGVydCIsInZhbGlkYXRlVGFzayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7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WEEsV0FBRjtBQUFlRSxZQUFRLEVBQVJBO0FBQWYsR0FBUDtBQUNELENBRkQ7Ozs7Ozs7Ozs7Ozs7QUNiQSxTQUFTOEQsWUFBVCxHQUF1QjtBQUNyQixNQUFJOUUsSUFBSSxHQUFHTyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDdUUsS0FBdEQ7O0FBQ0EsTUFBSS9FLElBQUksQ0FBQ2lFLE1BQUwsR0FBYyxFQUFsQixFQUFxQjtBQUNuQmUsU0FBSyxDQUFDLHdDQUFELENBQUw7QUFDQSxXQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQVNDLFlBQVQsR0FBdUI7QUFDckIsTUFBSXZFLElBQUksR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ3VFLEtBQXREOztBQUNBLE1BQUlyRSxJQUFJLENBQUN1RCxNQUFMLEdBQWMsR0FBbEIsRUFBc0I7QUFDcEJlLFNBQUssQ0FBQywyQ0FBRCxDQUFMO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgbmV3Q2F0ZWdvcnksIG5ld0xpc3QsIG5ld1Rhc2sgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgbmV3Q2F0ZWdvcnlGb3JtLCBuZXdMaXN0Rm9ybSwgbmV3VGFza0Zvcm0sIGFsbENhdGVnb3JpZXMgfSBmcm9tIFwiLi9wb3B1bGF0ZVwiO1xuXG5mdW5jdGlvbiBncmFiQ2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKSB7XG4gIHJldHVybiBhbGxDYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuY2F0ZWdvcnkgPT09IGNhdGVnb3J5TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdyYWJMaXN0cyhjYXRlZ29yeU5hbWUsIGxpc3ROYW1lKSB7XG4gIHJldHVybiBncmFiQ2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKS5saXN0cy5maW5kKGxpc3QgPT4gbGlzdC5saXN0ID09PSBsaXN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdyYWJUYXNrcyhjYXRlZ29yeU5hbWUsIGxpc3ROYW1lKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGdyYWJMaXN0cyhjYXRlZ29yeU5hbWUsIGxpc3ROYW1lKS50YXNrcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhjYXRlZ29yeU5hbWUsIGxpc3ROYW1lKSB7XG4gIGxldCBjb250ZW50QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGxldCB0YXNrcyA9IGdyYWJUYXNrcyhjYXRlZ29yeU5hbWUsIGxpc3ROYW1lKTtcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3Qgc2hvd1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgc2hvd1Rhc2tEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3Qgc2hvd1Rhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNob3dUYXNrRGF0ZS5pbm5lckhUTUwgPSB0YXNrLmRhdGV0aW1lO1xuXG4gICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoc2hvd1Rhc2tEZXNjcmlwdGlvbik7XG4gICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoc2hvd1Rhc2tEYXRlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JlTG9jYWxseShjYXRlZ29yeU5hbWUsIGNhdGVnb3J5KXtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2F0ZWdvcnlOYW1lLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yeSkpO1xufVxuXG5mdW5jdGlvbiBhZGRDYXRlZ29yeShjYXRlZ29yeU5hbWUpIHtcbiAgc3RvcmVMb2NhbGx5KGNhdGVnb3J5TmFtZSwgbmV3Q2F0ZWdvcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3QoY2F0ZWdvcnlOYW1lLCBsaXN0TmFtZSl7XG4gIGxldCBjYXRlZ29yeSA9IGdyYWJDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xuICBjYXRlZ29yeS5saXN0cy5wdXNoKG5ld0xpc3QobGlzdE5hbWUpKTtcbiAgXG4gIHN0b3JlTG9jYWxseShjYXRlZ29yeU5hbWUsIGNhdGVnb3J5KTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhjYXRlZ29yeU5hbWUsIGxpc3ROYW1lLCB0YXNrKSB7XG4gIC8vIHZhbGlkYXRlIGRhdGV0aW1lIGlzIGluIHRoZSBmdXR1cmVcbiAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gdGFza1swXTtcbiAgbGV0IG5ld0RhdGV0aW1lID0gdGFza1sxXTtcbiAgbGV0IG5ld1Rhc2sgPSBuZXdUYXNrKG5ld0Rlc2NyaXB0aW9uLCBuZXdEYXRldGltZSk7XG4gIFxuICBpZiAoIWdyYWJDYXRlZ29yeShjYXRlZ29yeU5hbWUpKXsgYWRkQ2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKTsgfSBcbiAgaWYgKCFncmFiTGlzdHMoY2F0ZWdvcnlOYW1lLCBsaXN0TmFtZSkpeyBhZGRMaXN0KGNhdGVnb3J5TmFtZSwgbGlzdE5hbWUpOyB9XG4gIFxuICBsZXQgY2F0ZWdvcnkgPSBncmFiQ2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKTtcbiAgY2F0ZWdvcnkubGlzdHMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgXG4gIHN0b3JlTG9jYWxseShjYXRlZ29yeU5hbWUsIGNhdGVnb3J5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKXtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oY2F0ZWdvcnlOYW1lKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdChjYXRlZ29yeU5hbWUsIGxpc3ROYW1lKXtcbiAgbGV0IGNhdGVnb3J5ID0gZ3JhYkNhdGVnb3J5KGNhdGVnb3J5TmFtZSk7XG4gIGxldCBsaXN0SW5kZXggPSBjYXRlZ29yeS5saXN0cy5maW5kSW5kZXgobGlzdCA9PiBsaXN0Lm5hbWUgPT09IGxpc3ROYW1lKTtcbiAgaWYgKGxpc3RJbmRleCA+PSAwKSB7IGNhdGVnb3J5Lmxpc3RzLnNwbGljZShsaXN0SW5kZXgsIDEpOyB9XG4gIFxuICBzdG9yZUxvY2FsbHkoY2F0ZWdvcnlOYW1lLCBjYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soY2F0ZWdvcnlOYW1lLCBsaXN0TmFtZSwgdGFzaykge1xuICBsZXQgbGlzdCA9IGdyYWJMaXN0cyhjYXRlZ29yeU5hbWUsIGxpc3ROYW1lKTtcbiAgbGV0IHRhc2tJbmRleCA9IGxpc3QudGFza3MuZmluZEluZGV4KHggPT4geC5kZXNjcmlwdGlvbiA9PT0gdGFza1swXSAmJiB4LmRhdGV0aW1lID09PSB0YXNrWzFdKTtcbiAgaWYgKHRhc2tJbmRleCA+PSAwKSB7IGxpc3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7IH1cbiAgXG4gIHN0b3JlTG9jYWxseShjYXRlZ29yeU5hbWUsIGdyYWJDYXRlZ29yeShjYXRlZ29yeU5hbWUpKTtcbn1cblxuLy8gR2VuZXJhdGUgZm9ybXMgd2hlbiAnTmV3JyBidXR0b25zIGFyZSBjbGlja2VkLlxuXG5jb25zdCBuZXdDYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY2F0ZWdvcnknKTtcbm5ld0NhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtuZXdDYXRlZ29yeUZvcm0oKTt9KTtcblxuY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdCcpO1xubmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7bmV3TGlzdEZvcm0oKTt9KTtcblxuY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xubmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7bmV3VGFza0Zvcm0oKTt9KTsiLCJpbXBvcnQgeyB2YWxpZGF0ZUNhdGVnb3J5LCB2YWxpZGF0ZUxpc3QsIHZhbGlkYXRlVGFzayB9IGZyb20gXCIuL3ZhbGlkYXRlXCI7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybShmaWVsZHMsIHN1Ym1pdCwgdmFsaWRhdGlvbil7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRpb24tZm9ybScpO1xuICBcbiAgd2hpbGUgKGZvcm0uZmlyc3RDaGlsZCkge1xuICAgIGZvcm0ucmVtb3ZlQ2hpbGQoZm9ybS5sYXN0Q2hpbGQpO1xuICB9O1xuICBcbiAgZmllbGRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmllbGQnKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgfSk7XG4gIFxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc3VibWl0KTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCBgcmV0dXJuICR7dmFsaWRhdGlvbn1gKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhbGxDYXRlZ29yaWVzKCl7XG4gIGxldCBjYXRlZ29yaWVzID0gW107XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgY29uc3QgaSA9IG5hbWVzLmxlbmd0aDtcbiAgXG4gIHdoaWxlICggaS0tICkge1xuICAgICBjYXRlZ29yaWVzLnB1c2goIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZXNbaV0pKSApO1xuICB9XG4gIFxuICByZXR1cm4gY2F0ZWdvcmllcztcbn1cblxuZnVuY3Rpb24gbmV3Q2F0ZWdvcnlGb3JtKCl7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNhdGVnb3J5TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBjYXRlZ29yeU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjYXRlZ29yeS1uYW1lLWZpZWxkJyk7XG4gIGNhdGVnb3J5TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0NhdGVnb3J5IE5hbWUnKTtcbiAgXG4gIHBvcHVsYXRlRm9ybShbY2F0ZWdvcnlOYW1lXSwgXCJDcmVhdGUgQ2F0ZWdvcnlcIiwgXCJcIik7XG59XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuXG5mdW5jdGlvbiBzaG93Q2F0ZWdvcmllcygpe1xuICBjb25zdCBsaXN0Q2F0ZWdvcnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxpc3RDYXRlZ29yeUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NhdGVnb3J5Jyk7XG4gIGxpc3RDYXRlZ29yeUxhYmVsLmlubmVySFRNTCA9ICdDYXRlZ29yeTonO1xuICBcbiAgY29uc3QgbGlzdENhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGxpc3RDYXRlZ29yeS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2F0ZWdvcnknKTtcbiAgXG4gIGNhdGVnb3JpZXMuZm9yRWFjaCggKGNhdGVnb3J5KSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNhdGVnb3J5TmFtZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY2F0ZWdvcnkpO1xuICAgIGNhdGVnb3J5TmFtZS5pbm5lckhUTUwgPSBjYXRlZ29yeTtcbiAgICBsaXN0Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOYW1lKTtcbiAgfSk7XG4gIFxuICByZXR1cm4gW2xpc3RDYXRlZ29yeUxhYmVsLCBsaXN0Q2F0ZWdvcnldO1xufVxuXG5mdW5jdGlvbiBuZXdMaXN0Rm9ybSgpe1xuICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxpc3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGxpc3ROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdC1uYW1lLWZpZWxkJyk7XG4gIGxpc3ROYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTGlzdCBOYW1lJyk7XG4gIFxuICBsZXQgY2F0ZWdvcnlEcm9wZG93biA9IHNob3dDYXRlZ29yaWVzKCk7XG4gIFxuICBwb3B1bGF0ZUZvcm0oW2NhdGVnb3J5RHJvcGRvd25bMF0sIGNhdGVnb3J5RHJvcGRvd25bMV0sIGxpc3ROYW1lXSwgXCJDcmVhdGUgTGlzdFwiLCBcInZhbGlkYXRlTGlzdCgpXCIpXG59XG5cbmNvbnN0IGxpc3RzID0gWydTYWZldHkgQ2xhc3NlcycsICdIb3JzZSBSaWRpbmcgUHJhY3RpY2UnLCAnRHJvbmUgUGhvdG9ncmFwaHknXTtcblxuZnVuY3Rpb24gc2hvd0xpc3RzKCl7XG4gIGNvbnN0IHRhc2tMaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrTGlzdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xpc3QnKTtcbiAgdGFza0xpc3RMYWJlbC5pbm5lckhUTUwgPSAnTGlzdDonO1xuICBcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdGFza0xpc3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ2xpc3QnKTtcbiAgXG4gIGxpc3RzLmZvckVhY2goIChsaXN0KSA9PiB7XG4gICAgbGV0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbGlzdE5hbWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGxpc3QpO1xuICAgIGxpc3ROYW1lLmlubmVySFRNTCA9IGxpc3Q7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICB9KTtcbiAgXG4gIHJldHVybiBbdGFza0xpc3RMYWJlbCwgdGFza0xpc3RdO1xufVxuXG5mdW5jdGlvbiBuZXdUYXNrRm9ybSgpe1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1uYW1lLWZpZWxkJyk7XG4gIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBOYW1lJyk7XG4gIFxuICBsZXQgY2F0ZWdvcnlEcm9wZG93biA9IHNob3dDYXRlZ29yaWVzKCk7XG4gIGxldCBsaXN0RHJvcGRvd24gPSBzaG93TGlzdHMoKTtcbiAgXG4gIHBvcHVsYXRlRm9ybShbY2F0ZWdvcnlEcm9wZG93blswXSwgY2F0ZWdvcnlEcm9wZG93blsxXSwgbGlzdERyb3Bkb3duWzBdLCBsaXN0RHJvcGRvd25bMV0sIHRhc2tOYW1lXSwgXCJDcmVhdGUgVGFza1wiLCBcInZhbGlkYXRlVGFzaygpXCIpXG59XG5cbmV4cG9ydCB7IG5ld0NhdGVnb3J5Rm9ybSwgbmV3TGlzdEZvcm0sIG5ld1Rhc2tGb3JtLCBhbGxDYXRlZ29yaWVzIH07IiwiY29uc3QgbmV3Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGxldCBsaXN0cyA9IFtdO1xuICBcbiAgcmV0dXJuIHsgbGlzdHMgfTtcbn07XG5cbmNvbnN0IG5ld0xpc3QgPSAobmFtZSkgPT4ge1xuICBsZXQgY29sb3IgPSBcIiNFMDNBNTNcIjtcbiAgbGV0IHRhc2tzID0gW107XG4gIFxuICByZXR1cm4geyBuYW1lLCBjb2xvciwgdGFza3MgfTtcbn07XG5cbmNvbnN0IG5ld1Rhc2sgPSAoZGVzY3JpcHRpb24sIGRhdGV0aW1lKSA9PiB7ICBcbiAgcmV0dXJuIHsgZGVzY3JpcHRpb24sIGRhdGV0aW1lIH07XG59O1xuXG5leHBvcnQgeyBuZXdDYXRlZ29yeSwgbmV3VGFzaywgbmV3TGlzdCB9OyIsImZ1bmN0aW9uIHZhbGlkYXRlTGlzdCgpe1xuICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LW5hbWUtZmllbGQnKS52YWx1ZTtcbiAgaWYgKGxpc3QubGVuZ3RoID4gMjYpe1xuICAgIGFsZXJ0KFwiTGlzdCBuYW1lIG11c3QgYmUgdW5kZXIgMjYgY2hhcmFjdGVycyFcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGFzaygpe1xuICBsZXQgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUtZmllbGQnKS52YWx1ZTtcbiAgaWYgKHRhc2subGVuZ3RoID4gMTIwKXtcbiAgICBhbGVydChcIkRlc2NyaXB0aW9uIG11c3QgYmUgdW5kZXIgMTIwIGNoYXJhY3RlcnMhXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=