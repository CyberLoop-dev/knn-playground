import test from"node:test";import assert from"node:assert/strict";import{classify}from"../public/knn.js";
test("predicts the majority label among nearest neighbors",()=>{const r=classify([{x:0,y:0,label:"A"},{x:1,y:0,label:"A"},{x:9,y:9,label:"B"}],{x:0.2,y:0},3);assert.equal(r.label,"A");assert.equal(r.neighbors.length,3);});
test("limits k to the number of available points",()=>{const r=classify([{x:0,y:0,label:"A"}],{x:1,y:1},5);assert.equal(r.neighbors.length,1);});
test("rejects invalid points and k",()=>{assert.throws(()=>classify([],{x:0,y:0},1),/training point/);assert.throws(()=>classify([{x:0,y:0,label:"A"}],{x:0,y:0},0),/positive integer/);});
