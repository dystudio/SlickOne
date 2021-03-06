﻿/*
* SlickOne WEB快速开发框架遵循LGPL协议，也可联系作者商业授权并获取技术支持；
* 除此之外的使用则视为不正当使用，请您务必避免由此带来的商业版权纠纷。

The SlickOne project.
Copyright (C) 2016  .NET Web Framwork Library

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, you can access the official
web page about lgpl: https://www.gnu.org/licenses/lgpl.html
*/

var soconfig = (function () {
	function soconfig() {
	}

    //#region tab configuration
    var myrolegrid = "myrolegrid",
        myusergrid = "myusergrid",
        myroleusertree = "myroleusertree",
        myrolepermissiongrid = "myrolepermissiongrid",
        myresourcegrid = "myresourcegrid",
        myprocessgrid = "myprocessgrid",
        myentitydefgrid = "myentitydefgrid",
        myprocessinstancegrid = "myprocessinstancegrid",
        myactivityinstancegrid = "myactivityinstancegrid",
        mymessagebox = "mymessagebox",
        mymodaldialog = "mymodaldialog",
        myfileupload = "myfileupload",
        mycloudupload = "mycloudupload",
        mynotifybox = "mynotifybox";
        
    soconfig.sideBar = {};
    soconfig.sideBar[myrolegrid] = {};
    soconfig.sideBar[myrolegrid].tabName = "角色记录";
    soconfig.sideBar[myrolegrid].pageUrl = "role/list";

    soconfig.sideBar[myusergrid] = {};
    soconfig.sideBar[myusergrid].tabName = "用户记录";
    soconfig.sideBar[myusergrid].pageUrl = "user/list";

    soconfig.sideBar[myroleusertree] = {};
    soconfig.sideBar[myroleusertree].tabName = "角色用户维护";
    soconfig.sideBar[myroleusertree].pageUrl = "roleuser/list";

    soconfig.sideBar[myrolepermissiongrid] = {};
    soconfig.sideBar[myrolepermissiongrid].tabName = "角色授权";
    soconfig.sideBar[myrolepermissiongrid].pageUrl = "permission/list";


    soconfig.sideBar[myresourcegrid] = {};
    soconfig.sideBar[myresourcegrid].tabName = "资源数据";
    soconfig.sideBar[myresourcegrid].pageUrl = "resource/list";

    soconfig.sideBar[myprocessgrid] = {};
    soconfig.sideBar[myprocessgrid].tabName = "流程记录";
    soconfig.sideBar[myprocessgrid].pageUrl = "workflow/process";

    soconfig.sideBar[myentitydefgrid] = {};
    soconfig.sideBar[myentitydefgrid].tabName = "表单记录";
    soconfig.sideBar[myentitydefgrid].pageUrl = "workflow/entitydef";

    soconfig.sideBar[myprocessinstancegrid] = {};
    soconfig.sideBar[myprocessinstancegrid].tabName = "流程实例";
    soconfig.sideBar[myprocessinstancegrid].pageUrl = "workflow/processinstance";

    soconfig.sideBar[myactivityinstancegrid] = {};
    soconfig.sideBar[myactivityinstancegrid].tabName = "活动实例";
    soconfig.sideBar[myactivityinstancegrid].pageUrl = "workflow/activityinstance";

    soconfig.sideBar[mymessagebox] = {};
    soconfig.sideBar[mymessagebox].tabName = "消息弹框";
    soconfig.sideBar[mymessagebox].pageUrl = "message/popup";

    soconfig.sideBar[mymodaldialog] = {};
    soconfig.sideBar[mymodaldialog].tabName = "模式窗口";
    soconfig.sideBar[mymodaldialog].pageUrl = "message/dialog";

    soconfig.sideBar[myfileupload] = {};
    soconfig.sideBar[myfileupload].tabName = "文件上传";
    soconfig.sideBar[myfileupload].pageUrl = "file/upload";

    soconfig.sideBar[mycloudupload] = {};
    soconfig.sideBar[mycloudupload].tabName = "云端上传";
    soconfig.sideBar[mycloudupload].pageUrl = "cloud/upload";

    soconfig.sideBar[mynotifybox] = {};
    soconfig.sideBar[mynotifybox].tabName = "通知消息";
    soconfig.sideBar[mynotifybox].pageUrl = "im/notification";
    //#endregion

	//#region toolbutton configuration
   
	soconfig.toolbutton = [];
	soconfig.toolbutton["add"] = [];
	soconfig.toolbutton["edit"] = [];
	soconfig.toolbutton["delete"] = [];
	soconfig.toolbutton["query"] = [];

	soconfig.toolbutton["add"][myrolegrid] = "role/edit";
	soconfig.toolbutton["add"][myusergrid] = "user/edit";
    soconfig.toolbutton["add"][myresourcegrid] = "resource/edit";

	soconfig.toolbutton["edit"][myrolegrid] = "role/edit";
	soconfig.toolbutton["edit"][myusergrid] = "user/edit";

	//delete method
	soconfig.toolbutton["delete"][myrolegrid] = rolelist.delete;
	soconfig.toolbutton["delete"][myusergrid] = userlist.delete;

	//#endregion

	return soconfig;
})()