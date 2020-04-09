import {
    posts
} from '../../../posts';

export default ({
    query: {
        id
    }
}, res) => {
    const filtered = posts.filter(p => p.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({
            message: `No post with id:${id} is in our database`
        })
    }

}