// Create Azure Account - https://azure.microsoft.com/en-us/free/free-account-students-faq/
// Retrieve API Key - https://azure.microsoft.com/en-ca/try/cognitive-services/
// API Documentation - https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c9
function submitComment(commentControl) {
    // TODO - Call API
}

function navigateToComments(classId) {
    localStorage.setItem('currentItemId', JSON.stringify(classId));
    window.location.href = 'comments?classId=' + classId;
}
