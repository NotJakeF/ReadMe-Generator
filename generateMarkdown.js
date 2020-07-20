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


    # ${data.title}

   
    
    # Installation Instructions
    ${data.Installation}
    
   
    
    # Usage
    ${data.Usage}
    
   
    
    # Contributing  
    ${data.Contributing}
    Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
    
    Please make sure to update tests as appropriate.
    
    # License 
    ${data.License}
    
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}]
    [github](https://github.com/${data["Github Username"]})


  `;
}

module.exports = generateMarkdown;