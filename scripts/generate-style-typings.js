import DtsCreator from "typed-css-modules";
import glob from "glob";

const creator = new DtsCreator();

glob("src/components/**/*.scss", {}, (error, filePaths) => {
  for (const filePath of filePaths) {
    creator
      .create(filePath)
      .then(content => content.writeFile())
      .catch(error => console.log(error));
  }
});
