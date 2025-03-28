const songs = [
    { 
      cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png", 
      title: "360", 
      spotify: "https://open.spotify.com/track/1"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    },
    { 
      cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png", 
      title: "B2b", 
      spotify: "https://open.spotify.com/track/2"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    },
    { 
      cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png", 
      title: "Apple", 
      spotify: "https://open.spotify.com/track/3"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    }
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
  