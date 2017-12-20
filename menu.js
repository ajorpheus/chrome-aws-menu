var replaceMenus = {
  "Elastic Beanstalk":"EB",
  "Route 53":"53",
  "Data Pipeline":"Pipeline",
  "Mobile Analytics": "MA",
  "CloudFormation": "CF",
  "Trusted Advisor": "TA",
  "EC2 Container Service": "ECS",
  "Elasticsearch Service": "ES",
  "Elastic Container Service": "ECS",
  "Simple Email Service": "SES"
};

$(".nav-shortcut").each(function(){
  var label = $($($(this)[0]).find("a")[0]).find(".service-label")[0];
  var text = (label.innerText);
  for (var m in replaceMenus) {
    if (text == m){
      label.innerText=replaceMenus[m];
    }
  }
});
