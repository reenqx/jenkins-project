const songs = [
    { cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png", title: "360", url: "https://example.com/song1.mp3" },
    { cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png", title: "B2b", url: "https://example.com/song2.mp3" },
    { cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png", title: "Apple", url: "https://example.com/song3.mp3" }
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
  