(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-expense/add-expense.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-expense/add-expense.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 324px) {\r\n    .button {\r\n        margin-left: 40%;\r\n      }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWV4cGVuc2UvYWRkLWV4cGVuc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO01BQ2xCO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9hZGQtZXhwZW5zZS9hZGQtZXhwZW5zZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-expense/add-expense.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-expense/add-expense.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"table-editable\">\n    <table class=\"table table-bordered table-striped text-center\" align=\"center\"\n      style=\"background-color:white; width:50%; margin-top: 5%;\">\n      <tr>\n        <th class=\"text-center\">Date</th>\n        <th class=\"text-center\">Expenses</th>\n        <th class=\"text-center\">Total</th>\n        <th class=\"text-center\">Remove</th>\n      </tr>\n      <tr *ngFor=\"let dailyExpense of dailyExpenseSheet; let i=index\">\n        <td>\n          <input type=\"date\" [(ngModel)]=\"dailyExpense.date\" disabled>\n        </td>\n        <td>\n          <label (click)=\"expenseFlag[i]=true\">{{dailyExpense.expenseArray.join('+')}}</label>\n          <ng-container *ngIf=\"expenseFlag[i]\">\n            <ng-container *ngFor=\"let expenseArr of dailyExpense.expenseArray; let j=index\">\n              <input type=\"text\" [(ngModel)]=\"expenseArr\" (blur)=\"addToArray(i,j, expenseArr)\"\n                (focus)=\"fieldName='Save'\">\n            </ng-container>\n            <button (click)=\"add(i,fieldName)\">{{fieldName}} Field</button>\n            <button (click)=\"remove(i,j,'Remove Field')\">Remove Field</button>\n          </ng-container>\n        </td>\n        <td>\n          <label>\n            {{dailyExpense.total}}\n          </label>\n        </td>\n        <td>\n          <span class=\"table-remove\">\n            <button type=\"button\" class=\"btn-danger\" (click)=\"remove(i)\">Remove</button>\n          </span>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <button class=\"btn-success button\" (click)=\"add(null,'Add Expense');saveExpense()\">Add Expense</button>\n</div>"

/***/ }),

/***/ "./src/app/add-expense/add-expense.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-expense/add-expense.component.ts ***!
  \******************************************************/
