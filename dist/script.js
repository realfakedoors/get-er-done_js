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

 // import { validate, validate } from "./validations";

var myTasks = []; // change to localstorage

function createCategory(name) {// validate name uniqueness
}

function createList(category, name) {// validate name length < 26 chars AND uniqueness
}

function createTask(list, description, datetime) {// validate description length < 120 chars
  // validate datetime is in the future
}

function displayCategories() {}

function displayTasks(list) {}

function displayAllTasks() {}

function displayThisWeek() {}

function displayAllTime() {}

function updateColor(list) {}

function deleteTask(task) {}

function deleteList(list) {}

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
/*! exports provided: newCategoryForm, newListForm, newTaskForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCategoryForm", function() { return newCategoryForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newListForm", function() { return newListForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTaskForm", function() { return newTaskForm; });
function populateForm(fields, submit) {
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
  form.appendChild(submitButton);
}

function newCategoryForm() {
  var categoryName = document.createElement('input');
  categoryName.setAttribute('type', 'text');
  categoryName.setAttribute('id', 'category-name-field');
  categoryName.setAttribute('placeholder', 'Category Name');
  populateForm([categoryName], "Create Category");
}

var categories = ['Urgent', 'Work', 'Fun', 'Travel', 'Social'];

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
  populateForm([showCategories()[0], showCategories()[1], listName], "Create List");
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
  populateForm([showCategories()[0], showCategories()[1], showLists()[0], showLists()[1], taskName], "Create Task");
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
var newCategory = function newCategory(name) {
  return {
    name: name
  };
};

var newList = function newList(category, name) {
  var color = "#E03A53";
  var tasks = [];
  return {
    category: category,
    name: name,
    color: color,
    tasks: tasks
  };
};

var newTask = function newTask(list, description, datetime) {
  return {
    list: list,
    description: description,
    datetime: datetime
  };
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wb3B1bGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUuanMiXSwibmFtZXMiOlsibXlUYXNrcyIsImNyZWF0ZUNhdGVnb3J5IiwibmFtZSIsImNyZWF0ZUxpc3QiLCJjYXRlZ29yeSIsImNyZWF0ZVRhc2siLCJsaXN0IiwiZGVzY3JpcHRpb24iLCJkYXRldGltZSIsImRpc3BsYXlDYXRlZ29yaWVzIiwiZGlzcGxheVRhc2tzIiwiZGlzcGxheUFsbFRhc2tzIiwiZGlzcGxheVRoaXNXZWVrIiwiZGlzcGxheUFsbFRpbWUiLCJ1cGRhdGVDb2xvciIsImRlbGV0ZVRhc2siLCJ0YXNrIiwiZGVsZXRlTGlzdCIsIm5ld0NhdGVnb3J5QnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdDYXRlZ29yeUZvcm0iLCJuZXdMaXN0QnV0dG9uIiwibmV3TGlzdEZvcm0iLCJuZXdUYXNrQnV0dG9uIiwibmV3VGFza0Zvcm0iLCJwb3B1bGF0ZUZvcm0iLCJmaWVsZHMiLCJzdWJtaXQiLCJmb3JtIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiZm9yRWFjaCIsIml0ZW0iLCJmaWVsZCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdEJ1dHRvbiIsImNhdGVnb3J5TmFtZSIsImNhdGVnb3JpZXMiLCJzaG93Q2F0ZWdvcmllcyIsImxpc3RDYXRlZ29yeUxhYmVsIiwiaW5uZXJIVE1MIiwibGlzdENhdGVnb3J5IiwibGlzdE5hbWUiLCJsaXN0cyIsInNob3dMaXN0cyIsInRhc2tMaXN0TGFiZWwiLCJ0YXNrTGlzdCIsInRhc2tOYW1lIiwibmV3Q2F0ZWdvcnkiLCJuZXdMaXN0IiwiY29sb3IiLCJ0YXNrcyIs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OztBQUlBLElBQU1vRCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDbEQsUUFBRCxFQUFXRixJQUFYLEVBQW9CO0FBQ2xDLE1BQUlxRCxLQUFLLEdBQUcsU0FBWjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBRUEsU0FBTztBQUFFcEQsWUFBUSxFQUFSQSxRQUFGO0FBQVlGLFFBQUksRUFBSkEsSUFBWjtBQUFrQnFELFNBQUssRUFBTEEsS0FBbEI7QUFBeUJDLFNBQUssRUFBTEE7QUFBekIsR0FBUDtBQUNELENBTEQ7O0FBT0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ25ELElBQUQsRUFBT0MsV0FBUCxFQUFvQkMsUUFBcEIsRUFBaUM7QUFDL0MsU0FBTztBQUFFRixRQUFJLEVBQUpBLElBQUY7QUFBUUMsZUFBVyxFQUFYQSxXQUFSO0FBQXFCQyxZQUFRLEVBQVJBO0FBQXJCLEdBQVA7QUFDRCxDQUZEIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgbmV3Q2F0ZWdvcnksIG5ld0xpc3QsIG5ld1Rhc2sgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgbmV3Q2F0ZWdvcnlGb3JtLCBuZXdMaXN0Rm9ybSwgbmV3VGFza0Zvcm0gfSBmcm9tIFwiLi9wb3B1bGF0ZVwiO1xuLy8gaW1wb3J0IHsgdmFsaWRhdGUsIHZhbGlkYXRlIH0gZnJvbSBcIi4vdmFsaWRhdGlvbnNcIjtcblxubGV0IG15VGFza3MgPSBbXTtcbi8vIGNoYW5nZSB0byBsb2NhbHN0b3JhZ2VcblxuZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkobmFtZSl7XG4gIC8vIHZhbGlkYXRlIG5hbWUgdW5pcXVlbmVzc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KGNhdGVnb3J5LCBuYW1lKXtcbiAgLy8gdmFsaWRhdGUgbmFtZSBsZW5ndGggPCAyNiBjaGFycyBBTkQgdW5pcXVlbmVzc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGxpc3QsIGRlc2NyaXB0aW9uLCBkYXRldGltZSl7XG4gIC8vIHZhbGlkYXRlIGRlc2NyaXB0aW9uIGxlbmd0aCA8IDEyMCBjaGFyc1xuICAvLyB2YWxpZGF0ZSBkYXRldGltZSBpcyBpbiB0aGUgZnV0dXJlXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDYXRlZ29yaWVzKCl7XG4gIFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MobGlzdCl7XG4gIFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKXtcbiAgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaGlzV2Vlaygpe1xuICBcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFsbFRpbWUoKXtcbiAgXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbG9yKGxpc3Qpe1xuICBcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrKXtcbiAgXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QobGlzdCl7XG4gIFxufVxuXG5jb25zdCBuZXdDYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY2F0ZWdvcnknKTtcbm5ld0NhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtuZXdDYXRlZ29yeUZvcm0oKTt9KTtcblxuY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdCcpO1xubmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7bmV3TGlzdEZvcm0oKTt9KTtcblxuY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xubmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7bmV3VGFza0Zvcm0oKTt9KTsiLCJmdW5jdGlvbiBwb3B1bGF0ZUZvcm0oZmllbGRzLCBzdWJtaXQpe1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0aW9uLWZvcm0nKTtcbiAgXG4gIHdoaWxlIChmb3JtLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JtLnJlbW92ZUNoaWxkKGZvcm0ubGFzdENoaWxkKTtcbiAgfTtcbiAgXG4gIGZpZWxkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpZWxkJyk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZCk7XG4gIH0pO1xuICBcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHN1Ym1pdCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gbmV3Q2F0ZWdvcnlGb3JtKCl7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNhdGVnb3J5TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBjYXRlZ29yeU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjYXRlZ29yeS1uYW1lLWZpZWxkJyk7XG4gIGNhdGVnb3J5TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0NhdGVnb3J5IE5hbWUnKTtcbiAgXG4gIHBvcHVsYXRlRm9ybShbY2F0ZWdvcnlOYW1lXSwgXCJDcmVhdGUgQ2F0ZWdvcnlcIik7XG59XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbJ1VyZ2VudCcsICdXb3JrJywgJ0Z1bicsICdUcmF2ZWwnLCAnU29jaWFsJ107XG5cbmZ1bmN0aW9uIHNob3dDYXRlZ29yaWVzKCl7XG4gIGNvbnN0IGxpc3RDYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGlzdENhdGVnb3J5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2F0ZWdvcnknKTtcbiAgbGlzdENhdGVnb3J5TGFiZWwuaW5uZXJIVE1MID0gJ0NhdGVnb3J5Oic7XG4gIFxuICBjb25zdCBsaXN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgbGlzdENhdGVnb3J5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjYXRlZ29yeScpO1xuICBcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKCAoY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgY2F0ZWdvcnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY2F0ZWdvcnlOYW1lLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjYXRlZ29yeSk7XG4gICAgY2F0ZWdvcnlOYW1lLmlubmVySFRNTCA9IGNhdGVnb3J5O1xuICAgIGxpc3RDYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeU5hbWUpO1xuICB9KTtcbiAgXG4gIHJldHVybiBbbGlzdENhdGVnb3J5TGFiZWwsIGxpc3RDYXRlZ29yeV07XG59XG5cbmZ1bmN0aW9uIG5ld0xpc3RGb3JtKCl7XG4gIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbGlzdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbGlzdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0LW5hbWUtZmllbGQnKTtcbiAgbGlzdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdMaXN0IE5hbWUnKTtcbiAgXG4gIHBvcHVsYXRlRm9ybShbc2hvd0NhdGVnb3JpZXMoKVswXSwgc2hvd0NhdGVnb3JpZXMoKVsxXSwgbGlzdE5hbWVdLCBcIkNyZWF0ZSBMaXN0XCIpO1xufVxuXG5jb25zdCBsaXN0cyA9IFsnU2FmZXR5IENsYXNzZXMnLCAnSG9yc2UgUmlkaW5nIFByYWN0aWNlJywgJ0Ryb25lIFBob3RvZ3JhcGh5J107XG5cbmZ1bmN0aW9uIHNob3dMaXN0cygpe1xuICBjb25zdCB0YXNrTGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0xpc3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsaXN0Jyk7XG4gIHRhc2tMaXN0TGFiZWwuaW5uZXJIVE1MID0gJ0xpc3Q6JztcbiAgXG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRhc2tMaXN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdsaXN0Jyk7XG4gIFxuICBsaXN0cy5mb3JFYWNoKCAobGlzdCkgPT4ge1xuICAgIGxldCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxpc3ROYW1lLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsaXN0KTtcbiAgICBsaXN0TmFtZS5pbm5lckhUTUwgPSBsaXN0O1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgfSk7XG4gIFxuICByZXR1cm4gW3Rhc2tMaXN0TGFiZWwsIHRhc2tMaXN0XTtcbn1cblxuZnVuY3Rpb24gbmV3VGFza0Zvcm0oKXtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbmFtZS1maWVsZCcpO1xuICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgTmFtZScpO1xuICBcbiAgcG9wdWxhdGVGb3JtKFtzaG93Q2F0ZWdvcmllcygpWzBdLCBzaG93Q2F0ZWdvcmllcygpWzFdLCBzaG93TGlzdHMoKVswXSwgc2hvd0xpc3RzKClbMV0sIHRhc2tOYW1lXSwgXCJDcmVhdGUgVGFza1wiKVxufVxuXG5leHBvcnQgeyBuZXdDYXRlZ29yeUZvcm0sIG5ld0xpc3RGb3JtLCBuZXdUYXNrRm9ybSB9OyIsImNvbnN0IG5ld0NhdGVnb3J5ID0gKG5hbWUpID0+IHtcbiAgcmV0dXJuIHsgbmFtZSB9O1xufVxuXG5jb25zdCBuZXdMaXN0ID0gKGNhdGVnb3J5LCBuYW1lKSA9PiB7XG4gIGxldCBjb2xvciA9IFwiI0UwM0E1M1wiO1xuICBsZXQgdGFza3MgPSBbXTtcbiAgXG4gIHJldHVybiB7IGNhdGVnb3J5LCBuYW1lLCBjb2xvciwgdGFza3MgfTtcbn07XG5cbmNvbnN0IG5ld1Rhc2sgPSAobGlzdCwgZGVzY3JpcHRpb24sIGRhdGV0aW1lKSA9PiB7ICBcbiAgcmV0dXJuIHsgbGlzdCwgZGVzY3JpcHRpb24sIGRhdGV0aW1lIH07XG59O1xuXG5leHBvcnQgeyBuZXdDYXRlZ29yeSwgbmV3VGFzaywgbmV3TGlzdCB9OyJdLCJzb3VyY2VSb290IjoiIn0=