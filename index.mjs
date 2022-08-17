import Express from "express";

const app = Express();

app.get('/', (req, res) => {
    return res.json({message:'hello'})
})

app.listen(3000, () => console.log('app is running'))