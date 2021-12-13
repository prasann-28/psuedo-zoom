const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

let users = []
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello, world');
})

const addUser = (userName, roomId) => {
    users.push({
        userName: userName,
        roomId: roomId
    });
    // console.log(users)
}

const getRoomUsers = (roomId) => {
    other_users = users.filter(user => (user.roomId === roomId))
    // console.log(other_users)
    return other_users
}

const userLeave = (userName, roomId) => {
    users.filter(user => (user.userName != userName))
}


io.on('connection', socket => {
    console.log('Someone Connected')
    socket.on("join-room", ({roomId, userName}) =>{
        console.log('User joined room')
        console.log(roomId)
        console.log(userName)
        if(userName&&roomId){
        socket.join(roomId)
        addUser(userName, roomId)
        socket.to(roomId).emit("user-connected: ", userName)

        io.to(roomId).emit('all-users', getRoomUsers(roomId)  )
    }
        socket.on('disconnect', () =>{
            console.log('User disconnected')
            socket.leave(roomId);
            userLeave(userName)
            io.to(roomId).emit('all-users', getRoomUsers(roomId)  )

        })


    })
    
})

server.listen(PORT, () => {
    console.log('Zoom Clone API listening on 192.168.0.124:3001');

})

