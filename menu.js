var replaceMenus = {
    "Certificate Manager": "ACM",
    "API Gateway": "APIGW",
    "Amazon EventBridge": "Events",
    "Amazon Simple Email Service": "SES",
    "Console Home": "Home",
    "Elastic Beanstalk": "EB",
    "Route 53": "R-53",
    "Data Pipeline": "Pipeline",
    "Mobile Analytics": "MA",
    "CloudFormation": "CF",
    "Trusted Advisor": "TrustedAd",
    "EC2 Container Service": "ECS",
    "Elasticsearch Service": "ElastiS",
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
    "AWS Glue": "Glue",
    "AWS Backup": "Backup",
    "Key Management Service": "KMS",
    "DynamoDB": "DDB",
    "Resource Groups & Tag Editor": "Tag Editor",
    "Secrets Manager": "Secrets",
    "Systems Manager": "SSM",
    "AWS Cost Explorer": "Cost"
};

waitForKeyElements("ol[data-rbd-droppable-id*='global-nav-favorites-bar-list-edit-mode']", updateMenu, false);

function updateMenu(){
    console.log("Updating the menu");
    var replaced = [];
    var notFound = [];
    $("ol[data-rbd-droppable-id*='global-nav-favorites-bar-list-edit-mode']").find('li').each(function () {
        var label = $(this).find("span");
        var text = label.text();

        var found = false;
        for (var m in replaceMenus) {
            if (text == m) {
                found = true;
                var replaceWith=replaceMenus[m];
                replaced.push(`\t\t ${text} --> ${replaceWith}`);
                label.text(replaceWith);
                break;
            }
        }

        if (!found){
            notFound.push( text );
        }
    });

    console.log( `Replaced following :\n${replaced.join("\n")}` ) ;
    console.log( `nothing  found for :\n${notFound.join("\n")}` ) ;

    console.log('Sorting the menu now');
    $('ol[data-rbd-droppable-id*="global-nav-favorites-bar-list-edit-mode"]')
        .find('li')
        .children('a')
        .children('div')
        .children('span')
        .sortElements
    ((a, b) => a.textContent.toLowerCase().localeCompare(b.textContent.toLowerCase()),
        function(){
            return this.parentNode.parentNode;
        }
    );
}
