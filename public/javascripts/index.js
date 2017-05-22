 var socket = io();
  socket.on('update', function (data) {
    console.log(data);
    document.getElementById('t').innerText = "Nhiệt độ:"+ data.t + " độ C";
    document.getElementById('h').innerText = "Độ ẩm:"+ data.h+" %";
  });