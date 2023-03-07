var arr = [];
const router = async function (req, res) {
  if (req.url === "/api/my_name" && req.method === "GET") {
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify(arr));
  }

  //  POST: /api/name
  if (req.url === "/api/save_name" /*&& req.method === "POST"*/) {
    try {
      const readline = require("readline");

       const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(
        "Enter a name you will like to be saved?",
        function(yourName)  {
          console.log(` ${yourName} has been added to the array!`);
          arr.push(yourName);
          rl.close();
        }
      );

      let body = "Go the the command line to enter a name";
      res.writeHead(200, { "Content-Type": "application/json" });
      //send response
      res.end(JSON.stringify(body));
    } catch (error) {
      console.log(error);
    }
  }

};

module.exports = router;
