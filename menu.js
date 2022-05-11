var replaceMenus = {
    "Certificate Manager": "ACM",
    "API Gateway": "APIGW",
    "Amazon EventBridge": "Events",
    "Amazon Simple Email Service": "SES",
    "Console Home": "Home",
    "Elastic Beanstalk": "EB",
    "Route 53": "53",
    "Data Pipeline": "Pipeline",
    "Mobile Analytics": "MA",
    "CloudFormation": "CF",
    "Trusted Advisor": "TA",
    "EC2 Container Service": "ECS",
    "Elasticsearch Service": "ES",
    "Elastic Container Service": "ECS",
    "Simple Notification Service": "SNS",
    "Simple Queue Service": "SQS",
    "CloudWatch": "CW",
    "CloudTrail": "CT",
    "Lambda": "ƛ",
    "Elastic Container Registry": "ECR",
    "Certificate Manager": "Certs",
    "Security Hub": "SecHub",
    "GuardDuty": "GDuty",
    "Simple Email Service": "SES",
    "Trusted Advisor": "TrAdv",
    "AWS Glue": "Glue",
    "Key Management Service": "KMS"
};

console.log("Here")

$("ol[data-rbd-droppable-id*='global-nav-favorites-bar-list-edit-mode']").find('li').each(function () {
    var label = $(this).find("span")[0];
    var text = label.innerText
    console.log("checking : " + text);
    for (var m in replaceMenus) {
        if (text == m) {
            console.log("Found: " + text);
            label.innerText = replaceMenus[m];
        }
    }
});
