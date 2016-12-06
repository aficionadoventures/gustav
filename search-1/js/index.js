(function(){
  
  var cities = ['Potato', 'Chicken', 'Mutton', 'Rice', 'Turkey\,  ...', 'Ham', 'Goatcheese', 'Chia Seeds'];
  
  var list = document.getElementsByClassName('cities')[0],
      search = document.getElementsByClassName('search-input')[0],
      label = document.getElementsByClassName('search-label')[0];
  
  list.innerHTML = cities.sort().join(', ');
  label.innerHTML = 'Search';
  
  search.oninput = function() {
    suggest();
  }
  
  function suggest() {
    var suggestion;
    if (search.value == '') {
      label.innerHTML = 'Search';
      return false;
    }
    for (var i = 0; i < 8; i++) {
      if (cities[i].toLowerCase().indexOf(search.value.toLowerCase()) == 0) {
        suggestion = cities[i];
        break;
      }
    }
    label.innerHTML = suggestion ? '<span style="opacity:0">' + search.value + '</span>' + suggestion.substring(search.value.length) : '';
  }
  
})();

