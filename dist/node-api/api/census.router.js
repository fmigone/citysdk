var express=require("express"),keyauth=require("./auth.service"),CensusModule=require("../../build/modules/census/citysdk.census"),router=express.Router(),census=new CensusModule["default"]("88c69cd2d93fae30723c3ec3546d66521f339255");router.post("/geo",keyauth,function(e,s){function u(e){winston.info("GEO data received from CensusModule"),s.json(e)}census.geoRequest(e.body,u)}),router.post("/api",keyauth,function(e,s){function u(e){s.json(e)}census.apiRequest(e.body,u)}),module.exports=router;