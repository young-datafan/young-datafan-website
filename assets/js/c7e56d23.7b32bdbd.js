"use strict";(self.webpackChunkyoung_datafan_website=self.webpackChunkyoung_datafan_website||[]).push([[1418],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(u,".").concat(d)]||p[d]||c[d]||l;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25149:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={sidebar_position:11},u="like",s={unversionedId:"filter/like",id:"filter/like",title:"like",description:"\u4f7f\u7528\u793a\u4f8b",source:"@site/docs-sqlbuilder/filter/like.md",sourceDirName:"filter",slug:"/filter/like",permalink:"/docs-sqlbuilder/filter/like",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"or",permalink:"/docs-sqlbuilder/filter/or"},next:{title:"in",permalink:"/docs-sqlbuilder/filter/in"}},m=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[],level:3},{value:"ORACLE",id:"oracle",children:[],level:3},{value:"MYSQL",id:"mysql",children:[],level:3},{value:"POSTGRESQL",id:"postgresql",children:[],level:3},{value:"CLICKHOUSE",id:"clickhouse",children:[],level:3},{value:"KDW",id:"kdw",children:[],level:3},{value:"SQLSERVER",id:"sqlserver",children:[],level:3}],c={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"like"},"like"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import com.youngdatafan.sqlbuilder.enums.Cp;\nimport com.youngdatafan.sqlbuilder.enums.DatabaseType;\nimport com.youngdatafan.sqlbuilder.model.BinaryCondition;\nimport com.youngdatafan.sqlbuilder.model.Conditions;\nimport com.youngdatafan.sqlbuilder.model.CustomSql;\nimport com.youngdatafan.sqlbuilder.model.Model;\nimport com.youngdatafan.sqlbuilder.model.Query;\nimport com.youngdatafan.sqlbuilder.model.Schema;\nimport com.youngdatafan.sqlbuilder.model.Table;\n\npublic class Test {\n\n    @org.junit.Test\n    public void getFunction() {\n         Schema schema = Schema.getSchema("");\n         Table test = Table.getOriginalTable(schema, "test", "t");\n         Query query = new Query();\n         Model name = test.addField("name");\n         Model age = test.addField("age");\n         query.addColumn("name", name);\n         query.addColumn("age", age);\n         query.addFrom(test);\n         CustomSql equal = CustomSql.getCustomSql("\'%\u674e%\'");\n         //where\n         Conditions where = Conditions.getInstance(Cp.NONE, BinaryCondition.like(name, equal));\n         query.setWHere(where);\n         System.out.println("oracle\uff1a");\n         System.out.println(query.getDatabaseSql(DatabaseType.ORACLE));\n         System.out.println();\n \n         System.out.println("pg\uff1a");\n         System.out.println(query.getDatabaseSql(DatabaseType.POSTGRESQL));\n         System.out.println();\n \n         System.out.println("clickhouse\uff1a");\n         System.out.println(query.getDatabaseSql(DatabaseType.CLICKHOUSE));\n         System.out.println();\n \n         System.out.println("mysql\uff1a");\n         System.out.println(query.getDatabaseSql(DatabaseType.MYSQL));\n         System.out.println();\n \n         System.out.println("sqlserver\uff1a");\n         System.out.println(query.getDatabaseSql(DatabaseType.MSSQL));\n         System.out.println();\n \n         System.out.println("kdw\uff1a");\n         System.out.println(query.getDatabaseSql(DatabaseType.KDW));\n         System.out.println();\n    }\n}\n')),(0,l.kt)("p",null,"\u6839\u636e\u6570\u636e\u6e90\u83b7\u53d6\u5bf9\u4e8e\u6570\u636e\u5e93\u7684sql\u3002"),(0,l.kt)("h3",{id:"oracle"},"ORACLE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT t."name" AS "name",t."age" AS "age" FROM "test" t WHERE t."name" LIKE \'%\u674e%\'       \n')),(0,l.kt)("h3",{id:"mysql"},"MYSQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT t.`name` AS `name`,t.`age` AS `age` FROM `test` t WHERE t.`name` LIKE '%\u674e%'  \n")),(0,l.kt)("h3",{id:"postgresql"},"POSTGRESQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT t.name AS name,t.age AS age FROM test t WHERE t.name LIKE '%\u674e%'    \n")),(0,l.kt)("h3",{id:"clickhouse"},"CLICKHOUSE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT t.name AS name,t.age AS age FROM test t WHERE t.name LIKE '%\u674e%' \n")),(0,l.kt)("h3",{id:"kdw"},"KDW"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT t.name AS name,t.age AS age FROM test t WHERE t.name LIKE '%\u674e%' \n")),(0,l.kt)("h3",{id:"sqlserver"},"SQLSERVER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT t.name AS name,t.age AS age FROM test t WHERE t.name LIKE '%\u674e%' \n")))}p.isMDXComponent=!0}}]);