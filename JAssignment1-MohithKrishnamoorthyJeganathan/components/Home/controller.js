//Render the home page
const getHomePage = async(request, response) => {
    response.render("index");
}

//Render the contact page
const getContactPage = async(request, response) => {
    response.render("contact");
}






//Export
module.exports = {
    getHomePage,
    getContactPage
};