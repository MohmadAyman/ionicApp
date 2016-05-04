// (function(){

//     angular.module('eliteApp')
//     .factory('SocketService', [socketFactory]);

//     function SocketService(socketFactory){
//         return socketFactory({
//             ioSocket: io.connect('http://localhost:5082')
//         });
//     }
// })();

 app.factory('socket',function(socketFactory){
        //Create socket and connect to http://chat.socket.io 
         var myIoSocket = io.connect('http://localhost:5082');

          mySocket = socketFactory({
            ioSocket: myIoSocket
          });

        return mySocket;
    })