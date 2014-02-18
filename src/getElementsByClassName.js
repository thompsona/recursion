// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
 
var getElementsByClassName = function(className) {
  // your code here

    var arry = [];
    var traverse = function(currentNode) {

        var childs = currentNode.childNodes;
        for(var i = 0; i < childs.length; ++i) {
            if(childs[i].classList != undefined) {
                if(childs[i].classList.contains(className)) {
                    arry.push(childs[i]);
                }
                if(childs[i].hasChildNodes() === true) {
                    traverse(childs[i]);
                }
            }
        }

    };
    if(document.body.classList != undefined && document.body.classList.contains(className)) {
        arry.push(document.body);
    }
    traverse(document.body);

    return arry;
};