/*! exports provided: AddExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExpenseComponent", function() { return AddExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/expenses.service */ "./src/app/services/expenses.service.ts");
/* harmony import */ var _models_expense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/expense */ "./src/app/models/expense.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var AddExpenseComponent = /** @class */ (function () {
    function AddExpenseComponent(userService, expensesService) {
        this.userService = userService;
        this.expensesService = expensesService;
        this.expenseFlag = [false, false, false, false];
        this.fieldName = "Add";
        this.dailyExpenseSheet = [
            { date: "", expenseArray: [0], total: 0 }
        ];
        this.expenseSheet = {
            username: "",
            expenses: [],
            total: 0
        };
        this.userData = this.userService.getUserData();
        this.dailyExpenseSheet[0].date = this.getCurrentDate();
    }
    AddExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expensesService.getExpenseDetails().subscribe(function (querySnapshot) {
            for (var i = 0; i < querySnapshot.docs.length; i++) {
                var data = querySnapshot.docs[i].data();
                if (_this.userData)
                    if (_this.userData.username === data.username) {
                        _this.expenseSheet = data;
                        break;
                    }
            }
        });
    };
    AddExpenseComponent.prototype.remove = function (i, j, name) {
        if (name === 'Remove Field') {
            this.dailyExpenseSheet[i].expenseArray.splice(j, 1);
            this.fieldName = "Save";
        }
        else {
            this.dailyExpenseSheet.splice(i, 1);
        }
    };
    AddExpenseComponent.prototype.add = function (i, fieldName) {
        if (fieldName === "Add") {
            this.dailyExpenseSheet[i].expenseArray.push(0);
            this.fieldName = "Save";
        }
        else if (fieldName === "Save") {
            this.expenseFlag[i] = false;
            this.dailyExpenseSheet[i].total = this.dailyExpenseSheet[i].expenseArray.reduce(function (acc, cur) { return acc + cur; }, 0);
            this.fieldName = "Add";
        }
        else if (fieldName === 'Add Expense') {
            var dailyExpense = { date: this.getdate(this.dailyExpenseSheet[this.dailyExpenseSheet.length - 1].date), expenseArray: [0], total: 0 };
            this.dailyExpenseSheet.push(dailyExpense);
        }
    };
    AddExpenseComponent.prototype.addToArray = function (i, j, value) {
        this.dailyExpenseSheet[i].expenseArray[j] = parseFloat(value);
    };
    AddExpenseComponent.prototype.getdate = function (dateI) {
        var date = new Date(dateI);
        date.setDate(date.getDate() + 1);
        return date.getFullYear() + '-' + (('0' + (date.getMonth() + 1)).slice(-2)) + '-' + ('0' + date.getDate()).slice(-2);
    };
    AddExpenseComponent.prototype.saveExpense = function () {
        this.expenseSheet.username = this.userData.username;
        var monthlyExpense = new _models_expense__WEBPACK_IMPORTED_MODULE_3__["MonthlyExpense"]();
        var yearlyExpense = new _models_expense__WEBPACK_IMPORTED_MODULE_3__["YearlyExpense"]();
        this.dailyExpenseSheet.forEach(function (expense) {
            var dailyExpense = new _models_expense__WEBPACK_IMPORTED_MODULE_3__["DailyExpense"]();
            dailyExpense.day = expense.date.split('-')[2];
            dailyExpense.dayExpenses = expense.expenseArray;
            dailyExpense.dayTotal = expense.expenseArray.reduce(function (acc, cur) { return acc + cur; }, 0);
            monthlyExpense.month = expense.date.split('-')[1];
            monthlyExpense.monthlyExpense.push(dailyExpense);
            monthlyExpense.monthTotal = monthlyExpense.monthTotal + dailyExpense.dayTotal;
        });
        yearlyExpense.year = this.dailyExpenseSheet[0].date.split('-')[0];
        yearlyExpense.yearlyExpense.push(monthlyExpense);
        yearlyExpense.yearTotal = yearlyExpense.yearTotal + monthlyExpense.monthTotal;
        this.expenseSheet.expenses.push(yearlyExpense);
        this.expensesService.postExpenseDetails(this.expenseSheet).then(function (data) {
            if (data.id)
                console.log("done");
        }).catch(function (err) {
            console.log(err);
        });
    };
    AddExpenseComponent.prototype.getCurrentDate = function () {
        var today = new Date();
        var d = String(today.getDate()).padStart(2, '0');
        var m = String(today.getMonth() + 1).padStart(2, '0');
        var y = today.getFullYear();
        return y + '-' + m + '-' + d;
    };
    AddExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-expense',
            template: __webpack_require__(/*! ./add-expense.component.html */ "./src/app/add-expense/add-expense.component.html"),
            styles: [__webpack_require__(/*! ./add-expense.component.css */ "./src/app/add-expense/add-expense.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"]])
    ], AddExpenseComponent);
    return AddExpenseComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-expense/add-expense.component */ "./src/app/add-expense/add-expense.component.ts");
/* harmony import */ var _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-expense/edit-expense.component */ "./src/app/edit-expense/edit-expense.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/layout/layout.component */ "./src/app/layout/layout/layout.component.ts");
/* harmony import */ var _delete_expense_delete_expense_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delete-expense/delete-expense.component */ "./src/app/delete-expense/delete-expense.component.ts");













