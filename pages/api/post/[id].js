import posts from '../../../posts.json'

// export default (req, res) => {
//     res.status(200).json({
//         post: req.query.id,
//         posts
//     })
// }

export default (req, res) => {
    switch (req.method) {
        case 'GET':
            res.status(200).json({
                post: req.query.id,
                posts
            })
            break
        case 'POST':
            //...
            break
        default:
            res.status(405).end() //Method Not Allowed
            break
    }
}