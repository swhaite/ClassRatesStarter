// Create Azure Account - https://azure.microsoft.com/en-us/free/free-account-students-faq/
// Retrieve API Key - https://azure.microsoft.com/en-ca/try/cognitive-services/
// API Documentation - https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c9
function submitComment(commentControl) {
    var comments = document.getElementsByName(commentControl)[0].value;
    var url = "https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment";
    var apiKey = "950f8afdfb224995a4976ea72d96137a";
    
    var body = {
        "documents": [
            {
                "language": "en-US",
                "id": "1",
                "text": comments
            }
        ]
    }
    
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(body),
        processData: false,
        headers: {
            "Ocp-Apim-Subscription-Key": apiKey,
            "Content-Type": "application/json"
        }
    }).done(function(result){
        var sentimentRating = Math.round(result.documents[0].score*4) + 1;
        var currentItemId = JSON.parse(localStorage.getItem('currentItemId'));
        window.location.href = '/comments?classId=' + currentItemId + '&rating=' + sentimentRating + '&comments=' + comments;
    }).fail(function(xhr, status, err){
        alert(err);
    });
}

function navigateToComments(classId) {
    localStorage.setItem('currentItemId', JSON.stringify(classId));
    window.location.href = 'comments?classId=' + classId;
}

