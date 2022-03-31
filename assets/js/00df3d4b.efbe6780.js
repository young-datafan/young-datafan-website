"use strict";(self.webpackChunkyoung_datafan_website=self.webpackChunkyoung_datafan_website||[]).push([[8780],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?r.createElement(y,u(u({ref:n},c),{},{components:t})):r.createElement(y,u({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3890:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),u=["components"],o={sidebar_position:4},s="\u9664",i={unversionedId:"base/div",id:"base/div",title:"\u9664",description:"\u4f7f\u7528\u793a\u4f8b",source:"@site/docs-sqlbuilder/base/div.md",sourceDirName:"base",slug:"/base/div",permalink:"/docs-sqlbuilder/base/div",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4e58",permalink:"/docs-sqlbuilder/base/mul"},next:{title:"case when",permalink:"/docs-sqlbuilder/base/case_when"}},c=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[],level:3},{value:"ORACLE",id:"oracle",children:[],level:3},{value:"MYSQL",id:"mysql",children:[],level:3},{value:"POSTGRESQL",id:"postgresql",children:[],level:3},{value:"CLICKHOUSE",id:"clickhouse",children:[],level:3},{value:"KDW",id:"kdw",children:[],level:3},{value:"SQLSERVER",id:"sqlserver",children:[],level:3}],m={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9664"},"\u9664"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import com.youngdatafan.sqlbuilder.enums.DatabaseType;\nimport com.youngdatafan.sqlbuilder.enums.FunctionType;\nimport com.youngdatafan.sqlbuilder.model.Function;\nimport com.youngdatafan.sqlbuilder.model.Model;\nimport com.youngdatafan.sqlbuilder.model.Query;\nimport com.youngdatafan.sqlbuilder.model.Schema;\nimport com.youngdatafan.sqlbuilder.model.Table;\n\npublic class Test {\n\n    @org.junit.Test\n    public void getFunction() {\n        Schema schema = Schema.getSchema("");\n        Table test = Table.getOriginalTable(schema, "test", "t");\n        Model num = test.addField("num");\n        Model num1 = test.addField("num1");\n        Query query = new Query();\n        Function function = Function.getFunction(FunctionType.DIV, num, num1);\n        query.addColumn("val", function);\n        query.addFrom(test);\n        System.out.println("oracle\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.ORACLE));\n        System.out.println();\n\n        System.out.println("pg\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.POSTGRESQL));\n        System.out.println();\n\n        System.out.println("clickhouse\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.CLICKHOUSE));\n        System.out.println();\n\n        System.out.println("mysql\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.MYSQL));\n        System.out.println();\n\n        System.out.println("sqlserver\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.MSSQL));\n        System.out.println();\n\n        System.out.println("kdw\uff1a");\n        System.out.println(query.getDatabaseSql(DatabaseType.KDW));\n        System.out.println();\n    }\n}\n')),(0,l.kt)("p",null,"\u6839\u636e\u6570\u636e\u6e90\u83b7\u53d6\u5bf9\u4e8e\u6570\u636e\u5e93\u7684sql\u3002"),(0,l.kt)("h3",{id:"oracle"},"ORACLE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT (t."num"/(case when t."num1"=0 then null else t."num1" end)) AS "val" FROM "test" t  \n')),(0,l.kt)("h3",{id:"mysql"},"MYSQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (t.`num`/(case when t.`num1`=0 then null else t.`num1` end)) AS `val` FROM `test` t\n")),(0,l.kt)("h3",{id:"postgresql"},"POSTGRESQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (t.num/(case when t.num1=0 then null else t.num1 end)) AS val FROM test t  \n")),(0,l.kt)("h3",{id:"clickhouse"},"CLICKHOUSE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (t.num/(case when t.num1=0 then null else t.num1 end)) AS val FROM test t\n")),(0,l.kt)("h3",{id:"kdw"},"KDW"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (t.num/(case when t.num1=0 then null else t.num1 end)) AS val FROM test t  \n")),(0,l.kt)("h3",{id:"sqlserver"},"SQLSERVER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (t.num/(case when t.num1=0 then null else t.num1 end)) AS val FROM test t \n")))}p.isMDXComponent=!0}}]);