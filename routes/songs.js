const express = require('express')
const router = express.Router()
const Song = require('../models/song')


// All songs router
router.get('/', (req, res) =>{
    console.log('Went to songs list');
    res.render('./songs/index', { title:"Songs list"})
})

// New Song form
router.get('/new', (req, res) =>{
    res.render('./songs/new', new Song())
})
// Create song
router.post('/', async (req, res) =>{
    const song = new Song({
        title: req.body.title,
        author: req.body.author
    })
    try {
        const newSong = await song.save()
        // res.redirect('song/${newSong.id}')
        res.redirect('/songs')
    } catch {
        console.log('Error creating new song');
        res.render('songs/new', {
            song: song,
            errorMessage: 'Error creating new song'
        })
    }
    // song.save((err, newSong)=>{
    //     if(err) {
    //         res.render('song/new',{
    //             song: song,
    //             errorMessage: 'Error creating new song'
    //         })
    //     } else {
    //         //res.redirect('song/${newSong.id}')
    //         res.redirect('/')
    //     }
    // })
})


module.exports = router