// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var elements = [];
  function test(element) {
      if (element.classList && element.classList.contains(className)) {
        elements.push(element);
      }

      for (var index = 0; index < element.childNodes.length; index++) {
        test(element.childNodes[index]);
      }

      return elements;
  }

    test(document.body);

  return elements;
};
