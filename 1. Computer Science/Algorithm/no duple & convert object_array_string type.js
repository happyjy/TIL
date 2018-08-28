var dataList = [
  {lClass_nm : "대분류1", mClass_nm : "중분류1", lClass_cd : "L001", mClass_cd : "M001"},
  {lClass_nm : "대분류1", mClass_nm : "중분류2", lClass_cd : "L001", mClass_cd : "M002"},
  {lClass_nm : "대분류1", mClass_nm : "중분류3", lClass_cd : "L001", mClass_cd : "M003"},
  {lClass_nm : "대분류2", mClass_nm : "중분류4", lClass_cd : "L002", mClass_cd : "M004"}
]
//#원하는 결과
// 대분류  || 대분류
//---------------------------------
// 대분류1 || 중분류1, 중분류2, 증분류3
// 대분류2 || 중분류4


//HOW 
//step1 중복제거
//step2 obj type -> array type
//step3 array type -> string type

//step1 중복제거 
//*** map은 key가 중복되지 않는다.
var noDuplObjLclass = {};
var noDuplObjMclass = {};
dataList.forEach(function(item, idx){
  noDuplObjLclass[item.lClass_cd] = item;
  noDuplObjMclass[item.mClass_cd] = item;
});


// step2. obj type -> array type
var noDuplArrLclass = [];
var noDuplArrMclass = [];
for(var key1 in noDuplObjLclass){
  noDuplArrLclass.push(noDuplObjLClass[key1]);
}

for(var key2 in noDuplObjMclass){
  noDuplArrMclass.push(noDuplObjMclass[key2]);
}

// step3. array type -> string type
// 대분류1 || 중분류1, 중분류2, 증분류3
// 대분류2 || 중분류4
var lClassStr = '';
var mClassStr = '';

noDuplArrLclass.forEach(function(item, idx){
  noDuplArrLclass.length - 1 == idx ? lClassStr += item.lClass_nm : lClassStr += item.lClass_nm + ", ";
})

noDuplArrMclass.forEach(function(item, idx){
  noDuplArrMclass.length -1 == idx ? mClassStr += item.mClass_nm : mClassStr += item.mClass_nm + ", ";
})