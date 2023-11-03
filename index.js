const http = require("http");
const result = [1, 4, 5,1,4];

const server = http.createServer( (req, res) => {
    if(req.url==='/'){
        res.write(JSON.stringify(result));
        
    }else if(req.url==="/create"){
        result.push(Math.random()*100);
        res.write(JSON.stringify(result));
        
    }else if(req.url==="/update"){
        result[10]++;
        res.write(JSON.stringify(result));
        
    }
    else if(req.url ==="/delete"){
        result.pop();
        result.pop();
        res.write(JSON.stringify(result));
        
    }
    
  
  res.end();
});

const port = 3002;
server.listen(port, () => {console.log(`listening on port ${port}`);
});

