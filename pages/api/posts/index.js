import {
    posts
} from '../../../posts'

export default (req, res) => {

    // // This works for JSON data
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.end(JSON.stringify({
    //     posts
    // }))

    //This Works for not Jason data ?!
    res.status(200).json(posts)

    // res.status(200).json(posts)
    // console.log(posts)
}