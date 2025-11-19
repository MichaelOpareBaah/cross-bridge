import http from 'node:http'

const PORT=3000

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('This will be my backend')
        res.end()
    }else {
        res.write('404 Error page');
        res.end();
    }
})


server.listen(PORT,()=>{console.log(`${PORT} is working`)})