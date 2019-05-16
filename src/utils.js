function day_of_the_month(d)
{ 
  return (d.getDate() < 10 ? '0' : '') + d.getDate();
}

function the_month(d)
{ 
  return (d.getMonth() < 10 ? '0' : '') + d.getMonth();
}

function rn_indexname_generator(){
  var dates_array = [
    new Date()
  ];

  var index_names_array = [];

  for(const i in dates_array)
  {
    index_names_array.push("access-" + dates_array[i].getFullYear() + '.' + the_month(dates_array[i]) + '.' + day_of_the_month(dates_array[i]));
  }

  return index_names_array.join(",");
}

module.exports = {
    day_of_the_month,
    the_month,
    rn_indexname_generator
};