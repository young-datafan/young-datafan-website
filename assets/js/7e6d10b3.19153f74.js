"use strict";(self.webpackChunkyoung_datafan_website=self.webpackChunkyoung_datafan_website||[]).push([[7601],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,y=m["".concat(i,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49893:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={sidebar_position:24},i="\u65f6\u95f4\u6233\u8f6c\u5b57\u7b26\u4e32",u={unversionedId:"date/timestampToChar",id:"date/timestampToChar",title:"\u65f6\u95f4\u6233\u8f6c\u5b57\u7b26\u4e32",description:"\u4f7f\u7528\u793a\u4f8b",source:"@site/docs-sqlbuilder/date/timestampToChar.md",sourceDirName:"date",slug:"/date/timestampToChar",permalink:"/docs-sqlbuilder/date/timestampToChar",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u671f\u8f6c\u5b57\u7b26\u4e32",permalink:"/docs-sqlbuilder/date/to_char"},next:{title:"\u5b57\u7b26\u4e32\u8f6c\u65e5\u671f",permalink:"/docs-sqlbuilder/date/to_date"}},c=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[],level:3},{value:"ORACLE",id:"oracle",children:[],level:3},{value:"MYSQL",id:"mysql",children:[],level:3},{value:"POSTGRESQL",id:"postgresql",children:[],level:3},{value:"CLICKHOUSE",id:"clickhouse",children:[],level:3},{value:"KDW",id:"kdw",children:[],level:3},{value:"SQLSERVER",id:"sqlserver",children:[],level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65f6\u95f4\u6233\u8f6c\u5b57\u7b26\u4e32"},"\u65f6\u95f4\u6233\u8f6c\u5b57\u7b26\u4e32"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import com.youngdatafan.sqlbuilder.enums.DatabaseType;\nimport com.youngdatafan.sqlbuilder.enums.FunctionType;\nimport com.youngdatafan.sqlbuilder.model.Function;\nimport com.youngdatafan.sqlbuilder.model.Model;\nimport com.youngdatafan.sqlbuilder.model.Query;\nimport com.youngdatafan.sqlbuilder.model.Schema;\nimport com.youngdatafan.sqlbuilder.model.Table;\n\npublic class Test {\n\n    @org.junit.Test\n    public void getFunction() {\n        Schema schema = Schema.getSchema("");\n        Table test = Table.getOriginalTable(schema, "test", "t");\n        //\u65e5\u671f\u683c\u5f0f\u53c2\u8003database.properties \u6587\u4ef6\n        CustomSql customSql = CustomSql.getCustomSql("yyyy-MM-dd hh:mm:ss");\n        Model date = test.addField("date");\n        Query query = new Query();\n        Function function = Function.getFunction(FunctionType.DATE_TO_STRING, date, customSql);\n        query.addColumn("val", function);\n        query.addFrom(test);\n        System.out.println("oracle\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.ORACLE));\n        System.out.println();\n       \n        System.out.println("pg\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.POSTGRESQL));\n        System.out.println();\n       \n        System.out.println("clickhouse\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.CLICKHOUSE));\n        System.out.println();\n       \n        System.out.println("mysql\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.MYSQL));\n        System.out.println();\n       \n        System.out.println("sqlserver\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.MSSQL));\n        System.out.println();\n       \n        System.out.println("kdw\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.KDW));\n        System.out.println();\n    }\n}\n')),(0,l.kt)("p",null,"\u6839\u636e\u6570\u636e\u6e90\u83b7\u53d6\u5bf9\u4e8e\u6570\u636e\u5e93\u7684sql\u3002"),(0,l.kt)("h3",{id:"oracle"},"ORACLE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT TO_CHAR(t."date",yyyy-MM-dd hh:mm:ss) AS "val" FROM "test" t \n')),(0,l.kt)("h3",{id:"mysql"},"MYSQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DATE_FORMAT(t.`date`,yyyy-MM-dd hh:mm:ss) AS `val` FROM `test` t \n")),(0,l.kt)("h3",{id:"postgresql"},"POSTGRESQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_CHAR(t.date,yyyy-MM-dd hh:mm:ss) AS val FROM test t\n")),(0,l.kt)("h3",{id:"clickhouse"},"CLICKHOUSE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT formatDateTime(t.date,yyyy-MM-dd hh:mm:ss) AS val FROM test t \n")),(0,l.kt)("h3",{id:"kdw"},"KDW"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_CHAR(t.date,yyyy-MM-dd hh:mm:ss) AS val FROM test t\n")),(0,l.kt)("h3",{id:"sqlserver"},"SQLSERVER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONVERT(varchar(100),t.date,yyyy-MM-dd hh:mm:ss) AS val FROM test t \n")))}m.isMDXComponent=!0}}]);