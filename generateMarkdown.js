// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ${data.description}
    ${data.Installation}
    ${data.Usage}
    ${data.License}
    ${data.Contributing}
    ${data.Tests}
    ${data.Questions}
    ${data.Email}
    ${data["Github Username"]}
    https://api.github.com/users/${data["Github Username"]}
    ${data["Contact Us"]}





  `;
}

module.exports = generateMarkdown;