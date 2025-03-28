// netlify/functions/random-song.js
const songs = [
    { title: "เพลงที่ 1", artist: "ศิลปิน A", url: "https://example.com/song1.mp3" },
    { title: "เพลงที่ 2", artist: "ศิลปิน B", url: "https://example.com/song2.mp3" },
    { title: "เพลงที่ 3", artist: "ศิลปิน C", url: "https://example.com/song3.mp3" }
  ];
  
  exports.handler = async (event, context) => {
    // เลือกเพลงแบบสุ่มจาก array
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
  
    return {
      statusCode: 200,
      body: JSON.stringify(randomSong)
    };
  };
  