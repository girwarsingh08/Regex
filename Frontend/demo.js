function getgit(callback) {
    setTimeout(() => {
      const git = "🥔";
      console.log("here we got the git", git);
      callback(git);
    }, 5000);
  }
  
  function learnlinux(git, callback) {
    setTimeout(() => {
      const linux = git + " linux";
      console.log("git is ready and here learn linux", linux);
      callback(linux);
    }, 10000);
  }
  
  function learngitlinux(git, linux, callback) {
    setTimeout(() => {
      const mongodb = git + linux + " mongodb";
      console.log("mongocommunity is ready", mongodb);
      callback(mongodb);
    }, 15000);
  }
  
  getgit((git) => {
    learnlinux(git, (linux) => {
      learngitlinux(git, linux, (mongodb) => {
        console.log("mongodb is ready", mongodb);
      });
    });
  });
  