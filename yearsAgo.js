module.exports = function(years) 
{

  var currentYear = new Date().getFullYear();
  
  console.log(currentYear);
	
  return currentYear - years;
 
}