var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'expense-app',
        component: _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
        canActivate: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [{
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            },
            {
                path: 'addExpense',
                component: _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_5__["AddExpenseComponent"]
            },
            {
                path: 'editExpense',
                component: _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_6__["EditExpenseComponent"]
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
            },
            {
                path: 'deleteExpense',
                component: _delete_expense_delete_expense_component__WEBPACK_IMPORTED_MODULE_12__["DeleteExpenseComponent"]
            },
            {
                path: 'logout',
                component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"]
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'home'
            }]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.url = "http://192.168.0.109:8080";
        this.downloadLoc = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('deviceReady', function () {
            console.log("device ready");
            alert("device ready");
        }, false);
    };
    AppComponent.prototype.sync = function () {
        // @ts-ignore
        var sync = ContentSync.sync({
            url: this.url,
            id: 'myapp',
            type: 'local'
        });
        sync.on('complete', function (data) {
            if (data.localPath) {
                console.log("synced: ", data.localPath);
                // var url = "file://" + data.localPath + "/www/index.html";
                // alert('Sync complete ' + data + ' changing document.location ' + url);
                // @ts-ignore
                /* ContentSync.loadUrl(
                  url
                ); */
            }
        });
        sync.on('error', function (e) {
            console.log("error in sync: ", e);
        });
    };
    AppComponent.prototype.download = function (fileName) {
        var that = this;
        var url = this.url + '/' + fileName;
        var callback = function (response) {
            console.log(response);
            if (response.progress) {
                console.log(response.progress);
            }
            if (response.archiveURL) {
                console.log(response.archiveURL);
                that.downloadLoc = response.archiveURL;
                alert("Downloaded");
                // that.extract()
            }
        };
        //@ts-ignore 
        ContentSync.download(url, callback);
    };
    AppComponent.prototype.extract = function () {
        /* window.requestFileSystem(PERSISTENT, 1024 * 1024, function (fs) {
          fs.root.getDirectory('zipOutPut', { create: true }, function (fileEntry) {
            var dirUrl = fileEntry.toURL();
            var callback = function (response) {
              console.log(response);
            }
            console.log(dirUrl, archiveURL);
            Zip.unzip(archiveURL, dirUrl, callback);
            console.log(dirUrl)
          });
         });*/
        //@ts-ignore
        // downloader.init({ folder: "file:///storage/self/primary/AAOTA", unzip: true });
        //@ts-ignore
        // downloader.get(this.downloadLoc);
        window.resolveLocalFileSystemURL(this.downloadLoc, function (fileSystem) {
            var reader = fileSystem.createReader();
            reader.readEntries(function (entries) {
                console.log(entries);
                console.log("extracted");
                alert("extracted");
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-expense/add-expense.component */ "./src/app/add-expense/add-expense.component.ts");
/* harmony import */ var _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-expense/edit-expense.component */ "./src/app/edit-expense/edit-expense.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/layout/layout.component */ "./src/app/layout/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _delete_expense_delete_expense_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./delete-expense/delete-expense.component */ "./src/app/delete-expense/delete-expense.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_9__["AddExpenseComponent"],
                _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_10__["EditExpenseComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_18__["LayoutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _delete_expense_delete_expense_component__WEBPACK_IMPORTED_MODULE_20__["DeleteExpenseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        var userData = this.userService.getUserData();
        if (userData)
            return true;
        this.router.navigateByUrl('/login');
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/delete-expense/delete-expense.component.css":
/*!*************************************************************!*\
  !*** ./src/app/delete-expense/delete-expense.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1leHBlbnNlL2RlbGV0ZS1leHBlbnNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/delete-expense/delete-expense.component.html":
/*!**************************************************************!*\
  !*** ./src/app/delete-expense/delete-expense.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete-expense works!\n</p>\n"

/***/ }),

/***/ "./src/app/delete-expense/delete-expense.component.ts":
/*!************************************************************!*\
  !*** ./src/app/delete-expense/delete-expense.component.ts ***!
  \************************************************************/
/*! exports provided: DeleteExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteExpenseComponent", function() { return DeleteExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteExpenseComponent = /** @class */ (function () {
    function DeleteExpenseComponent() {
    }
    DeleteExpenseComponent.prototype.ngOnInit = function () {
    };
    DeleteExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-expense',
            template: __webpack_require__(/*! ./delete-expense.component.html */ "./src/app/delete-expense/delete-expense.component.html"),
            styles: [__webpack_require__(/*! ./delete-expense.component.css */ "./src/app/delete-expense/delete-expense.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeleteExpenseComponent);
    return DeleteExpenseComponent;
}());



/***/ }),

/***/ "./src/app/edit-expense/edit-expense.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-expense/edit-expense.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZXhwZW5zZS9lZGl0LWV4cGVuc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-expense/edit-expense.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-expense/edit-expense.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-expense works!\n</p>\n"

/***/ }),

/***/ "./src/app/edit-expense/edit-expense.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-expense/edit-expense.component.ts ***!
  \********************************************************/
/*! exports provided: EditExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExpenseComponent", function() { return EditExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditExpenseComponent = /** @class */ (function () {
    function EditExpenseComponent() {
    }
    EditExpenseComponent.prototype.ngOnInit = function () {
    };
    EditExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-expense',
            template: __webpack_require__(/*! ./edit-expense.component.html */ "./src/app/edit-expense/edit-expense.component.html"),
            styles: [__webpack_require__(/*! ./edit-expense.component.css */ "./src/app/edit-expense/edit-expense.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditExpenseComponent);
    return EditExpenseComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #111;\r\n  color: #818181;\r\n  overflow-x: hidden;\r\n  transition: 0.2s;\r\n  padding-top: 10px;\r\n}\r\n\r\n.sideMenuItems{\r\n  margin-left:10%;\r\n}\r\n\r\n.sideMenuItems:hover{\r\n  color: #f1f1f1;\r\n  cursor: pointer;\r\n}\r\n\r\n.sidenav a {\r\n  padding-right: 10px;\r\n  padding-top: 4px; \r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #818181;\r\n  display: block;\r\n  transition: 0.2s;\r\n}\r\n\r\n.sidenav a:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.sidenav .closebtn {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 5px;\r\n}\r\n\r\n#main {\r\n  transition: margin-left .5s;\r\n}\r\n\r\n.top {\r\n  margin-top: 2%;\r\n}\r\n\r\n.top2 {\r\n  margin-top: 2.5%;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNpZGVNZW51SXRlbXN7XHJcbiAgbWFyZ2luLWxlZnQ6MTAlO1xyXG59XHJcblxyXG4uc2lkZU1lbnVJdGVtczpob3ZlcntcclxuICBjb2xvcjogI2YxZjFmMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiNtYWluIHtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNXM7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4udG9wMiB7XHJcbiAgbWFyZ2luLXRvcDogMi41JTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdiBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-1 top\">\n      <div id=\"mySidenav\" class=\"sidenav\" [ngStyle]=\"{'width.%':width}\">\n        <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">\n          &times;\n        </a>\n        <div class=\"sideMenuItems\">\n          <img src=\"assets/logo.png\" alt=\"icon\" height=\"30px\" width=\"30px\">&nbsp;&nbsp;&nbsp;Expense App\n        </div>\n        <div>&nbsp;</div>\n        <div class=\"sideMenuItems\" (click)=\"menuClick('home')\">\n          Home\n        </div>\n        <div>&nbsp;</div>\n        <div class=\"sideMenuItems\" (click)=\"menuClick('profile')\">\n          Profile\n        </div>\n        <div>&nbsp;</div>\n        <div class=\"sideMenuItems\" (click)=\"menuClick('addExpense')\">\n          Add Expense\n        </div>\n        <div>&nbsp;</div>\n        <div class=\"sideMenuItems\" (click)=\"menuClick('editExpense')\">\n          Edit Expense\n        </div>\n        <div>&nbsp;</div>\n        <div class=\"sideMenuItems\" (click)=\"menuClick('deleteExpense')\">\n          Delete Expense\n        </div>\n        <div>&nbsp;</div>\n        <div class=\"sideMenuItems\" (click)=\"menuClick('logout')\">\n          Logout\n        </div>\n      </div>\n      <div id=\"main\">\n        <span style=\"font-size:20px;cursor:pointer\" (click)=\"openNav()\" class=\"{{preDefinedClassName}}\">\n          &#9776;\n        </span>\n      </div>\n    </div>\n    <div class=\"col-11 top2\">\n      Expense App\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.opacity = "1";
    };
    HeaderComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0px";
    };
    HeaderComponent.prototype.menuClick = function (item) {
        this.closeNav();
        this.router.navigateByUrl('/expense-app/' + item);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@simpleFadeAnimation]=\"'in'\">\n  <p>\n    home works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("simpleFadeAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1500)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout/layout.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/layout/layout.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  margin-top: 2%;\r\n  margin-left: 2%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout/layout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/layout/layout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <app-header></app-header>\n</div>\n<div class=\"body\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/layout/layout/layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\r\n  width: 360px;\r\n  margin: 7% auto;\r\n}\r\n\r\n.login-logo {\r\n  margin-top: 25%;\r\n  font-size: 35px;\r\n  text-align: center;\r\n  margin-bottom: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n.login-box-msg {\r\n  margin: 0;\r\n  text-align: center;\r\n  padding: 0 20px 20px 20px;\r\n}\r\n\r\n.login-box-body {\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-top: 0;\r\n  color: #666;\r\n}\r\n\r\n.form-control {\r\n  margin-bottom: 5%;\r\n  width: 100%;\r\n}\r\n\r\n.btn-success {\r\n  width: 45%;\r\n}\r\n\r\n.space {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.wrong {\r\n  color: red;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(143, 143, 143, 0.8);\r\n  z-index: 2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULDBDQUEwQztFQUMxQyxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveCB7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIG1hcmdpbjogNyUgYXV0bztcclxufVxyXG5cclxuLmxvZ2luLWxvZ28ge1xyXG4gIG1hcmdpbi10b3A6IDI1JTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmxvZ2luLWJveC1tc2cge1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWJveC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLndyb25nIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDE0MywgMTQzLCAwLjgpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\" [@simpleFadeAnimation]=\"'in'\">\n  <div class=\"login-logo\">\n    <h3><img src=\"assets/logo.png\" height=\"40%\" width=\"40%\" alt=\"Expense App Logo\"></h3>\n  </div>\n  <div class=\"login-box-body\">\n    <p class=\"login-box-msg {{wrong}}\">{{message}}</p>\n    <input type=\"text\" placeholder=\"Username\" class=\"form-control\" [(ngModel)]=\"signin.username\" (keyup)=\"keyUp()\">\n    <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [(ngModel)]=\"signin.password\" (keyup)=\"keyUp()\">\n    <input type=\"submit\" value=\"Sign In\" class=\"btn btn-success\" (click)=\"submit()\">\n    <span class=\"space\"></span>\n    <input type=\"submit\" value=\"Sign Up\" class=\"btn btn-success\" (click)=\"signup()\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/signin */ "./src/app/models/signin.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.message = "Expense App Login";
        this.wrong = undefined;
        this.signin = new _models_signin__WEBPACK_IMPORTED_MODULE_3__["Signin"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.signin.username === "") {
            this.wrong = "wrong";
            this.message = "Enter Username";
        }
        else if (this.signin.password === "") {
            this.wrong = "wrong";
            this.message = "Enter Password";
        }
        else
            this.userService.getUser().subscribe(function (querySnapshot) {
                for (var i = 0; i < querySnapshot.docs.length; i++) {
                    _this.wrong = "wrong";
                    //@ts-ignore
                    var data = querySnapshot.docs[i].data();
                    if (data.username === _this.signin.username) {
                        if (data.password === _this.signin.password) {
                            _this.userService.setUserData(data);
                            _this.router.navigateByUrl("/expense-app/home");
                        }
                        else {
                            _this.wrong = "wrong";
                            _this.message = "Wrong Password";
                        }
                        break;
                    }
                    else {
                        _this.wrong = "wrong";
                        _this.message = "Unknown Username";
                    }
                }
                ;
            });
    };
    LoginComponent.prototype.keyUp = function () {
        this.wrong = undefined;
        this.message = "Expense App Login";
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigateByUrl("/signup");
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("simpleFadeAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1500)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(83, 78, 78, 0.562);\r\n  z-index: 2;\r\n  align-content: center;\r\n  position: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHlDQUF5QztFQUN6QyxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCA3OCwgNzgsIDAuNTYyKTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"modal-dialog\" style=\"margin-top:30% \" [@simpleFadeAnimation]=\"'in'\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" id=\"modal-body\">\n        <label style=\"margin:9%;\">Are You Sure You Want To Logout?</label><br>\n        <button type=\"button\" class=\"btn btn-danger\" style=\"width:40%;margin:5%\"\n          (click)=\"btnClicked('yes')\">Yes</button>\n        <button type=\"button\" class=\"btn btn-success\" style=\"width:40%;margin:5%\" (click)=\"btnClicked('no')\">No</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.btnClicked = function (type) {
        if (type === 'yes') {
            this.router.navigateByUrl('/login');
            this.userService.setUserData(null);
        }
        else
            this.router.navigateByUrl('/expense-app/home');
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("simpleFadeAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1500)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/models/expense.ts":
/*!***********************************!*\
  !*** ./src/app/models/expense.ts ***!
  \***********************************/
/*! exports provided: DailyExpense, MonthlyExpense, YearlyExpense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyExpense", function() { return DailyExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyExpense", function() { return MonthlyExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearlyExpense", function() { return YearlyExpense; });
var DailyExpense = /** @class */ (function () {
    function DailyExpense() {
        this.day = 1;
        this.dayExpenses = [];
        this.dayTotal = 0;
    }
    return DailyExpense;
}());

var MonthlyExpense = /** @class */ (function () {
    function MonthlyExpense() {
        this.month = 1;
        this.monthlyExpense = [];
        this.monthTotal = 0;
    }
    return MonthlyExpense;
}());

var YearlyExpense = /** @class */ (function () {
    function YearlyExpense() {
        this.year = 2010;
        this.yearlyExpense = [];
        this.yearTotal = 0;
    }
    return YearlyExpense;
}());



/***/ }),

/***/ "./src/app/models/signin.ts":
/*!**********************************!*\
  !*** ./src/app/models/signin.ts ***!
  \**********************************/
/*! exports provided: Signin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin", function() { return Signin; });
var Signin = /** @class */ (function () {
    function Signin() {
        this.username = "";
        this.password = "";
    }
    return Signin;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\" [@simpleFadeAnimation]=\"'in'\">\n    <p>\n        profile Works!\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.userData = this.userService.getUserData();
        console.log(this.userData);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("simpleFadeAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1500)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/expenses.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/expenses.service.ts ***!
  \**********************************************/
/*! exports provided: ExpensesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesService", function() { return ExpensesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var ExpensesService = /** @class */ (function () {
    function ExpensesService(firestore) {
        this.firestore = firestore;
        this.expenseSheetData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.expenseSheetDataObservable = this.expenseSheetData.asObservable();
        this.expenseSheetRef = this.firestore.collection(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].expenseSheet);
    }
    ExpensesService.prototype.postExpenseDetails = function (expenseSheetData) {
        return this.expenseSheetRef.add(expenseSheetData);
    };
    ExpensesService.prototype.getExpenseDetails = function () {
        return this.expenseSheetRef.get();
    };
    ExpensesService.prototype.putExpenseDetails = function (expenseSheetData) {
        return null;
    };
    ExpensesService.prototype.deleteExpenseDetails = function (expenseSheetData) {
        return null;
    };
    ExpensesService.prototype.setExpenseSheetData = function (expenseSheet) {
        this.expenseSheetData.next(expenseSheet);
    };
    ExpensesService.prototype.getExpenseSheetData = function () {
        return this.expenseSheetData.value;
    };
    ExpensesService.prototype.getExpenseSheetObservable = function () {
        return this.expenseSheetDataObservable;
    };
    ExpensesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ExpensesService);
    return ExpensesService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var UserService = /** @class */ (function () {
    function UserService(firestore) {
        this.firestore = firestore;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userDataObservable = this.userData.asObservable();
        this.userRef = this.firestore.collection(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user);
        this.signinRef = this.firestore.collection(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user);
    }
    UserService.prototype.postUser = function (userData) {
        return this.userRef.add(userData);
    };
    UserService.prototype.getUser = function () {
        return this.signinRef.get();
    };
    UserService.prototype.putUser = function (userData) {
        return null;
    };
    UserService.prototype.deleteUser = function (userData) {
        return null;
    };
    UserService.prototype.setUserData = function (user) {
        this.userData.next(user);
    };
    UserService.prototype.getUserData = function () {
        return this.userData.value;
    };
    UserService.prototype.getUserObservable = function () {
        return this.userDataObservable;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box-body {\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-top: 0;\r\n  color: #666;\r\n}\r\n\r\n.login-box {\r\n  width: 515px;\r\n  margin: 7% auto;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  margin-bottom: 10px;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgd2lkdGg6IDUxNXB4O1xyXG4gIG1hcmdpbjogNyUgYXV0bztcclxufVxyXG5cclxuaW5wdXQsXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\" [@simpleFadeAnimation]=\"'in'\">\n  <form [formGroup]=\"signUpForm\" (ngSubmit)=\"continue()\">\n    <div class=\"container login-box-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <label>\n            First Name<span style=\"color: red\"> *</span>\n          </label>\n        </div>\n        <div class=\"col-lg-8\">\n          <input type=\"text\" placeholder=\"First Name\" class=\"form-control\" formControlName=\"firstName\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <label>\n            Middle Name\n          </label>\n        </div>\n        <div class=\"col-lg-8\">\n          <input type=\"text\" placeholder=\"Middle Name\" class=\"form-control\" formControlName=\"middleName\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <label>\n            Last Name<span style=\"color: red\"> *</span>\n          </label>\n        </div>\n        <div class=\"col-lg-8\">\n          <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\" formControlName=\"lastName\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <label>\n            Username<span style=\"color: red\"> *</span>\n          </label>\n        </div>\n        <div class=\"col-lg-8\">\n          <input type=\"text\" placeholder=\"Username\" class=\"form-control\" formControlName=\"username\">\n        </div>\n      </div>\n      <ng-container formGroupName=\"passwords\">\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <label>\n              Password<span style=\"color: red\"> *</span>\n            </label>\n          </div>\n          <div class=\"col-lg-8\">\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"password\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <label>\n              Confirm Password<span style=\"color: red\"> *</span>\n            </label>\n          </div>\n          <div class=\"col-lg-8\">\n            <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" formControlName=\"confirmPassword\">\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <label>\n            Email<span style=\"color: red\"> *</span>\n          </label>\n        </div>\n        <div class=\"col-lg-8\">\n          <input type=\"text\" placeholder=\"Email\" class=\"form-control\" formControlName=\"emailId\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <label>\n            Mobile Number<span style=\"color: red\"> *</span>\n          </label>\n        </div>\n        <div class=\"col-lg-8\">\n          <input type=\"text\" placeholder=\"Mobile Number\" class=\"form-control\" formControlName=\"mobileNumber\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signUpForm.valid\">Continue</button>\n        </div>\n        <div class=\"col-lg-6\">\n          <button type=\"reset\" class=\"btn btn-success\" (click)=\"cancel()\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






var SignupComponent = /** @class */ (function () {
    // mention suggestions for password and phno
    function SignupComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            passwords: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8})"))
                ]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
            }, [this.passwordConfirming]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                // Validators.pattern(new RegExp("^[+]{1}[0-9]{1,2}[ ][0-9]{10}$"))
            ])
        });
        this.userData = {
            firstName: "",
            middleName: "",
            lastName: "",
            username: "",
            password: "",
            emailId: "",
            mobileNumber: "",
        };
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.passwordConfirming = function (passwords) {
        if (passwords.get("password").value === passwords.get("confirmPassword").value && (passwords.get("password").value !== "" && passwords.get("confirmPassword").value !== ""))
            return null;
        return { mismatch: true };
    };
    SignupComponent.prototype.continue = function () {
        var _this = this;
        this.userData.emailId = this.signUpForm.value.emailId;
        this.userData.firstName = this.signUpForm.value.firstName;
        this.userData.middleName = this.signUpForm.value.middleName;
        this.userData.lastName = this.signUpForm.value.lastName;
        this.userData.username = this.signUpForm.value.username;
        this.userData.password = this.signUpForm.value.passwords.password;
        this.userData.mobileNumber = this.signUpForm.value.mobileNumber;
        this.userService.postUser(this.userData).then(function (data) {
            if (data.id)
                _this.router.navigateByUrl("/login");
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SignupComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/login');
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("simpleFadeAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1500)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDMTBrAZsGRWVU0KaLfIeqxBtGbNYMmtNs",
        authDomain: "expense-app-lurisan.firebaseapp.com",
        databaseURL: "https://expense-app-lurisan.firebaseio.com",
        projectId: "expense-app-lurisan",
        storageBucket: "expense-app-lurisan.appspot.com",
        messagingSenderId: "838268871936",
        appId: "1:838268871936:web:ca2cc04a15fd34ee"
    },
    user: "signup",
    expenseSheet: "expenseSheet"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\talk2\Documents\Codes\Expense_App\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map